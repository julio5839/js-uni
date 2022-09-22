// Napisz funkcję:

// ```js
// const poKolei = (fun1, fun2, fun3, cb) => {
//   // Uzupełnij
// };
// ```

// taką, że:

// - jej trzema pierwszymi argumentami są funkcje zwracające promise – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie `poKolei`
// - funkcja `poKolei` powinna zapewnić, że `fun3` wykona się po `fun2`, które to wykona się zawsze po `fun1`. Wyniki wygenerowane przez `fun1` zostaną przekazane do `fun2`, a wynik `fun2` zostanie przekazany do `fun3`
// - czwartym argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez `fun3`
// - jeżeli któryś z promise'ów zakończy się porażką, funkcja ma dalej kontynuować swoje zadanie
//zad2
const func1 = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(number * 2);
    }, 3000);
  });
};

const func2 = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 3000);
  });
};

const func3 = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(number * 2);
    }, 1000);
  });
};

const callback = (data) => {
  console.log(data);
};

const poKolei = (fun1, fun2, fun3, cb) => {
  new Promise((resolve, reject) => {
    resolve(
      fun1(2)
        .then((res1) => {
          return res1;
        })
        .catch((err1) => {
          return err1;
        })
    );
  })
    .then((res) => {
      return new Promise((resolve, reject) => {
        resolve(
          fun2(res)
            .then((res2) => {
              return res2;
            })
            .catch((err2) => {
              return err2;
            })
        );
      });
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        resolve(
          fun3(res)
            .then((res3) => {
              return res3;
            })
            .catch((err3) => {
              return err3;
            })
        );
      });
    })
    .then((resfinal) => {
      cb(resfinal);
    });
};

// console.log(poKolei(func1, func2, func3, callback));
