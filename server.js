var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    heading:"article one",
    title:"article-one",
    date:"sept 5",
    content:`<p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes 
            </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>
            
    `
            },
'article-two':{
    heading:"article two",
    title:"article-two",
    date:"sept 6",
    content:`<p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes 
            </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>`
            
},
'article-three':{
    heading:"article one",
    title:"article-one",
    date:"sept 5",
    content:`<p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes 
            </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>
            <p>A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of many sentences. They are usually between four to eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again; this makes </p>
            `
}
            };
function createtemplate(data){
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;

        var htmltemplate=`<html>
            <head>
                <title>${title}</title>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body><div class="container">
                <div>
                    <a href='/'>home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>${date}</div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
        </html>
        
        `;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req, res){
    var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
