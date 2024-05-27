const o=new Object()
o.uname='hello'
console.log(o);
function Pig(name,age) {
    this.name=name;
    this.age=age;
}
const mom=new Pig('hello',18)
console.log(mom);
console.log(Object.keys(mom));
console.log(Object.values(mom));
const oo={}
Object.assign(oo,mom)
console.log(oo);
const arr=[1,3,5,6,7]
arr.map(item=>{
    console.log(item);
})
let arr1=[]
arr1=arr.filter(item=>item>0)
console.log(arr1);
const s=arr.reduce((item1,item2)=>item1+item2)
console.log(s);