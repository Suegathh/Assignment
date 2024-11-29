function checkLeapYear(year){
if (year % 4==0){
    console.log('leap year')
} else{
    console.log('not a leap year')
}
}
function checkDiscount(price){
if(price >= 100){
    console.log(20) 

} else if(price >= 50){
    console.log(10)
}
else{
   console.log(0)
}}
function checkTicket(age){
if(age < 12){
    return 5
}
else if(age < 18){
    return 10
}
else if(age < 60){
   return 20
}
else{
    return 0
}}
checkLeapYear(2019)
console.log(checkDiscount(60))
checkTicket(27)