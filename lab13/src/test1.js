// Wykorzystując asynchroniczną funkcję getNum (używającą pomocniczej funkcji getRand):
// która równolegle uruchamia dim-kopii funkcji getNum, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.
// W rozwiązaniu nie możesz używać mechanizmu Promise ani async-await

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};

const asyncSort = (dim) => {
  const list = [];
  Array.from(Array(dim)).forEach(() => {
    getNum((n) => {
      list.push(n);
      if (list.length === dim) {
        list.sort((a, b) => (a < b ? 1 : -1));
        console.log(list);
      }
    });
  });
};

asyncSort(5);
