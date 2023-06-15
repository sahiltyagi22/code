const express = require('express')
const app = express()




app.use(middleware1)
app.use(middleware2)





function middleware1(req,res,next){
    console.log('i am middleware 1');
    req.customPara = 100;
    next()

}

function middleware2(req,res,next){
    console.log(`the value is ${req.customPara}`);
    req.customPara = 500;
    next()
}

app.get('/' , (req,res,next)=>{
    res.send(`the valsue is ${req.customPara}`)
    next()
    })





app.listen(1900,()=>{
    console.log('server is running');
})
