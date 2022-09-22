function dodawanie() {
    let num = 5;

    return function (n){
        return n + num;
    };
}


console.log(dodawanie()(5));