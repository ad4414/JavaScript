const http=require('http')
const server=http.createServer()
const fs=require('fs')
 

const path=require('path')
server.on('request',(req,res)=>{
    if(req.url='./hello.js'){
     fs.readFile(path.join(__dirname,'./result1.html'),(err,data)=>{
        if(err) console.log(err);
        else {
           
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data.toString())
        }
     })
    }else{
        console.log('你要访问的资源不存在');
    }

})
server.listen(3001,()=>{
    console.log('web 服务启动成功了');
})