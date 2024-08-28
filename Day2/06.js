let year= prompt("Enter the year you want to check either it is leap year or not");
year=Number(year);

if(year%4==0){
    if(year%100 !==0){
        alert('Entered year is Leap Year');
    }
    else{
        if(year%400==0){
            alert('Entered year is Leap Year');
        }
        else{
            alert('Entered year is not Leap Year');
        }
    }
}
else{
    alert('Entered year is not Leap Year');
}