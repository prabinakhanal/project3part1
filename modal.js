const open=document.querySelector('#open');    
const modal=document.querySelector('#modal');      
const close=document.querySelector('#close');
const clickModal=document.querySelector('#clickmodal');
const cross=document.querySelector('#cross');
const all=document.querySelector('#all');




open.addEventListener('click',() =>{
    modal.classList.remove('hidden');
clickModal.classList.add('hidden')
})



close.addEventListener('click',() =>{
    modal.classList.add('hidden');
    clickModal.classList.remove('hidden')
})


cross.addEventListener('click',() =>{
    modal.classList.add('hidden');
    clickModal.classList.remove('hidden')
})

modal.addEventListener('click',()=>{
    modal.classList.add('hidden');
    clickModal.classList.remove('hidden')

})

