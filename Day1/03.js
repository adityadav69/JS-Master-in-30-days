// Write a JavaScript program to get the current date. 
let today=new Date()
let dd=today.getDate();
let mm=today.getMonth()+1;
let yy=today.getFullYear()
dd=dd<10 ? "0"+dd:dd;
mm=mm<10 ? "0"+mm:mm;

console.log(`${dd}-${mm}-${yy}`);

 