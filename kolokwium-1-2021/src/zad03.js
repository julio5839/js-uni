const checkExchange = (moneyArray) => {
  const budget = {
    5: 0,
    10: 0,
    20: 0,
  };

  let haveChange = true;

  moneyArray.forEach((money) => {
    if (money == 5) {
      budget[5]++;
    }
    if (money == 10) {
      if (budget[5] > 0) {
        budget[10]++;
        budget[5]--;
      } else haveChange = false;
    }
    if (money == 20) {
      if (budget[5] > 0 && budget[10] > 0) {
        budget[20]++;
        budget[10]--;
        budget[5]--;
      } else if (budget[5] >= 3) {
        budget[5] -= 3;
      } else haveChange = false;
    }
  });

  return haveChange;
};

// console.log(checkExchange([5, 5, 5, 10, 20]));

// console.log(checkExchange([5, 5, 10, 10, 20]));

// console.log(checkExchange([10, 10]));

// console.log(checkExchange([5, 5, 10]));
