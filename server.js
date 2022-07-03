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

const db = require('./config/db');

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/customers', (req, res) => {
  db.query(
    "select * from customer",
    (err,rows,fields) => {
      res.send(rows);
    }
  );
});
  
app.use('/image',express.static('./upload'));

app.post('/api/customers',upload.single('image'),(req,res)=>{
  let sql = 'INSERT INTO customer values (null,?,?,?,?,?)';
  let image = '/image/' + req.file.fileName;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image,name,birthday,gender,job]
  console.log(name);
  console.log(image);
  console.log(birthday);
  console.log(gender);
  console.log(job);
  db.query(sql,params,
    (err,rows,fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:5000');
});