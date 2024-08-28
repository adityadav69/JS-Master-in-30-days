let buttons=document.querySelectorAll('.button')
// console.log(buttons);
let body=document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let bg=button.id;
        body.style.backgroundColor=`${bg}`;
    })
    
})