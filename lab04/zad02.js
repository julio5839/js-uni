const string = "Ala ma kota";

const longest = (function(str) {
    const arrStr = string.split(' ');
    let longest = arrStr[0];
    arrStr.forEach(item=> {
        if (item.length > longest.length){
            longest = item;
        }
    })
    // for (word of arrStr){
    //     arrStr.map(function(word){
    //         return word.length;
    //     });
    // } nwm nie dziala! :( 
    return longest;
})(string);

console.log(longest);


