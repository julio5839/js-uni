const { lp3 } = require("./toplist");

const randomSongs = (min, max, n) => {
  const part = lp3.slice(lp3, min, max);
  for (let i = 0; i < n; i++) {
    console.log(part[Math.floor(Math.random() * part.length)]);
  }
};

// console.log(randomSongs);

// 2
const firstTenSongs = () => {
  const part = lp3.slice(lp3, 0, 9);
  lp3.forEach(part, function (value, index) {
    lp3.delay(() => {
      console.log(value);
    }, 2000 * (index + 1));
  });
};

// console.log(firstTenSongs);

const tablic2 = lp3.reduce((acc,cVal)=>{
    acc[cVal.author] = acc[cVal.author] || [];
    acc[cVal.author].push({
        song: cVal.song,
        place: cVal.place,
    });
    return acc
},[])
// console.log(tablic2); //to jest to samo co tam w 2 zadaniu chyba ze nie umiem czytac 
