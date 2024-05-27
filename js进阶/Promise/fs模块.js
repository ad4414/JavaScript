/*  
const fs=require('fs')
//回调函数形式
/* fs.readFile('E:/桌面/笔记/fs.txt',(ere,data)=>{
    if(ere) throw  err;
    console.log(data.toString());
}) */
//Promise形式
/*
const p=new Promise((resolve,reject)=>{
  fs.readFile('E:/桌面/笔记/fs.txt',(ere,data)=>{
    if(ere) reject(ere);
    resolve(data)
  })
})
p.then((value)=>{
console.log(value.toString());
},(reason)=>{
throw reason
}) */
/* let myReadFile=require('util').promisify(require('fs').readFile)
myReadFile('E:/桌面/笔记/fs.txt').then((value)=>{
    console.log(value.toString());
})
 */
/* let p1= Promise.resolve(33)
let p2= Promise.resolve(p1)
p2.then((value) => {
    console.log(value);
}) ;
console.log('p1===p2?:' ,p1===p2); */
/* let p=Promise.reject(new Error("失败")).then(()=>{
//不会被调用
},(error)=>{
console.error(error)
}) */
/* let p1=Promise.resolve(33)
let p2=42
let p3=new Promise((resolve,reject)=>{
   setTimeout(resolve,100,'foo')  
})
Promise.all([p1,p2,p3]).then((value)=>{
console.log(value);
}) */
/* let p1=new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,'one')
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'two')
})
Promise.race([p1,p2]).then((value)=>{
console.log(value);
}) */
Promise.allSettled([Promise.resolve(66),new Promise((resolve)=>{
setTimeout(()=>resolve(33),0)
},99),
Promise.reject(new Error('a 错误'))
]).then((value)=>{
console.log(value);
})