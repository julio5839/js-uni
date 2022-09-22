'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('tak') : console.log('nie');
    (val_1 === val_2) ? console.log('Tak') : console.log('Nie');
}

// bo === sprawdza jescze typ zmiennej i je porownuje

// isEquals(2, '2'); tak/ Nie
// isEquals(null, undefined); tak/ Nie
// isEquals(undefined, NaN); nie/ Nie
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); nie/Nie
// isEquals(0, ''); tak/Nie
// isEquals('0', ''); nie/Nie
// isEquals(+0, -0); tak/Tak
// isEquals(0, false); tak/Nie
// isEquals(0, 'false'); nie/Nie
// isEquals([1, 2], '1,2'); tak/Nie

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

// console.log(person);
// person = {};
// console.log(person);

//najpierw zwroci object person potem bedzie error bo jak jest const to nie mozna przepisac tego calego do czegos innego tylko mozna zmieniac sciezke do ktorej dany const nawiazuje

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// let number = 3;
// console.log(number); {
//     let number = 4;
//     console.log(number);
// }
// console.log(number);

// 3 potem 4 potem 3 (bo zmiennie let nie dzielaja poza obiektem)

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// const arr = [1, 2];
// const newArr1 = [arr, 3, 4];
// console.log(newArr1);
// const newArr2 = [...arr, 3, 4];
// console.log(newArr2);

// ... zbiera wszystkie wartosci z arraya
// newArray1 zwroci tablice arr i 3 oraz 4
// newArray2 zwroci 1 2 3 4

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

// const word = 'javascript';
// const arrWord = [...word];
// console.log(arrWord);

// po literce

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

// var hello = 'Hello world!';
// var result = hello / 2;

// console.log(result);

// Number.isNaN(result); //true 
// Number.isNaN(hello);

//zwraca nan

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

// var dziala poza funkcjami np a let i const nie
// i tez jak mamy np console.log(varJakisTam) a potem dopiero definuiujemy var to zwroci nam bodajze ze wartosc jest undienifed a const i let to nie zadziala

// var car = 'BMW';

// function showCar() {
//     car = 'Audi';
//     model = 'A5';
//     console.log('Great car!');
// }

// showCar();

// car;
// model;

// -------

// var name = 'Bryan';

// (function differentName() {
//     var name = 'Adam';
//     console.log(name);
// })();

// console.log(name);

// -------

// if (true) {
//     var a = 2;
// }
// console.log(a);

// if (true) {
//     const b = 2;
// }
// console.log(b);

// -------

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// -------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// zeby pokazywalo bledy co moze ich nie pokazywac bez use strict jak np brak ;