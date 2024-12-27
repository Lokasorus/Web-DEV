//designing the CRUD create update delete recieve application
//postman is used to run test in the backend 

import 'dotenv/config'
// require('dotenv').config() //to import env file

import express from 'express'
const app = express()
//this port is not suppose to be like this, it requires some way of configuring things and u need to use some env variables

const port =  process.env.port || 3000 //process.env.variable_name to access something from env file

// "/" - home route
// send to send the response

// app.get("/", (req, res) => {
//     res.send("Hello from Atyp")

// })
// app.get("/ice-tea", (req, res) => {
//     res.send("What ice tea would you prefer?")

// })
// app.get("/twitter", (req, res) => {
//     res.send("aryanattwitter")

// })

//accepting the data from frontend

app.use(express.json())

let teadata = [] // storing data in array// if am going to push the data into array i need a key to uniquely identify the data
let nextID = 1
//i need to create different route to add a tea in the teaDATA , i can see how many teas are there in my array, update it or delete it
//whenever you take a data use this

// through the request we can also extract the data in exxpress see how its done below
//doing something in postman through pose  and body provide the valid json data 
//if saed then server restart again and again storing data in array
//to add tea
app.post('/teas', (req, res) => {
    const {name, price} = req.body //destructuring
    const newTea = {id: nextID++, name, price} //name and price from the reqbody
    teadata.push(newTea)//storing into array
    res.status(201).send(newTea) //note: not including return keyword without a condition
})
//to get all tea
app.get('/teas', (req, res) => {
    res.status(200).send(teadata)
})
// to get a single particular tea using special syntaax :id

app.get('/teas/:id', (req, res) => {
    const tea = teadata.find(t => t.id === parseInt(req.params.id) ) //post is through the body, we send the json through the body while get if we send it through the url then we do it on paramas, anything comeing from url is in the string format
    if(!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea)
})

//update tea
//writing a business logic 
app.put('/teas/:id', (req, res) => {
    const tea = teadata.find(t => t.id === parseInt(req.params.id))//grabbing the id
    if(!tea){
        return res.status(404).send('Tea not found')
    }//if tea not present
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)
})

//delete tea
app.delete('/teas/:id', (req, res) => {
    const index = teadata.findIndex(t => t.id === parseInt(req.params.id))
    if(index ===  -1){
        return res.status(404).send('tea not found')
    }
    teadata.splice(index, 1)
    return res.status(204).send('tea deleted')

})

app.listen(port, () => {
    console.log(`Server is running at ${port}...`)
}) 

