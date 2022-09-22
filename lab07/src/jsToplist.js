const { lp3 } = require("./toplist");
const lodash = require("lodash");

// Stwórz tablicę z wszystkimi utworami zespołu Queen z listy przebojów.

const zad1 = lp3.reduce((acc, cVal) => {
  if (cVal.author === "Queen") {
    acc.push(cVal);
  }
  return acc;
}, []);
// console.log(zad1);

// Stwórz tablicę z utworami zespołu Pink Floyd, których pozycja zmieniła się, o co najmniej 10 miejsc w górę.
const zad2 = lp3.reduce((acc, cVal) => {
  if (cVal.author === "Pink Floyd" && cVal.change >= 10) {
    acc.push(cVal);
  }
  return acc;
}, []);
// console.log(zad2);

// Posortuj listę rosnąco wg. spadku/wzrostu na liście przebojów (zmienna change), a następnie usuń n ostatnich utworów (w jednym wywołaniu).

const zad3 = lodash.dropRight(lodash.orderBy(lp3, ["change"], ["asc"]), 3);
// console.log(zad3);

// Stwórz obiekt zawierający tylko nazwę zespołu i utworu, który znajduje się na pierwszym miejscu listy.

const zad4 = () => {
  const st = lodash.first(lodash.orderBy(lp3, ["place"], ["asc"]));
  return {
    author: st.author,
    song: st.song,
  };
};
// console.log(zad4());
// Napisz funkcję, która przyjmuje tablicę liczb. Następnie po sprawdzeniu czy każda z wartości w tablicy jest liczbą (za pomocą lodasha), skrypt wypisze utwory, znajdujące się pod miejscami wymienionymi w tablicy.

const nums = [2, 3, 5, 1];

const zad5 = (list) => {
  const st = lodash.orderBy(lp3, ["place"], ["asc"]);
  if (lodash.every(list, lodash.isNumber)) {
    list.map((el) => {
      console.log(st[el - 1]);
    });
  }
};
// console.log(zad5(nums));

// Napisz skrypt, który przyjmuje 3 argumenty: (n, min, max), a następnie wypisze n razy losowy utwór z listy przebojów z zakresu (min, max).

const zad6 = (n, min, max) => {
  const st = lodash.orderBy(lp3, ["place"], ["asc"]);
  for (let i = 0; i < n; i++) {
    const num = Math.floor(Math.random() * (max - min) + min);
    console.log(no1[num]);
  }
};
// console.log(zad6(3, 1, 10));

const zad7 = () => {
  const st = lodash.orderBy(lp3, ["place"], ["asc"]);
  const slice = lodash.slice(st, 0, 10);
  lodash.forEach(slice, function (value, index) {
    lodash.delay(() => {
      console.log(value);
    }, 2000 * index + 1);
  });
};
// console.log(zad7());

// Znajdź wszystkie utwory, które zaliczyły spadek w liście przebojów.
const zad8 = lp3.reduce((acc, cVal) => {
  if (cVal.change < 0) {
    acc.push(cVal);
  }
  return acc;
}, []);
// console.log(zad8);

// Utwórz słownik z listy przebojów, gdzie kluczem będzie nazwa utworu.

const zad9 = lp3.reduce((acc, cVal) => {
  acc[cVal.song] = cVal;
  return acc;
}, {});
// console.log(zad9);

// Utwórz tablicę, która zawiera zgrupowane po nazwie zespołu utwory. Każdy z utworów powinien posiadać informacje o tytule i zajmowanej pozycji.
// Queen: [
//     { song: 'Bohemian Rhapsody', place: 1},
//     { song: 'The show most go on', place: 17}
//   ],

const zad10 = lp3.reduce((acc, cVal) => {
  acc[cVal.author] = acc[cVal.author] || [];
  acc[cVal.author].push({
    song: cVal.song,
    place: cVal.place,
  });
  return acc;
}, []);
// console.log(zad10);

// Policz częstość występowania każdego z zespołów w zestawieniu.

const zad11 = lodash.countBy(lp3, (n) => n.author);
// console.log(zad11);

// Wypisz największy spadek i najwyższy wzrost na liście.

const zad12a = lodash.first(lodash.orderBy(lp3, "change", "asc"));
const zad12b = lodash.first(lodash.orderBy(lp3, "change", "desc"));
// console.log(zad12a);
// console.log(zad12b);
