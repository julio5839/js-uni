const getCounter = (min, max) => {
  let counter = min;
  return () => {
    if (counter <= max) {
      console.log(counter);
      counter++;
    } else {
      console.log(undefined);
    }
  };
};

// const counter = getCounter(5, 7);
// counter();
// counter();
// counter();
// counter();
