/*Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is :Thursday .
Current time is : 10 PM : 30 : 38
*/
let today=new Date()
const day=today.getDay()
let hours=today.getHours()
let minutes=today.getMinutes()
let second=today.getSeconds()
const ampm = hours >= 12 ? 'PM' : 'AM';
hours=(hours>=12) ? hours-12: hours
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(`Today is :${days[day]}`);
console.log(`Current time is : ${hours} ${ampm} : ${minutes} : ${second}`);
// console.table(`today=${today}  day=${day}  hours=${hours} minutes=${minutes} second=${second} ampm=${ampm}`)