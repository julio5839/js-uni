const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
function banan(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== "number"){
            newArray.unshift[i];
        } else{
            newArray.push[i];
        }
    };
    return newArray;
}

console.log(banan(array))
//nwm nie dizlaa