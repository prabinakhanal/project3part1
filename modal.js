const open=document.querySelector('#open');    
const modal=document.querySelector('#modal');      
const close=document.querySelector('#close');
const clickModal=document.querySelector('#clickmodal');
const cross=document.querySelector('#cross');
const all=document.querySelector('#all');
const white=document.querySelector('#white');



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
white.addEventListener('click',(e)=>{
e.stopPropagation();

})

