const axios = require("axios");

// Napisz funkcje

// ```js
// const checkTime = (funTab) => {
//   // Uzupełnij
// };
// ```

// spełniającą poniższe warunki:
// - funkcja przyjmuje tablice funkcji asynchronicznych tj. `funTab` zawierającą stałą liczbę 5-ciu zapytań (w dowolnej kolejności):
//   1. GET `https://jsonplaceholder.typicode.com/photos`
//   2. POST `https://jsonplaceholder.typicode.com/posts` z obiektem:
//      ```
//      {
//        title: 'Test',
//        body: 'Lorem ipsum',
//        userId: 2
//      }
//      ```
//   3. GET `https://jsonplaceholder.typicode.com/users/{id}` po dowolnym `id` (zakres 1-10)
//   4. GET `https://jsonplaceholder.typicode.com/todos`
//   5. PUT `https://jsonplaceholder.typicode.com/posts/{id}` po dowolnym `id` (zakres 1-100) z obiektem:
//      ```
//      {
//        id: id,
//        userId: 3,
//        title: 'New title',
//        body: 'New body'
//      }
//      ```
// - funkcja powinna wykonywać dwa scenariusze (oba powinny wykonywać się jednocześnie, muszą być osobnymi procesami)
//   1. (a) funkcje przekazane jako parametr będą wykonywane jedna po drugiej (tzn. w momencie zakończenia wykonywania funkcji pierwszej, rozpoczyna się wykonanie funkcji drugiej)
//   2. (b) wszystkie funkcje wykonywane są równocześnie
// - co sekundę (lub inną jednostkę czasu) powinna zostać wypisana informacja, ile czasu upłynęło od rozpoczęcia działania programu
// - kiedy jeden ze scenariuszy zakończy swoje działanie w konsoli powinien zostać wypisany odpowiedni komunikat z informacją, po ilu np. sekundach scenariusz zakończył swoje działanie
// - na koniec funkcja `checkTime` powinna wyświetlić tablice dwóch liczb zawierającą czasy zakończenia działania każdego ze scenariuszy

// ```js
// // Przykładowe działanie programu

// checkTime(funTab);
// // Start
// // 1
// // Zakończono działanie: scenariusz b)
// // 2
// // 3
// // 4
// // Zakończono działanie: scenariusz a)
// // Koniec
// // Czas działania: [1, 4]
// ```

//zad3
const axios = require("axios");

const func11 = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const func22 = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts", {
    title: "Test",
    body: "Lorem ipsum",
    userId: 2,
  });
};

const func33 = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return axios.get(
    `https://jsonplaceholder.typicode.com/users/${randomNumber}`
  );
};

const func44 = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

const func55 = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return axios.put(
    `https://jsonplaceholder.typicode.com/posts/${randomNumber}`,
    {
      id: randomNumber,
      userId: 3,
      title: "New title",
      body: "New body",
    }
  );
};

const funcTab = [func11, func22, func33, func44, func55];

const checkTime = (funcTab) => {
  let time = 0;
  let end = 0;
  console.log("start");

  const timer = setInterval(() => {
    time++;
    console.log(time);
  }, 1000);
  const [fun1, fun2, fun3, fun4, fun5] = funcTab;

  fun1()
    .then((res) => {
      return fun2();
    })
    .then((res) => {
      return fun3();
    })
    .then((res) => {
      return fun4();
    })
    .then((res) => {
      return fun5;
    })
    .then((res) => {
      end++;
      console.log(`zakonczono scenariusz a)\nczas: [0, ${time}]`);
      if (end === 2) {
        clearInterval(timer);
      }
    });

  Promise.all([funcTab]).then((res) => {
    end++;
    console.log(`scenariusz b koniec\nczas: [0, ${time}]`);
    if (end === 2) {
      clearInterval(timer);
    }
  });
};
checkTime(funcTab);
