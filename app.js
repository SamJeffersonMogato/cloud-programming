const http = require("http")
const fs = require("fs")

const headers = {"content-Type":"text/html"}

const server = http.createServer((req, res) => {
    fs.readFile("index.html",'utf-8', (err, data) => {
        if(err){
            res.writeHead(500,headers);
            res.end(err);
        }
        else{
            const render = data.replace("{{name}}","Amor & Mogato").replace("{{age}}","21 & 21")
            res.writeHead(200, headers);
            res.end(render);
        }
    })
})

server.listen(3000, () => {
    console.log("server listening at port 30000")
})