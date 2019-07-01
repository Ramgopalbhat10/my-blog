import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { MongoClient } from 'mongodb';

const app = express();
const mongoURL = 'mongodb://localhost:27017';
const blogDb = 'my-blog';
const blogDbCollection = {
  articles: 'articles'
};

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db.collection(blogDbCollection.articles).findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);  
})

app.post("/api/articles/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db.collection(blogDbCollection.articles).findOne({ name: articleName });
    await db.collection(blogDbCollection.articles).updateOne({ name: articleName }, {
      '$set': {
        upvotes: articleInfo.upvotes + 1
      }
    });

    const updatedArticleInfo = await db.collection(blogDbCollection.articles).findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  const { userName, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db.collection(blogDbCollection.articles).findOne({ name: articleName });
    await db.collection(blogDbCollection.articles).updateOne({ name: articleName }, {
      '$set': {
        comments: articleInfo.comments.concat({ userName, text })
      }
    });
    const updatedArticleInfo = await db.collection(blogDbCollection.articles).findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8010, () => console.log("listening on port 8010"));


const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(mongoURL, { useNewUrlParser: true });
    const db = client.db(blogDb);

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error }); 
  }
}
