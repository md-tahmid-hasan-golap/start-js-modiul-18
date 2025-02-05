const age = 20;
const peice = 500;
if(age >= 21){
    console.log("Chiald Full free");
}
else if(age <15){
    // discount 5%
    const discount = price*5/1000;
    const payout = peice - discount;
    console.log(payout);
}

else if(age >=20){
    // discount 2%
    const discount = price *2/100;
    const payout = peice - discount;
    console.log(payout)
}
else{
    console.log(peice)
}