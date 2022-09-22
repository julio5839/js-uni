//zad2
let a = -5;

if (a < 0){
    console.log("mniejsze od zero, ujeman")
} else{
    console.log("wieksze od zero, dodatnia");
}

if (a %2 == 0){
    console.log("parzyste");
} else{
    console.log("nie paryszte");
}

//zad3
const lista = [1,2,3,5,-6,12,63,-23,8];
let max = lista[0];
let min = lista[0];

// petla

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// min max

for (let i = 0; i < lista.length; i++){
    if (lista[i] > max){
        max = lista[i];
    }
    if (lista[i] < min){
        min = lista[i];
    }
}

console.log("min: " + min);
console.log("max: " + max);

// odwroc

for (let i = lista.length-1; i >= 0; i--){
    console.log(lista[i]);
}

//zad4
const tablica = [5,3,3];

if (tablica.length === 3){
    for (let i = 0; i < tablica.length; i++){
        if (tablica[i] > 0){
            tablica.sort();
            if (tablica[0] + tablica[1] > tablica[2]){
                console.log("mozna trojkat");
            } else{
                console.log("nie mozna");
            };
        } else{
            console.log("ujemne");
        };
    };
} else{
    console.log("za dlugie/krotkie");
};
