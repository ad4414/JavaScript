 const fs=require('fs')
 const path=require('path')
 fs.readFile(path.join(__dirname,'./hello.html'),(err,res)=>{
    if(err){
        console.log(err);
    }else {
         
        const htmlStr=res.toString()
        const resultStr=htmlStr.replace(/[\r\n]/g,'')
        console.log(resultStr);
        fs.writeFile(path.join(__dirname,'./result1.html'),resultStr,err=>{
            if(err) console.log(err);
        })
    }
 })