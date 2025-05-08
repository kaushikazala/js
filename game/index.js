// let papper = 1
// let st = 2
// let sic = 3

let getNumber1 =  Math.floor(Math.random() * 3) + 1;
console.log(getNumber1);

let getNumber2 =  Math.floor(Math.random() * 3) + 1;
console.log(getNumber2);


if( getNumber1 == getNumber2){
    console.log("It's a tie")   
}
else{
    if (
        (getNumber1 === 2 &&  getNumber2 === 1)||(getNumber1 === 1 &&  getNumber2 === 3)||(getNumber1 === 3 &&  getNumber2 === 2)
    )
    {
        console.log("player1 is wins")
    }
    else{
        console.log("player2 wins")
    }
}

