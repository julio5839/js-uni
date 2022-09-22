// const { listaZakupow } = require("./listaZakupow.js");

const games = require("./games.js").games;
const zakupy = require("./listaZakupow.js").listaZakupow;

const linki = games.reduce((acc, cVal) => {
  if (cVal.imageUrl !== "") {
    if (acc.length < 4) {
      acc.push(cVal.imageUrl);
    }
  }
  return acc;
}, []);

// console.log(linki);

// Zmodyfikuj listę zakupów tak, aby znajdujące się w niej obiekty znajdowały się pod ich produktem jako indeks.

const poIdx = zakupy.reduce((acc, cVal) => {
  acc[cVal.produkt] = cVal;
  return acc;
}, {});
// console.log(poIdx);

// Patrząc na listę zakupów policz, ile w sumie wydasz na nabiał.

const nabial = zakupy.reduce((acc, cVal) => {
  if (cVal.typ === "nabiał") {
    acc += cVal.cena * cVal.ilosc;
  }
  return acc;
}, 0);
// console.log(nabial);

// Znajdź wszystkie produkty, które kupujesz na kilogramy, a następnie wypisz je w kolejności alfabetycznej.
const kgs = zakupy.reduce((acc, cVal) => {
  if (cVal.jednostka === "kg") {
    acc.push(cVal.produkt);
  }
  return acc.sort((a, b) => (a.produkt > b.produkt ? 1 : -1));
}, []);
// console.log(kgs);

// Znajdź wszystkie produkty typu, którego podasz w parametrze wywołanej funkcji. Następnie zwróci listę produktów posortowanych od najtańszego do najdroższego, których ostateczna cena (uwzględniająca ilość) jest niższa od 10.

const nProdukt = (list, type) => {
  return list.reduce((acc, cVal) => {
    if (cVal.typ === type && cVal.cena * cVal.ilosc < 10) {
      acc.push(cVal);
    }
    return acc.sort((a, b) => (a.cena > b.cena ? 1 : -1));
  }, []);
};

// console.log(nProdukt(zakupy, "nabiał"));

// Stwórz tablicę nazw produktów, które kupujesz na sztuki.
const sztuki = zakupy.reduce((acc, cVal) => {
  if (cVal.jednostka === "sztuk") {
    acc.push(cVal.produkt);
  }
  return acc;
}, []);
// console.log(sztuki);

// Zwróć listę zakupów jako String, który każdy z produktów będzie wypisywał w następujący sposób:
// Nabiał:
// 1. jogurt - sztuk: 8
// 2. kefir - sztuk: 2
// 3. mleko - litry: 3
// Napoje:
// 1. Herbata - sztuk: 2
// 2. Kawa - sztuk: 1
let x = 1;
const nazwyTypy = zakupy
  .sort((a, b) => (a.typ > b.typ ? 1 : -1))
  .reduce((acc, curr, i) => {
    if (i > 0) {
      if (curr.typ != zakupy[i - 1].typ) {
        acc += `\n${curr.typ}`;
        x = 1;
      }
    } else {
      acc += `${curr.typ}`;
    }
    acc += `\n ${x}. ${curr.produkt} - sztuk: ${curr.ilosc}`;
    x++;
    return acc;
  }, "");

// console.log(nazwyTypy);

// Mamy następującą strukturę danych:
// const arr = [
//     { key: 0, x: [4,5,6], y: [1,2,3,4] },
//     { key: 0, x: [1], y: [] }
// ]
// Za pomocą reduce zsumuj długości wszystkich wewnętrznych tablic.

const arr = [
  { key: 0, x: [4, 5, 6], y: [1, 2, 3, 4] },
  { key: 0, x: [1], y: [] },
];

const sum = arr.reduce((acc, cVal) => {
  acc += cVal.x.length + cVal.y.length;
  return acc;
}, 0);
console.log(sum);
