let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let results=document.querySelector('#results');
   if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`please give a valid heigh ${height}`
   }
   else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid heigh ${weight}`
   }
   else{
    const bmi=(weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
    let range=document.createElement('span');
    range.style.backgroundColor="blue";
    range.style.color="white";
    range.style.padding="5px";
    range.style.textAlign="center";

    if(bmi<=18.6){
        range.innerHTML=" "+"Under Weight"
        form.appendChild(range)
    }
    else if(bmi>18.6 && bmi<=24.9){
        range.innerHTML=" "+"Normal Range"
        form.appendChild(range)
    }
    else{
        range.innerHTML=" "+"Overweight";
        form.appendChild(range)
    }

   }
})
