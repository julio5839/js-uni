const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1234);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(6);
  }, 1234);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(8);
  }, 3333);
});
const callback = (a) => {
  console.log(a);
};
// Nie korzystając z Promise.all uzupełnij funkcję razem, która przyjmuje tablicę promise'ów. Funkcja ta ma uruchamiać wszystkie promisy równolegle i po wykonaniu wszystkich, uruchomić funkcję, która została przekazana jako callback.
// razem(promisesTab, callback) {
//   // ...
// }

const tab = [promise1, promise2, promise3];

const razem = (tab, cb) => {
  const wyniki = [];
  tab.forEach((func) => {
    func.then((res) => {
      wyniki.push(res);
      // console.log(wyniki);
      if (wyniki.length === tab.length) {
        return cb(wyniki);
      }
    });
  });
};

// razem(tab, callback);

// Nie korzystając z mechanizmu async-await, napisz funkcję:
// const connect = (funTab, fun) => { ... };
// Pierwszym argumentem funkcji connect jest tablica funkcji asynchronicznych, zwracających wartość liczbową.
// Drugim argumentem connect jest funkcja asynchroniczna, której jedynym argumentem jest wartość liczbowa, a wynikiem również wartość liczbowa.
// Funkcja connect powinna zapewnić, że wszystkie funkcje przekazane w parametrze funTab będą wykonywać się „równolegle”.
// Funkcja connect powinna zwracać pogrupowane wyniki w formacie:
// [
//   [ wyn_1, fun(wyn_1) ],
//   [ wyn_2, fun(wyn_2) ],
//   [ wyn_3, fun(wyn_3) ],
//   [ wyn_4, fun(wyn_4) ],
//   [ wyn_5, fun(wyn_5) ],
//   // ....
// ]
// gdzie wyn_i oznacza funTab[i]().

const fun1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const fun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 6000);
  });
};

const fun3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(7);
    }, 8000);
  });
};

const fun4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(178);
    }, 4000);
  });
};

const fun5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(92);
    }, 5000);
  });
};

const funVal = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    });
  });
};
const allFunctions = [fun1, fun2, fun3, fun4, fun5];

const connect = (funTab, funVal) => {
  const funValues = [];
  funTab.forEach((func, index) => {
    funValues.push(func());
  });
  // console.log(funValues);

  Promise.all(funValues).then((res) => {
    // console.log(res);

    const wynik = [];
    res.forEach((element, index) => {
      wynik.push([`funkcja nr: ${index + 1}`, element]);
    });
    console.log(wynik);
  });
};

connect(allFunctions, funVal);
