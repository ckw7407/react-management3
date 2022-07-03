var express = require('express');
const bodyParser= require('body-parser');
// 서버를 생성합니다.
var app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/api/hello', function (request, response) {
//   response.send({message:'Hello Express'});
// });

app.get('/api/customers', (req, res) => {
  res.send([
    {
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday':'2021',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'name': '김길동',
        'birthday':'2022',
        'gender':'남자',
        'job':'개발자'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'name': '박길동',
        'birthday':'2022',
        'gender':'남자',
        'job':'디자이너'
      }
  ]);
});
  

app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:5000');
});