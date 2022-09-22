//Usunie wszystkie ujemne liczby z tablicy, a następnie podniesie te dodatnie je do kwadratu.

const arr = [1,-2,3,-4,-5,6,-7,10];

//edit bo chyba trza bylo usunac a nie sobei nowy zrobic arr
const usun= arr.reduce((acc, cVal)=>{
    if (cVal < 0){
        arr.pop;
    } else{
        acc+= cVal**2
    }
    return acc
},0)

console.log(usun);

console.log(usun)


