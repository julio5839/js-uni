//zad1
//   Napisz funkcje `result` spełniającą poniższe warunki:

//   - dwoma pierwszymi argumentami funkcji są tablice funkcji asynchronicznych, których rezultatem są wartości liczbowe
//   - trzecim argumentem jest funkcja `func` przetwarzające wyniki kolejnych funkcji z tablic `funTab1` i `funTab2`
//   - jeżeli tablice nie są równe, to przyjmujemy, że brakująca wartość wynosi 0
//   - funkcja `result` powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się "równolegle" i wyświetli je w formacie:

//   ```js
//   [
//     wynik_funkcji_func(wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2),
//     wynik_funkcji_func(wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2),
//     wynik_funkcji_func(wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2),
//     wynik_funkcji_func(wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2),
//     // ...
//   ];
//   ```

const jeden = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 7000);
  });
};

const dwa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const trzy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 4000);
  });
};

const cztery = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 5000);
  });
};

const piec = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
};
const tab1 = [jeden(), dwa(), trzy(), cztery(), piec()];
const tab2 = [cztery(), trzy(), dwa(), jeden()];

const cb = (x, y) => {
  return x + y;
};

const result = (tab1, tab2, cb) => {
  const long = [];
  const short = [];

  tab1.length > tab2.length
    ? (tab1.forEach((func) => {
        long.push(func);
      }),
      tab2.forEach((func) => {
        short.push(func);
      }))
    : (tab2.forEach((func) => {
        long.push(func);
      }),
      tab1.forEach((func) => {
        short.push(func);
      }));
  //   console.log(`1:\n ${long}\n 2:\n${short}`);
  if (long.length === tab1.length || long.length === tab2.length) {
    Promise.all([Promise.all(long), Promise.all(short)]).then((res) => {
      //   console.log(res);
      const [tab1, tab2] = res;
      const wyniki = [];
      //   console.log(tab1);
      //   console.log(tab2);
      tab1.forEach((value, index) => {
        tab2[index] === undefined
          ? ((tab2[index] = 0), wyniki.push(cb(tab1[index], tab2[index])))
          : wyniki.push(cb(tab1[index], tab2[index]));
      });
      console.log(wyniki);
    });
  }
};

// result(tab1, tab2, cb);
