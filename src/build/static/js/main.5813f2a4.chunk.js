(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);a(27);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=a(19),o=a(20),s=a(24),m=a(21),u=a(25),p=a(6),d=a(7),f=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"ui header"},"Welcome to my Blog!"),r.a.createElement("p",null,"This the place where I share about my experience in IT and write some technical articles."))},h=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"ui header"},"About Me!"),r.a.createElement("p",null,"I'm a self taught web developer focused on crafting clean and user friendly experiences"))},E=function(e){var t=e.articles,a=e.layout;return r.a.createElement("div",{className:a},t.map(function(e,t){return r.a.createElement(p.b,{className:"article",to:"/article/".concat(e.name),key:t},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content[0].substring(0,100),"..."))}))},v=[{name:"learn-react",title:"The fastest way to learn React",content:["A JavaScript library for building user interfaces","React makes it painless to create interactive UIs. Design simple views for each state in your application, \n       and React will efficiently update and render just the right components when your data changes.","Build encapsulated components that manage their own state, then compose them to make complex UIs."],link:"https://reactjs.org/"},{name:"learn-node",title:"The easiest way to learn Node",content:["Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!","Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant."],link:"https://nodejs.dev/"},{name:"learn-angular",title:"The right way to learn Angular",content:["Angular is a platform that makes it easy to build applications with the web.","Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges.","Angular empowers developers to build applications that live on the web, mobile, or the desktop."],link:"https://angular.io/"}],b=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"ui header"},"My Atricles"),r.a.createElement(E,{articles:v,layout:"articleListVertical"}))},N=a(5),g=a.n(N),y=a(8),w=a(11),j=function(e){var t=e.articleName,a=e.upvotes,n=e.setArticleInfo,c=function(){var e=Object(y.a)(g.a.mark(function e(){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"ui right labeled button",role:"button",tabindex:"0"},r.a.createElement("button",{className:"ui icon button",onClick:function(){return c()}},r.a.createElement("i",{"aria-hidden":"true",className:"heart icon"}),"Like"),r.a.createElement("p",{className:"ui left pointing basic label"},a))},k=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,t.length>0&&r.a.createElement("div",{className:"ui comments"},r.a.createElement("h3",{className:"ui dividing header"},"Comments"),t.map(function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("div",{className:"content"},r.a.createElement("a",{className:"author",href:"null"},e.userName),r.a.createElement("div",{className:"text"},e.text)))})))},x=function(e){var t=e.articleName,a=e.setArticleInfo,c=Object(n.useState)(""),l=Object(w.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(""),m=Object(w.a)(s,2),u=m[0],p=m[1],d=function(){var e=Object(y.a)(g.a.mark(function e(n){var r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({userName:i,text:u}),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,a(c),o(""),p("");case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"equal width fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name:"),r.a.createElement("div",{className:"ui fluid input"},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)},placeholder:"First name"})))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Comment:"),r.a.createElement("textarea",{value:u,onChange:function(e){return p(e.target.value)},rows:"3"})),r.a.createElement("div",{className:"field",onClick:function(e){return d(e)}},r.a.createElement("button",{type:"button",className:"ui button"},"Submit")))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404: Page Not found :("))},A=function(e){var t=e.match.params.name,a=v.find(function(e){return e.name===t}),c=v.filter(function(e){return e.name!==t}),l=Object(n.useState)({upvotes:0,comments:[]}),i=Object(w.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)(function(){!function(){var e=Object(y.a)(g.a.mark(function e(){var a,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),a?r.a.createElement("div",null,r.a.createElement("h1",{className:"ui header"},a.title),a.content.map(function(e,t){return r.a.createElement("p",{key:t},e)}),r.a.createElement("div",{className:"articleInfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Source: "),r.a.createElement("a",{className:"articleSourceLink",href:a.link,target:"_blank",rel:"noopener noreferrer"},a.link)),r.a.createElement(j,{articleName:t,upvotes:o.upvotes,setArticleInfo:s})),r.a.createElement(k,{comments:o.comments}),r.a.createElement("h3",{className:"header"},"Submit a new comment"),r.a.createElement(x,{articleName:t,setArticleInfo:s}),r.a.createElement("h1",{className:"ui header"},"My Other Articles"),r.a.createElement(E,{articles:c,layout:"articleListHorizontal"})):r.a.createElement(O,null)},I={height:"5rem",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",borderBottom:"2px solid black"},S=function(){return r.a.createElement("div",{role:"list",style:I,className:"ui horizontal list"},r.a.createElement("div",{role:"listitem",className:"item"},r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("div",{role:"listitem",className:"item"},r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement("div",{role:"listitem",className:"item"},r.a.createElement(p.b,{to:"/article-list"},"Articles")))},C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"ui text container main"},r.a.createElement(S,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:f,exact:!0}),r.a.createElement(d.a,{path:"/about",component:h}),r.a.createElement(d.a,{path:"/article-list",component:b}),r.a.createElement(d.a,{path:"/article/:name",component:A}),r.a.createElement(d.a,{component:O}))))}}]),t}(n.Component);a(37),a(38),a(39);l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5813f2a4.chunk.js.map