const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db')
const FeedbackModel = require('./feedback_schema')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',(req,res)=>{
    res.end("Welcome to root path")
});

app.get('/home',(req,res)=>{
    res.end("Welcome to home path")
});

app.post('/api',(req,res)=>{
    // const username = req.body.username;
    // const password = req.body.password;
    // const name = req.body.name;

    FeedbackModel.create(req.body, (err, doc)=>{
        if (err) res.json({result: "failed"})
        res.json({result: "success"});
    })
});

app.get('/api', (req, res)=>{
    FeedbackModel.find((err, doc)=>{
        if (err) res.json({result: "failed"})
        res.json({result: "success", data: doc});
    })
});

app.listen(3000,()=>{
    console.log("server is running....");
})