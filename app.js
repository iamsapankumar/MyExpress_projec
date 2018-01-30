const express =  require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))


app.get('/student', (req, res)=>{
  res.status(200).send({
      id: '01',
      name: "Sapan Kumar Das"
  })
})

const port = process.env.PORT ||3000;
app.listen(port, ()=>{
    console.log(`Server runing on port : ${port}`)
})

