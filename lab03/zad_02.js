function isPositiveEven(number) {
    if (number > 2 && number%2 === 0){
        console.log("tka")
    } else{
        console.log("nie");
    }
}

isPositiveEven(3)


function isPositiveEven2(number) {
    return (number > 2 && number%2 === 0);

};

console.log(isPositiveEven2(3))