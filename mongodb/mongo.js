const express = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended :true}))

mongoose.connect("mongodb://127.0.0.1/learn")
.then(()=>{
    console.log('server connected ');
}).catch((error)=>{
    console.log(error);
})

const learnSchema = {
    name : String,
    age : Number,
    gender : String,
    interest : [String],
    data : String
}

const learnModel = mongoose.model('learnModel' , learnSchema)

// async function profile(){
//     const profile1 = new learnModel({
//         name : 'sahil',
//         age : 22,
//         gender : 'male',
//         interest :["reading" , 'playing' , 'slaying']
//     })
  
//   const result = await profile1.save()
// }

// profile()

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html')
//     // res.send("welcome to homepage")
// })


// app.post('/', (req,res)=>{
//     let name = req.body.name
//     let age = req.body.age
//     let gender = req.body.gender
//     let data = req.body.data

//   async function profile(){
//     const profile2 = new learnModel({
//         name : name,
//         age : age,
//         gender : gender,
//         data : data
//     })
  
//   const result = await profile2.save()
// }

// profile()

//     res.send(`Dear ${name} your response has been submitted`)
// })
app.get ('/get' ,(req,res)=>{
    async function fetch(){
        let fetchData = await learnModel.find({name : 'sahil'}).select({data : 1 , _id : 0})
        const data = fetchData[1]
        res.send(data)
    }
    
    fetch()
   
})


app.listen(7000,()=>{
    console.log("server is running");
})