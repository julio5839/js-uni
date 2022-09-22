const { series } = require("./series.js");
const lodash = require("lodash");

const miniseries = series.reduce((acc, cVal) => {
  if (cVal.seasons === 1) {
    acc.push({
      name: cVal.name,
      year: cVal.startYear,
      type: cVal.type,
    });
  }
  return lodash.sortBy(acc, ["name"]);
}, []);
// console.log(miniseries);

const seriesTab = series.reduce(
  (acc, cVal) => {
    //   const st = []; //<2010
    //   const nd = []; //2010-20
    //   const rd = []; //2020>
    const { id, name, startYear, endYear, type, seasons } = cVal;

    let temp = endYear
      ? {
          id,
          name,
          startYear,
          endYear,
          type: type.join(", "),
          seasons,
        }
      : {
          id,
          name,
          startYear,
          type: type.join(", "),
          seasons,
        };

    if (!(cVal.seasons === 1)) {
      if (cVal.startYear < 2010) {
        acc[0].push(temp);
        lodash.orderBy(acc[0], ["startYear", "endYear"], ["desc"]);
      } else if (cVal.startYear < 2020 && cVal.startYear > 2010) {
        acc[1].push(temp);
        lodash.orderBy(acc[0], ["startYear", "endYear"], ["desc"]);
      } else {
        acc[2].push(temp);
        lodash.orderBy(acc[0], ["startYear", "endYear"], ["desc"]);
      }
    }
    return acc;
  },
  [[], [], []]
);
// console.log(seriesTab);
