const express = require('express');
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.get('/',(req, res)=>{
    res.send('phone info coming xx')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req,res)=>{
    const id = req.params.id;
    console.log('lmao', id);
    res.send(id)
})

app.listen(port,()=>{
    console.log(`phone server running on port: ${port}`)
})