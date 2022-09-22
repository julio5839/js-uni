const sum = (n)=> {
    //4 3 2 1
    let num = 0;
    num += n;
    return sum(n - 1);
    if (n === 0){
        return num;
    }
}

console.log(sum(4))