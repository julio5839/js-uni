'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

// Uzupełnij
// setTimeout(helloWorld, 1000)
// console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.

const haha = ()=>{
    console.log("heyo");
    setTimeout(()=>{
        console.log("koniec");
    },2000);
}

// haha()

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

// const xd2 = setInterval(()=>{
//     console.log("welcome");
// }, 1000)

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

// const int = setInterval(() => {
//     console.log("\\");
//     console.log("//");
// }, 1000);
// const timeout = setTimeout(() => {
//     clearInterval(int);
// }, 6000);

// Zadanie 1.5. 

// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x ssekund i automatycznie zatrzyma się po upływie y sekund. 
const mama = function(){
    console.log("mama moja");
}
const xd3 = (fn, x=1, y=x+1)=>{
    const ma = setInterval(fn,x*1000);
    setTimeout(() => {
        clearInterval(ma);
    }, y*1000);
}
// xd3(mama,1,10)