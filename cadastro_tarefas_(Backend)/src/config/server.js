const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

const port = 3003;


//middlewares
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(allowCors);

//executando o express
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

module.exports = server;