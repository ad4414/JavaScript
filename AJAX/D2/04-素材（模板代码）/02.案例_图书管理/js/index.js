 

 

 

 
/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const getBookList=()=>{
    axios({
        url:'http://hmajax.itheima.net/api/books',
        params:{
            creator:'老吴'
        }
    }).then((result)=>{
        console.log(result);
        let htmlStr=result.data.data.map((item,index)=>` <tr>
        <td>${index+1}</td>
        <td>${item.bookname}</td>
        <td>${item.author}</td>
        <td>${item.publisher}</td>
        <td data-id=${item.id}>
          <span class="del">删除</span>
          <span class="edit">编辑</span>
        </td>
      </tr>`)
     
      document.querySelector('.list').innerHTML=htmlStr
    })
       
    
}
getBookList()
 
//创建弹框对象
const addModal=document.querySelector('.add-modal')
const addModalStrap=new bootstrap.Modal(addModal)
document.querySelector('.add-btn').addEventListener('click',()=>{
    const formList=document.querySelector('.add-form')
    const bookObj=serialize(formList,{hash:true,empty:true})
    const {bookname,author,publisher}=bookObj
    axios({
        url:'http://hmajax.itheima.net/api/books',
        method:'post',
        data:{
        bookname,
        author,
        publisher,
        creator:'老吴'
        }
    })
    addModalStrap.hide()
})
//删除 编辑
const editModal=document.querySelector('.edit-modal')
const editModalStrap=new bootstrap.Modal(editModal)
const del=document.querySelector('.list')
del.addEventListener('click',(e)=>{
     if(e.target.classList.contains('del')){
         let theId=e.target.parentNode.dataset.id
         axios({
            url:`http://hmajax.itheima.net/api/books/${theId}`,
            method:'DELETE'
         }).then(()=>{
            getBookList()
         })
     } else if(e.target.classList.contains('edit')){
      editModalStrap.show()
      let id=e.target.parentNode.dataset.id
      axios({
        url:`http://hmajax.itheima.net/api/books/${id}`,
        method:'get',
      }).then((result)=>{
        const bookObj=result.data.data
        const {bookname,author,publisher}=bookObj
        document.querySelector('.edit-modal .bookname').value=bookname
        document.querySelector('.edit-modal .author').value=author
        document.querySelector('.edit-modal .publisher').value=publisher
        document.querySelector('.edit-btn').addEventListener('click',()=>{
            const editForm=document.querySelector('.edit-form')
            const bookList=serialize(editForm,{hash:true,empty:true})
            const {bookname,author,publisher}=bookList
    axios({
        url:`http://hmajax.itheima.net/api/books/${id}`,
        method:'PUT',
        data:{
        bookname,
        author,
        publisher,
        creator:'老吴'
        }
    }).then(()=>{
        getBookList()
          editModalStrap.hide()
    })
          
        })
      })
     }
    
})
 