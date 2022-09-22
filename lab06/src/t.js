const listaZakupow = require("./listaZakupow").listaZakupow;

const xd1 = listaZakupow.reduce((acc,cVal)=>{
    acc[cVal.produkt]= cVal;
    return acc;
},{})

// console.log(xd1);

const xd2 = listaZakupow.reduce((acc,cVal)=>{
    if (cVal.typ === "nabiał"){
        acc+=(cVal.cena*cVal.ilosc);
    }
    return acc;
},0)
// console.log(xd2);

const xd3 = listaZakupow.reduce((acc,cVal)=>{
    if (cVal.jednostka === "kg"){
        acc.push(cVal);
    }
    acc.sort((a, b) => (a.produkt > b.produkt ? 1 : -1));
    return acc
},[])

// console.log(xd3);

const xd4 = (name)=>{
    const helper = listaZakupow.reduce((acc,cVal)=>{
        if (cVal.typ === name && (cVal.cena*cVal.ilosc)<10){
            acc.push(cVal);
        }
        acc.sort((a, b) => (a.produkt > b.produkt ? 1 : -1));
        return acc;
    },[])
    return (helper);
}

// console.log(xd4("owoce"));

const xd5 = listaZakupow.reduce((acc,cVal)=>{
    if (cVal.jednostka === "sztuk"){
        acc.push(cVal.produkt);
    }
    return acc
},[])
// console.log(xd5);

const xd7a = listaZakupow.reduce((acc, product) => {
    const price = product.cena;
    return acc < price ? price : acc;
}, 0);
// console.log(xd7);

const xd7b = listaZakupow.reduce((acc,cVal)=>{
    if (cVal.cena*cVal.ilosc < xd7a){
        acc.push(cVal);
    }
    return acc;
},[])
console.log(xd7b);