/* const pc=['海尔','联想','小米','方正']
const [hr,lx,mi,fz]=pc
console.log(hr);
console.log(mi);
function getValues(){
    return [100,60]
}
const [max,min]=getValues()
console.log(max);
console.log(min);
const goods=[{
    goodsName:'小米',
    price:1999
  }]
  const [{goodsName,price}]=goods
  console.log(goodsName);
  console.log(price); */
  const arr=[1,2,3,6,'y','u']
  const result=arr.forEach((element,index) => {
    console.log(element);
    console.log(index);
  });
  const result1=arr.map((item,index)=>{
    console.log(item);
    console.log(index);
  })