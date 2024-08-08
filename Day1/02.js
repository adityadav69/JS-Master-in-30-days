/*
Write a JavaScript program to print the current window contents.  
*/
let button=document.querySelector(".btn");
button.addEventListener('click',()=>{
    window.print();
})