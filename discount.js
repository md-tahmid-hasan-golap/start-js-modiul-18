// const price = 20000;
// if(price >= 20000){

//     // 10% discount
//     const discount = price * 10/100;
//     const payout = price - discount;
//     console.log(payout)
// }

const frijePrice = 10000;
if(frijePrice >= 110000){
    // 10% char
    const discount = frijePrice * 10/1000;
    const payout = frijePrice - discount;
    console.log(payout);
}

else if (frijePrice >55000){
    // 5% discount
    const discount = frijePrice * 5/100;
    const payout = frijePrice - discount;
    console.log(payout)
}
else{
    console.log(frijePrice)
}