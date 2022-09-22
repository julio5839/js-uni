// Mamy następującą listę zakupów: 

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
]

//a) Oblicz ile zapłacimy przy kasie - pamiętaj, aby doliczyć podatek VAT.
//b) Korzystając z reduce() napisz funkcję, która zamienia tablicę obiektów w tablicę wartości (cen netto).
//c) Potrzebujemy naszej listy zakupów w formie tablicy, gdzie każdy element to: 'nazwa: cena netto' 
//Napisz funkcję, która przyjmuje w parametrach tablicę i funkcję. Na przekazanej tablicy wywołujemy funkcję reduce, a przekazana funkcja ma za zadanie konkatenować wartości do ostatecznej formy.
//const newArray = func(utilities, x  => x.name + ': ' + x.netto);
//console.log(newArray);
//d) Wyszukaj działanie funkcji map() i porównaj z działaniem swojej funkcji z poprzedniego zadania. Wywołaj tą funkcję uzyskując analogiczny wynik, jak w poprzednim zadaniu.
//e) Niestety nie wystarczy nam pieniędzy na wszystkie sprzęty, dlatego chcemy wyszukać produkty, których cena jest < 500
//const newArray = func(utilities, x => x.netto < 500)
//console.log(newArray); // wypisanie tablicy obiektów

// //a
const sum= wishlist.reduce((acc, currentVal)=>{
    return ((acc + currentVal.netto)*1.23);
}, 0)

console.log(sum);

// //b
const ceny= wishlist.reduce((acc, currentVal)=>{
    acc.push({ [currentVal.name]: currentVal.netto});
    return acc;
}, [])

console.log(ceny);

// //c

const netto = wishlist.reduce((acc, cVal)=>{
    acc.push(cVal.netto) ;
    return acc;
},[])

console.log(netto);

// //d
const newArrayMap = (arr, val) => {
    return arr.map((element) => {
        return val(element);
    });
};
  
console.log(newArrayMap(wishlist, (x) => `${x.name}: ${x.netto}`));