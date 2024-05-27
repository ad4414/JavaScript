/* let that
function Star(name){
    that=this
    console.log(this);
    this.name=name
}
Star.prototype.sing=function(){
    console.log('hello world');
}
const ll=new Star('he')
console.log(that===ll);
const arr=[1,2,4,5,65]
Array.prototype.min=function(){
    return  Math.min(...this)
}
console.log(arr.min());
Array.prototype.sum=function(){
    return this.reduce((pre,next)=>pre+next)
}
console.log(arr.sum());
console.log(Star.prototype.constructor===Star); */
/* function end(){

}
console.log(end.prototype);
end.prototype={
    // constructor:end,
    fun1:function(){
       console.log('hello');
    },
    dance:function(){
        console.log('跳舞');
    }
}
console.log(end.prototype); */
/* function Star() {
    
}
const ll=new Star('he')
console.log(ll.__proto__.constructor); */
/* const Person={
head:1,
eyes:2
}
function Star(name){
this.name=name
}
Star.prototype= Person
console.log(Star.prototype);
 
 Star.prototype.constructor= Star
 console.log(Star.prototype.constructor);
const ll=new Star('ll');
console.log(ll.name);
function wom(baby) {
    this.baby=baby
}
const ww=new wom()
wom.prototype=Person
console.log(wom.prototype);
 
 wom.prototype.constructor=wom
 console.log(wom.prototype); */
/*  function  Person(){
    this.eyes=2
    this.head=1
 }
 function wom(){

 }
 wom.prototype=new Person()
 
 wom.prototype.baby=function(){
    console.log('生孩子');
 }
 console.log(wom.prototype); */
 console.log(Object.prototype);
 console.log(Object.prototype.__proto__);
 function wom(){
this.eyes=2
 }
 const ll=new wom()
 console.log(ll.__proto__);
 console.log(wom.prototype);
 console.log(wom.prototype.__proto__===Object.prototype);
 console.log(ll  instanceof wom);