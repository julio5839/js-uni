const axios = require("axios");

let randomNumbers = []; //losowo 5
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

// console.log(randomNumbers);

// const getEntries = async (list) => {
//   const entries = [];
//   try {
//     for (num of list) {
//       const entry = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${num}`
//       );
//       const comments = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${num}/comments`
//       );
//       entries.push({
//         entry: entry.data,
//         comments: comments.data,
//       });
//     }
//     console.dir(entries, { depth: 3 });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// getEntries(randomNumbers);
// getEntries([-1]);
//async await nie mozna na kolokwium uzywac

const getEntries = (list) => {
  for (num of list) {
    const entry = axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then((entry) => {
        return {
          entry: entry.data,
        };
      })
      .catch((err) => console.log(err.message));
    const comments = axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
      .then((comments) => {
        return {
          comments: comments.data,
        };
      })
      .catch((err) => console.log(err.message));
    Promise.all([entry, comments]).then((res) =>
      res.map((n) => console.log(n))
    );
  }
};

// getEntries(randomNumbers);
