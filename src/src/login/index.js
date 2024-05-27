const { isphone, isCode } = require("../utils/check")

 document.querySelector('.btn').addEventListener('click',()=>{
    const username=document.querySelector('.username').value
    const psd=document.querySelector('.password').value
    if(!isphone(username)){
        console.log('手机号代码是11位的');
        return
    }
    if(!isCode(psd)){
        console.log('验证码错误');
        return 
    }
    console.log('提交到服务器...');
 })
import './index.css'