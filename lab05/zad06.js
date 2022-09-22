//Napisz funkcję, która znajduje i zwraca konkretny element tablicy. Jeśli danego elementu nie ma w tablicy, zwraca undefined. 
//let element = func([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala');  
            

const myFilter = (arr, util) => {
    return arr.reduce((acc, current) => {
        if (util(current) && acc === undefined) return current;
        return acc;
    }, undefined);
};

const arr = ["Ala", "Kot", "Pies"];
console.log(myFilter(arr, (x) => x === "Ala"));