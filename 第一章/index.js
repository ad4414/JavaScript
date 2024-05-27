/* var i=0;
console.log(i++);
console.log(i++ + ++i);
/* console.log(i++ + ++i+i++); */
// var str="nihao"
// console.log(str.charAt(1));//'i' */
 
// var s2='wwd'
// s1=s1.concat(s2)
// console.log(s1);//sstrwwd
/* var s1='sstr'
var s3=s1.substring(0,3)
console.log(s3);//'sst
var str1='helloWorld'
var str2='or'
console.log(str1.indexOf(str2));//6
var str3='asdgrserg'
var str='g'
console.log(str3.indexOf(str,2));//3 */
/* var str=' hello world  '
console.log(str.length);//14
console.log(str.trim().length);//11
console.log(str.trimEnd(str));//' hello world'
console.log(str.trimStart(str));//'hello world  ' */
/* var str='asd|asd|aer|dryhrt|sd'
console.log(str.split('|'));//[ 'asd', 'asd', 'aer', 'dryhrt', 'sd' ] */
/* var arr=['你好' ,100,true]
console.log(typeof arr);//object
console.log(Array.isArray(arr));//true */
/* var str=[1,1,23,'hello']
console.log(str.push('arr'));//5
console.log(str.pop());//arr */
/* var str=[1,2,34,'s']
console.log(str.unshift(5));//5
console.log(str);// [ 5, 1, 2, 34, 's' ] */
 
/* var arr1=['d',2,5,5,'ads']
 console.log(arr1.indexOf(2));//1 */
/* function fn1() {
    let i=10;
    console.log(i);
}
fn1();
  */
/*  var fn2=function(x,y){
    return x+y;
 }
 var fn3=(x,y)=>x+y
 console.log(fn3(10,20));//30 */
 /* var fn6=(x,y)=>{
    var z=100;
    return x+y+z;
 }
 console.log(fn6(10,52));
 var add=(x,y)=>({x:10,y:20})
 var arr=[54,55,77]
 arr.map(function(element,index){
    console.log(element);
 })
 arr.map((element,index)=>{
    console.log(element);
 }) */
/*  var name="helloworld"
 var user={
    name:"iwen",
    getName(){
        var that=this;
        setTimeout(function(){
            console.log(that.name);//iwen
        })
    }
 }
 user.getName() */
 const s=new Set();
 [2,6,8,9,2,7,6].forEach(x=>s.add(x));
 for(let i of s){
    console.log(i);
 }//2 6 8 9 7