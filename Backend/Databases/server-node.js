 const http = require('http') //importing modules, setting hostname and ports
 const hostname = '127.0.0.1'
 const port = 8000

 const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200 
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello ice tea")
    }else if(req.url ==='/ice-tea'){
        res.statusCode = 200 
        res.setHeader('Content-Type', 'text/plain')
        res.end("Thanks for ordering the ice tea , its really hot")
    }else{
        res.statusCode = 200 
        res.setHeader('Content-Type', 'text/plain')
        res.end("404 - NOT FOUND")    
    }
 })

 server.listen(port, hostname, () => {
    console.log(`server is listening at http://${hostname}:${port}`)
 })

 //this code is a nightmare, its not at all scalable so lets see what we can do to make it more scalabale for various routes

