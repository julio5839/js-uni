const games = require('./games.js').games;

const link = games.reduce((acc, val)=>{
    if (!(val.imageUrl === "")){
        if (acc.length < 4){
            acc.push(val.imageUrl);
        }
    }
    return acc;
}, [])

console.log(link);

