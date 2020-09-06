const express = require('express');
const app =  express(); 
const router = require('./router');
const bodyParser = require('body-parser');

app.use(express.static('public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = require('http').createServer(app);
server.listen(3000,()=>{
    console.log("application is listening on port 3000");
})

app.post('/login', function(req, res) {
    console.log("req.body.name",req.body.name)
    if(req.body.name === 'abhijit' && req.body.password === 'mallik')
    {
        res.send({data:true})
    }
    res.send({data:false})
    //res.json({title: 'Express' });
});

