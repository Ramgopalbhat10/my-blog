"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
var mongoURL = 'mongodb://localhost:27017';
var blogDb = 'my-blog';
var blogDbCollection = {
  articles: 'articles'
};
app.use(_bodyParser["default"].json());
app.get("/api/articles/:name",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            withDB(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(db) {
                var articleName, articleInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        articleName = req.params.name;
                        _context.next = 3;
                        return db.collection(blogDbCollection.articles).findOne({
                          name: articleName
                        });

                      case 3:
                        articleInfo = _context.sent;
                        res.status(200).json(articleInfo);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }(), res);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/api/articles/:name/upvote",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            withDB(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(db) {
                var articleName, articleInfo, updatedArticleInfo;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        articleName = req.params.name;
                        _context3.next = 3;
                        return db.collection(blogDbCollection.articles).findOne({
                          name: articleName
                        });

                      case 3:
                        articleInfo = _context3.sent;
                        _context3.next = 6;
                        return db.collection(blogDbCollection.articles).updateOne({
                          name: articleName
                        }, {
                          '$set': {
                            upvotes: articleInfo.upvotes + 1
                          }
                        });

                      case 6:
                        _context3.next = 8;
                        return db.collection(blogDbCollection.articles).findOne({
                          name: articleName
                        });

                      case 8:
                        updatedArticleInfo = _context3.sent;
                        res.status(200).json(updatedArticleInfo);

                      case 10:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x6) {
                return _ref4.apply(this, arguments);
              };
            }(), res);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
app.post("/api/articles/:name/add-comment",
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body, userName, text, articleName;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, userName = _req$body.userName, text = _req$body.text;
            articleName = req.params.name;
            withDB(
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5(db) {
                var articleInfo, updatedArticleInfo;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return db.collection(blogDbCollection.articles).findOne({
                          name: articleName
                        });

                      case 2:
                        articleInfo = _context5.sent;
                        _context5.next = 5;
                        return db.collection(blogDbCollection.articles).updateOne({
                          name: articleName
                        }, {
                          '$set': {
                            comments: articleInfo.comments.concat({
                              userName: userName,
                              text: text
                            })
                          }
                        });

                      case 5:
                        _context5.next = 7;
                        return db.collection(blogDbCollection.articles).findOne({
                          name: articleName
                        });

                      case 7:
                        updatedArticleInfo = _context5.sent;
                        res.status(200).json(updatedArticleInfo);

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }(), res);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());
app.listen(8010, function () {
  return console.log("listening on port 8010");
});

var withDB =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(operations, res) {
    var client, db;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _mongodb.MongoClient.connect(mongoURL, {
              useNewUrlParser: true
            });

          case 3:
            client = _context7.sent;
            db = client.db(blogDb);
            _context7.next = 7;
            return operations(db);

          case 7:
            client.close();
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json({
              message: 'Error connecting to db',
              error: _context7.t0
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 10]]);
  }));

  return function withDB(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();
//# sourceMappingURL=server.js.map