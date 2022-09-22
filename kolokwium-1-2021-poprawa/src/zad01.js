const hogward2 = hogward.hogwardArray.reduce((acc, cVal) => {
  const { name } = cVal;

  let type = "none";
  if (cVal.hogwartsStaff) type = "staff";
  else if (cVal.hogwartsStudent) type = "student";

  if (cVal.alive) {
    if (cVal.house != "") {
      if (acc[cVal.house]) {
        acc[cVal.house].push({ name, type });
      } else {
        acc[cVal.house] = [{ name, type }];
      }
    } else {
      if (acc["noHouse"]) {
        acc["noHouse"].push({ name, type });
      } else {
        acc["noHouse"] = [{ name, type }];
      }
    }
  }
  return acc;
}, []);
// console.log(hogward2);
