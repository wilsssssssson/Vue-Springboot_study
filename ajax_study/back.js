const express = require('express');

const app =express();

app.get('/server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')//允许跨域
    res.send('safsadf');
})
app.post('/server',(req,res)=>{
    console.log(req.params)
    res.setHeader('Access-Control-Allow-Origin','*')//允许跨域

    data={
        msg:'asdfsadfsad'
    }

    res.send(json.json);
})

app.listen(8000,()=>{
    console.log("好了")
})