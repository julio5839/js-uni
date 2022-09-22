const { lp3 } = require('./toplist');
const lodash = require('lodash');

// Stwórz tablicę z wszystkimi utworami zespołu Queen z listy przebojów.

const queen = lp3.reduce((acc, cVal)=>{
    if (cVal.author === "Queen"){
        acc.push(cVal.song);
    }
    return acc;
},[])

// console.log(queen);

// Stwórz tablicę z utworami zespołu Pink Floyd, których pozycja zmieniła się, o co najmniej 10 miejsc w górę.

const pink = lp3.reduce((acc, cVal)=>{
    if (cVal.author === "Pink Floyd" && cVal.change >= 10){
        acc.push(cVal.song);
    }
    return acc;
},[])

// console.log(pink);

// Posortuj listę rosnąco wg. spadku/wzrostu na liście przebojów (zmienna change), a następnie usuń n ostatnich utworów (w jednym wywołaniu).

const asc = lodash.dropRight(lodash.orderBy(lp3, ["change"], ["asc"]), 2)

// console.log(asc);

// Stwórz obiekt zawierający tylko nazwę zespołu i utworu, który znajduje się na pierwszym miejscu listy.

const top =()=>{
    const no1 = lodash.first(lodash.orderBy(lp3, ["place"], ["asc"]));
    return {
        author: no1.author,
        song: no1.song,
    }
}

// console.log(top());

// Napisz funkcję, która przyjmuje tablicę liczb. Następnie po sprawdzeniu czy każda z wartości w tablicy jest liczbą (za pomocą lodasha), skrypt wypisze utwory, znajdujące się pod miejscami wymienionymi w tablicy.

const arr = [1,3,2];

const idx = (arr)=>{
    const no1 = lodash.orderBy(lp3, ["place"], ["asc"]);
    if (lodash.every(arr, lodash.isNumber)){
        arr.map((num)=>{
            console.log(no1[num-1]);
        })
    }
}

// console.log(idx(arr));

// Napisz skrypt, który przyjmuje 3 argumenty: (n, min, max), a następnie wypisze n razy losowy utwór z listy przebojów z zakresu (min, max).

const random = (n,min,max)=>{
    const no1 = lodash.orderBy(lp3, ["place"], ["asc"]);
    for (let i=0; i<n; i++){
        const num = Math.floor(Math.random() * (max-min)+min);
        console.log(no1[num]);
    }
}

// console.log(random(3,1,5));

// Wypisz 10 kolejnych utworów z tablicy, zachowując odstęp 2 sekund pomiędzy każdym.

const ten = ()=>{
    const no1 = lodash.orderBy(lp3, ["place"], ["asc"]);
    const slice = lodash.slice(no1,0,9);
    lodash.forEach(slice, function (value, index) {
        lodash.delay(()=>{
            console.log(value);
        },2000*(index+1)) 
    })
}
// console.log(ten());

// Znajdź wszystkie utwory, które zaliczyły spadek w liście przebojów.

const spadek = lp3.reduce((acc,cVal)=>{
    if (cVal.change <0){
        acc.push(cVal);
    }
    return acc;
},[])

const spadek2 = lodash.filter(lp3, function(song) {
    if (song.change <0) {
        return song;
    }
})
// console.log(spadek);
// console.log(spadek2);

// Utwórz słownik z listy przebojów, gdzie kluczem będzie nazwa utworu. {}

const songName = lodash.reduce(lp3,(acc, cVal)=>{
    acc[cVal.song]=cVal;
    return acc;
},{})

// console.log(songName);

// Utwórz tablicę, która zawiera zgrupowane po nazwie zespołu utwory. Każdy z utworów powinien posiadać informacje o tytule i zajmowanej pozycji.

const tablic = lodash.reduce(lp3,(acc, cVal)=>{
    acc[cVal.author] = acc[cVal.author] || [];
    acc[cVal.author].push({
        song: cVal.song,
        place: cVal.place,
    });
    return acc
}, [])

const tablic2 = lp3.reduce((acc,cVal)=>{
    acc[cVal.author] = acc[cVal.author] || [];
    acc[cVal.author].push({
        song: cVal.song,
        place: cVal.place,
    });
    return acc
},[])
// console.log(tablic2);

// console.log(tablic);

// Policz częstość występowania każdego z zespołów w zestawieniu.

const countArtist = lodash.countBy(lp3, (n) => n.author);

// console.log(countArtist);

// Wypisz największy spadek i najwyższy wzrost na liście.

const maxChange = lodash.maxBy(lp3, "change");
const max2 = lodash.first(lodash.orderBy(lp3, ["change"], ["desc"]));

// console.log(maxChange);
// console.log(max2);

const minChange = lodash.minBy(lp3, "change");
const min2 = lodash.first(lodash.orderBy(lp3, ["change"], ["desc"]));

// console.log(minChange);
// console.log(min2);
