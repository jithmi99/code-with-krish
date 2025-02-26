const express=require('express');

const app=new express();
const port=3000;
const greeting={message:'hello node'};
const utils = require('./util');

app.get('/number/max',(req,res)=>{
    const numbers = parseInt(req.query.numbers);

    let result = utils.getMaxNumber(numbers);

    if (result === "Not a number") {
        res.status(400).send({ error: 'Invalid number' });
    }

    res.send({ max: result });
});

app.get('/number/average',(req,res)=>{
    const numbers = parseInt(req.query.numbers);

    let result = utils.getAverage(numbers);

    if (result === "Not a number") {
        res.status(400).send({ error: 'Invalid number' });
    }

    res.send({ average: result });
});

app.get('/number/sort',(req,res)=>{
    const numbers = parseInt(req.query.numbers);
    const type = parseInt(req.query.numbers);
    
    let result = utils.getSort(numbers, type);

    if (result === "Not a number") {
        res.status(400).send({ error: 'Invalid number' });
    }

    res.send({ sort: result });
});

app.get('/number/count',(req,res)=>{});

app.get('/number/min',(req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);

    // if(isNaN(num1) || isNaN(num2)){
    //     return res.status(400).send({error:'Invalid number'});

    // }

    // res.send({min:Math.min(num1,num2)});

    let result = utils.getMinNumber(num1, num2);

    if (result === "Not a number") {
        res.status(400).send({ error: 'Invalid number' });
    }

    res.send({ min: result });

});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);