//Tablicę obiektów zmodyfikuj tak, aby znajdujące się w niej obiekty znajdowały się pod ich id jako indeks. 

const imiona = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
];

const poIndex = imiona.reduce((array, currentValue)=>{
    array.push({ [currentValue.name]: currentValue});
    return array;
}, []);

console.log(poIndex);