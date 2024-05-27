function myFun(){
    console.log('hello');
}
 
myFun.prototype.say=()=>{
    console.log('111');
}
const f=new myFun()
console.log(myFun.constructor,'3');
console.log(myFun.prototype);
console.log(f.__proto__);
console.log(myFun.prototype.constructor);
console.log(myFun.prototype.__proto__.__proto__);
console.log(Object.prototype.toString.call('12'));
/* function myInstance(right,left){
    let proto=Object.getPrototypeOf(left)
    let prototype=right.prototype
    while(true){
        if(!proto) return false
        if(proto===prototype) return true
        proto=Object.getPrototypeOf(proto)
    }
}
console.log(myInstance(myFun,f));  */
/* const myDate = new Date();
let object = myDate;
console.log(Object.getPrototypeOf({}));
do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object); */
/*  console.log(Number.MAX_VALUE);
 console.log(Array.prototype.isPrototypeOf([1,2,3,8]));
 function fun(a,s,d,f,g,h,k){
   for(let i=0;i<arguments.length;i++){
    console.log(arguments[i]);
   }
 }
 fun(1,1.5,2,5,6,9,7)
  */
 
 console.log(Object.prototype);
 const o={
    a:1,
    b:3,
    __proto__:{
        c:3,
        b:6
    }
 }
 console.log(o.c);
 let arr=[1,2,3,4.5,1,2,3,4,4,5,5]
 console.log(Array.prototype.isPrototypeOf(arr));
 console.log(null===undefined);
 const fn=()=>{
    console.log(this);
 }
 fn()
 const s=[...new Set(arr)]
 console.log(s);
 const arr1=arr.filter((ele,index,self)=>self.indexOf(ele)===index)
 console.log(arr1);
 const arr2=arr.reduce((thisEle,nextEle)=>{
  if(!thisEle.includes(nextEle)){
    thisEle.push(nextEle)
  }
  return thisEle
 },[])
 console.log(arr2);
 function func(){
 console.log(this);
 }
 func()
 const h={
 name:'ikun',
 say(){
    console.log(this);
 }
 }
 h.say()
const k={
    name:'hello',
    age:'18'
}
console.log(typeof k);
console.log(Object.keys(k));
Object.keys(k).forEach(ele=>console.log(ele))
let a=[]
console.log(a.concat(arr));
let num='A'
console.log(num.charCodeAt());