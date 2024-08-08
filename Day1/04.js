// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let side1=5;
let side2=6;
let side3=7;
let s=(side1+side2+side3)/2;
//BY herons formula area=sqrt s((s-side1)* (s-side2)*s(s-side3))
let area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
console.log(area);
