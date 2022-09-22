// Nie korzystając z Promise.all uzupełnij funkcję razem, która przyjmuje tablicę promise'ów. Funkcja ta ma uruchamiać wszystkie promisy równolegle i po wykonaniu wszystkich, uruchomić funkcję, która została przekazana jako callback.
// razem(promisesTab, callback) {
//   // ...
// }
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

// const razem = (promisesTab, callback) => {
//   const wyniki = [];
//   promisesTab.forEach((n) => {
//     n.then((x) => wyniki.push(x));
//   });
//   const sprawdzenie = setInterval(() => {
//     if (wyniki.length === promisesTab.length) {
//       clearInterval(sprawdzenie);
//       callback(wyniki);
//     }
//   });
// };
// razem(tab, callback);

const razem2 = (promisesTab, callback) => {
  let wyniki = [];
  return promisesTab.forEach((promise) => {
    promise().then((res) => {
      wyniki.push(res);
      if (wyniki.length === promisesTab.length) {
        callback(wyniki);
      }
    });
  });
};
// razem2(tab, callback); //cosnie dziala

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

const allFunctions = [fun1, fun2, fun3, fun4, fun5];

const soonerThan = (funcTab, maxtime) => {
  const wyniki = [];
  for (let i = 0; i < funcTab.length; i++) {
    funcTab[i]().then((res) => {
      wyniki.push(res);
    });
  }
  setTimeout(() => {
    console.log(wyniki);
  }, maxtime);
};

// soonerThan(allFunctions, 5000);

const allFunctions2 = [fun1(), fun2(), fun3(), fun4(), fun5()];

const soonerThan2 = (funcTab, maxtime) => {
  const wyniki = [];
  funcTab.forEach((promise) => {
    promise.then((res) => {
      wyniki.push(res);
    });
  });
  setTimeout(() => {
    console.log(wyniki);
  }, maxtime);
};

// soonerThan2(allFunctions2, 5000);

const func1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1234);
});
const func2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(6);
  }, 1234);
});
const func3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(8);
  }, 3333);
});
const cb = (num) => {
  console.log(num);
};

const razem3 = (func1, func2, func3, cb) => {
  const list = [func1, func2, func3];
  const values = [];
  list.forEach((promise) => {
    promise.then((data) => {
      values.push(data);
      if (values.length === list.length) cb(values);
    });
  });
};

// razem3(func1, func2, func3, cb);

const cb4 = (value) => {
  const result = value.reduce((acc, el) => {
    return (acc += el);
  }, 0);
  return result;
};
const razem4 = (func1, func2, func3, cb) => (n) => {
  Promise.all([func1, func2, func3]).then((response) =>
    console.log(cb(response) + n)
  );
};
razem4(func1, func2, func3, cb4)(5);
