// const f1 = (x, cb) => {
//   setTimeout(() => {
//     console.log("Uruchomienie funkcji 1");
//     cb(x + 2);
//   }, 6000);
// };
// const f2 = (x, cb) => {
//   setTimeout(() => {
//     console.log("Uruchomienie funkcji 2");
//     cb(x + 2);
//   }, 2000);
// };

// const callback = (data) => {
//   console.log("Wynik", data);
// };

// const poKolei = (fun1, fun2, cb) => {
//   fun1(2, (data) => {
//     console.log("To jest wynik 1 funkcji", data);
//     fun2(data, (data) => {
//       console.log("To jest wynik 2 funkcji", data);
//       cb(data);
//     });
//   });
// };

// poKolei(f1, f2, callback);

const callback = (res) => {
  console.log("Wynik", res);
};
// const results = [];
const funTab = [fun1, fun2];
const poKolei = (funTab, cb) => (n) => {
  const [fun1, fun2, fun3] = funTab;
  // fun1(n).then((res) => {
  //   fun2(res).then((r) => {
  //     fun3(r).then((result) => cb(result));
  //   });
  // });
  const promise = funTab.shift();
  if (typeof promise === "function") {
    promise(n).then((res) => {
      // console.log(res)
      // results.push(res)
      if (funTab.length === 0) {
        // cb(results)
        cb(res);
      } else {
        poKolei(funTab, cb)(res);
      }
    });
  }
};
poKolei(funTab, callback)(10);

function fun1(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 3000);
  });
}

function fun2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 2);
    }, 4000);
  });
}

function fun3(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 3);
    }, 2000);
  });
}
