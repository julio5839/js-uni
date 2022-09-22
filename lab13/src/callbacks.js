// const poKolei = (fun1, fun2, cb) => { ... };
// taką, że:
// jej dwoma pierwszymi argumentami są funkcje asynchroniczne – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei
// funkcja poKolei powinna zapewnić, że fun2 wykona się zawsze po fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
// trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun2
// Uwaga Nie korzystaj z mechanizmu async/await ani Promise'ów.

//nie rozumiem 💀💀

const callback = (data) => {
  console.log(`wynik: ${data}`);
};

const func1 = (x, cb) => {
  setTimeout(() => {
    console.log(`func1`);
    cb(x + 2);
  }, 3000);
};

const func2 = (x, cb) => {
  setTimeout(() => {
    console.log(`func1`);
    cb(x * 2);
  }, 3000);
};

const poKolei = (func1, func2, cb) => {
  func1(4, (data) => {
    console.log(`funcc 1 ${data}`);
    func2(data, (data) => {
      console.log(`ufucna 2 ${data}`);
      cb(data);
    });
  });
};

poKolei(func1, func2, callback);
