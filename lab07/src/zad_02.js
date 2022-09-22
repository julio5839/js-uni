const { lp3 } = require('./toplist');
const lodash = require('lodash');
const { forEach } = require('lodash');
const toplist = require('./toplist');

//zad1
//Stwórz tablicę z wszystkimi utworami zespołu Queen z listy przebojów.

const queen = lp3.reduce((acc, cVal)=>{
    if (cVal.author === "Queen"){
        acc.push(cVal.song);
    }
    return acc;
}, [])

// console.log(queen);

//zad2
//Stwórz tablicę z utworami zespołu Pink Floyd, których pozycja zmieniła się, o co najmniej 10 miejsc w górę.

const floyd = lp3.reduce((acc, cVal)=>{
    if (cVal.change >= 10 && cVal.author === "Pink Floyd"){
        acc.push(cVal.song);
    }
    return acc;
}, [])

// console.log(floyd);

//zad3
//Posortuj listę rosnąco wg. spadku/wzrostu na liście przebojów (zmienna change), a następnie usuń n ostatnich utworów (w jednym wywołaniu).

const change = lodash.dropRight(lodash.orderBy(lp3, ["change"], ["desc"]), 2)

// console.log(change);

//zad4
//Stwórz obiekt zawierający tylko nazwę zespołu i utworu, który znajduje się na pierwszym miejscu listy.

const top = lodash.reduce(lp3, (acc, cVal)=>{
    if (cVal.place == 1){
        acc["author"] = cVal.author;
        acc["song"] = cVal.song;
    }
    return acc;
}, {})

// console.log(top);

//zad5
//Napisz funkcję, która przyjmuje tablicę liczb. Następnie po sprawdzeniu czy każda z wartości w tablicy jest liczbą (za pomocą lodasha), skrypt wypisze utwory, znajdujące się pod miejscami wymienionymi w tablicy

arr = [1,2,3,4];

const topN = (arr)=>{
    if (lodash.every(arr, (number => typeof number === "number"))){
        arr.map()
    }
}
// console.log(topN(arr));

//zad6
//Napisz skrypt, który przyjmuje 3 argumenty: (n, min, max), a następnie wypisze n razy losowy utwór z listy przebojów z zakresu (min, max).

const random =(n, min, max)=>{
    const helper = lodash.slice(lp3, min, max);
        Array.from(Array(n)).forEach(() => {
          console.log(helper[lodash.floor(lodash.random(1, true) * helper.length)]);
        });
}

// console.log(random(2,1,3));

//zad8
//Znajdź wszystkie utwory, które zaliczyły spadek w liście przebojów.

const mniej = lp3.reduce((acc, cVal)=>{
    if (cVal.change < 0){
        acc["author"] = cVal.author;
        acc["song"] = cVal.song;
    }
    return acc;
}, {})

// console.log(mniej);

//zad9
//Utwórz obiekt z listy przebojów, gdzie kluczem będzie nazwa utworu.

const nTop = lodash.reduce(lp3, (acc, cVal)=>{
    return { ...acc, [cVal.song] : cVal };

},{})

// console.log(nTop);

//zad10
const autor = lodash.reduce(lp3, (acc, cVal)=>{
    if (acc[cVal.author]){
        acc[cVal.author].push({
            song: cVal.song,
            place: cVal.place,
        })
    } else{
        (acc[cVal.author] = [{ song: cVal.song, place: cVal.place }])
    }
    return acc
},{})

console.log(autor);
