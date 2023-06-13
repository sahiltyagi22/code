const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))


let courses =[
    {id :1 , name : 'java'},
  { id:2 , name : "c++"},
   { id:3 , name : 'javascript'},
]


app.get('/' , (req,res)=>{
    res.sendFile(__dirname +'/index.html' )
})

app.get('/contact',(req,res)=>{
    res.send('contact route is working')
})

app.post('/', (req,res)=>{
    const{name , email} = req.body

    res.send(`welcome aboard ${name}`)

    console.log(name)
    console.log(email);
})

app.get('/courses', (req,res)=>{
    res.send(courses)
})

app.get('/courses/:name', (req,res)=>{
  const course = courses.find(course =>course.name === (req.params.name))
  if(!course) {
    res.status(404).send("the course you are looking for doesnt exists")
}
  res.send(course)

})


app.put('/courses/:name', (req,res)=>{
    const course = courses.find(course =>course.name === (req.params.name))
    console.log(course)
    if(!course) {
        res.status(404).send("the course you are looking for doesnt exists")
    }

    course.name = req.params.name
    res.send(course)
})


app.delete('/courses/:name' , (req,res)=>{
    let updatedCourse = courses.filter(course =>course.name !== req.params.name )
    courses= updatedCourse

    res.send(courses)
})







app.listen(3000, ()=>{
    console.log("server is up and running ");
})