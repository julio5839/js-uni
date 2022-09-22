const { listaZakupow } = require('./listaZakupow.js');

const zakupy = require('./listaZakupow.js').listaZakupow;

//1
/*Zmodyfikuj listę zakupów tak, aby znajdujące się w niej obiekty znajdowały się pod ich produktem jako indeks.
{ 
    chleb: { produkt: "chleb", typ: "pieczywo", ilosc: 2, cena: 1.5, jednostka: "sztuka" }
    ... 
}
*/

const id= zakupy.reduce((acc, currentVal)=>{
    acc[currentVal.produkt] = currentVal;
    return acc;
}, {})

// console.log(id);

//b
const sumNab = zakupy.reduce((acc, cVal)=>{
    if (cVal.typ === "nabiał"){
        const sum = cVal.cena * cVal.ilosc;
        return acc+=sum;
    }
    return acc;
},0)

// console.log(sumNab);

//c
const kg = zakupy.reduce((acc,cVal)=>{
    if (cVal.jednostka === "kg"){
        acc.push(cVal.produkt);
        return acc.sort();
    }
    return acc;
},[])

// console.log(kg);


const asc =(typ, zakupy)=>{
    const helper = zakupy.reduce((acc,cVal)=>{
        if (cVal.typ === typ){
            const cena = (cVal.ilosc * cVal.cena).toFixed();
            acc[cVal.produkt] = cena;
            return acc;
        }
        return acc.sort((a,b)=> a.cena - b.cena);
    },[])
    return helper
}

// console.log(asc("napoje",listaZakupow)); //cba nwm

const szkt = zakupy.reduce((acc, cVal)=>{
    if (cVal.jednostka === "sztuk"){
        acc.push(cVal.produkt);
        return acc.sort();
    }
    return acc;
},[])

// console.log(szkt);

