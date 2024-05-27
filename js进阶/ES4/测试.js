/* const obj={
    age:18,
    name:'张三',
    family:{
        mother:'hello'
    }
}
const o={}
Object.assign(o,obj)
console.log(o);//{ age: 18, name: '张三' }
const s={...o}
console.log(s);//{ age: 18, name: '张三' }
s.age=20
console.log(s);
const arr=[12,3,4,5]
let a=[...arr]
console.log(a);
a.pop()
console.log(a);
const f=[]
Array.prototype.concat(f,a)
console.log(f);
for (const key in o) {
     console.log(o[key]);
} */
/* function sum(x,y) {
    if(!x||!y){
    //   throw '用户无参数'
    throw new Error('用户无参数')
    }
    return x+y
}
console.log(sum());//用户无参数 */
//  const obj={
//     uname:'hello'
//  }
//  function fn(x,y){
//     console.log(this);
//      console.log(x+y);
//  }
//  //改变this指向
//   fn.apply(obj,[1,2])//{ uname: 'hello' } 3
const obj={
         uname:'hello'
      }
function fn() {
    console.log(this);
}
const fun=fn.bind(obj)
fun()//{ uname: 'hello' }
