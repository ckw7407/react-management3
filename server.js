var express = require('express');
const bodyParser= require('body-parser');
// 서버를 생성합니다.
var app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', function (request, response) {
  response.send({message:'Hello Express'});
});

app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:5000');
});