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

const connect = (funTab, fun) => {
  const funTabValues = [];
  for (let i = 0; i < funTab.length; i++) {
    funTabValues.push(funTab[i]());
  }
  const funValues = [];
  for (let i = 0; i < funTab.length; i++) {
    funValues.push(fun(i + 1));
  }
  console.log(funTabValues);
  console.log(funValues);
  Promise.all([Promise.all(funTabValues), Promise.all(funValues)]).then(
    (data) => {
      //   console.log(data);
      const arr = [];
      for (let i = 0; i < data[0].length; i++) {
        arr.push([data[0][i], data[1][i]]);
      }
      console.log(arr);
    }
  );
};

connect(allFunctions, funVal); //[ [ 30, 1 ], [ 20, 2 ], [ 7, 3 ], [ 178, 4 ], [ 92, 5 ] ]
