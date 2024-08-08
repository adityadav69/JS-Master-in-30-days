document.body.onload = () => {
    reverse();
}
let reverse = () => {
    let name = document.querySelector(".str");
    let data = name.innerText;
    setInterval(() => {
        data= data[data.length - 1] + data.substring(0, data.length - 1);
        name.innerText=data;
    },800);
    
}