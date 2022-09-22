let arr = [1, 5, 6, 5, 5, 1, 5];
let counter = new Object();

for (const value of arr) {
    if (typeof counter[value] == "undefined") {
        let temp = new Object();
        temp[value] = 1;
        Object.assign(counter, temp);
    } else {
        counter[value] += 1;
    }
}

for (const item in counter) {
    console.log(item + " występuje " + counter[item] + ((counter[item] == 1) ? " raz" : " razy"));
}

console.log(counter);