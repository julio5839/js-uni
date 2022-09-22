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