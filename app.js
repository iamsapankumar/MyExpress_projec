const express =  require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan')
const config = require('./config/config')
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(morgan('combined'))


app.get('/student', (req, res)=>{
  res.status(200).send({
      id: '011',
      name: 'Sapan Kumar Das'
  })
})

//const port = process.env.PORT ||3000;
app.listen(config.port, ()=>{
    console.log(`Server runing on port : ${config.port}`)
})

