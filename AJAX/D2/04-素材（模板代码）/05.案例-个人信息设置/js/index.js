/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const theImg=document.querySelector('#upload')
theImg.addEventListener('change',(e)=>{
  console.log(e.target.files[0]);
  const fd=new FormData()
  fd.append('img',e.target.files[0])
  axios({
    url:'http://hmajax.itheima.net/api/uploadimg',
    method:'POST',
    data:fd
  }).then((result) => {
    console.log(result.data.data);
    const imgUrl=result.data.data.url
    localStorage.setItem('imgs',imgUrl)
  }).catch((err) => {
    
  });
})
const img=localStorage.getItem('imgs')
console.log(document.querySelector('.prew'));
document.querySelector('.prew').src=`${img}`
 const userForm=document.querySelector('.user-form')
const btn=document.querySelector('.submit')
btn.addEventListener('click',()=>{
   
const userList=serialize(userForm,{hash:true,empty:true})
console.log(userList);
})