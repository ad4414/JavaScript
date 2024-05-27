function sum(a,b){
    const l=Math.max(a.length,b.length)
    a=a.padStart(l,'0')
    b=b.padStart(l,'0')
    let ending=0
    let result=''
    for(let i=l-1;i>=0;i--){
       const sum=+a[i]+ +b[i]+ending
       const r=sum%10
       ending=Math.floor(sum/10)
       result=r+result
    }
    return result
}
let a='111111111111111111111111111111111111111111111111574874848748'
let b='5496874984984978689746894878748974894684687468647455454511111111111111111111111119878'
console.log(sum(a,b));
console.log(1+undefined);
const obj = {
    a: 3,
    b: 4,
    c: null,
    d: undefined,
    get e() {},
  };
   
  console.log(JSON.stringify(obj));
 console.log(undefined==null);
 const array = [1, 2, 2, 3, 4, 4, 5];
 const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
 console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
 