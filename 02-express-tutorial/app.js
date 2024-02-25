// console.log('Express Tutorial')
const http=require('http')
const {readFileSync}=require('fs')

//get all files
const homepage=readFileSync('./index.html')

const server=http.createServer((req,res)=>{
  //console.log(req.method)
  const url=req.url;
  //home page
  if(url==='/'){
  res.writeHead(200,{'context-type':'text/html'})
  res.write(Homepage)
  // console.log('user hit the server')
  console.log(req.url)
  res.end('')
  }
  //about page 
  else if(url==='/about'){
    res.writeHead(200,{'context-type':'text/html'})
    res.write('<h1>Home page</h1>')
  }
  //404 error
  else {
    res.writeHead(404,{'context-type':'text/html'})
    res.write('<h1>Home page</h1>')
  }
})

server.listen(5000)
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.end('home page');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
