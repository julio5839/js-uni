// const grupuj = (funTab1, funTab2, cb) => { ... };
// spełaniającą poniższe warunki:
// Dwoma pierwszymi argumentami funkcji grupuj są tablice funkcji asynchronicznych zwracające wartość liczbową.
// Funkcja grupuj powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się „równolegle”.
// Funkcja grupuj powinna wywoływać funkcję cb, która przyjmuje jako parametr pogrupowane wyniki z wszystkich funkcji w formacie:
// [
//   [ wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2 ],
//   [ wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2 ],
//   [ wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2 ],
//   [ wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2 ],
//   [ wynik_funkcji_5_z_funTab1, wynik_funkcji_5_z_funTab2 ]
//   ...
// ]
// i drukuje je w konsoli w dowolny sposób.
// Jeżeli liczba funkcji w obu tablicach nie jest równa, to funkcja grupuj powinna uzupełniać brakujące wyniki wartością 0.

const jeden = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 7000);
  });
};

const dwa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(7);
    }, 2000);
  });
};

const trzy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 4000);
  });
};

const cztery = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(9);
    }, 5000);
  });
};

const piec = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(15);
    }, 2000);
  });
};

const callback = (tab) => {
  console.log(tab);
};

const funkcje1 = [jeden, dwa, trzy, cztery, piec];
const funkcje2 = [cztery, trzy, dwa, jeden];

const grupuj = (funTab1, funTab2, cb) => {
  const longest = funTab1.length >= funTab2.length ? funTab1 : funTab2;
  const shortest = funTab1.length >= funTab2.length ? funTab2 : funTab1;
  const result = longest.reduce((acc, el, idx) => {
    shortest[idx] ? acc.push([el, shortest[idx]]) : acc.push([el, () => 0]);
    return acc;
  }, []);
  // console.log(result);
  result.map((n) =>
    Promise.all([n[0](), n[1]()]).then((res) => {
      cb(res);
    })
  );
};

// grupuj(funkcje1, funkcje2, callback);
