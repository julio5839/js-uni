'use strict';
// const fetch = require('node-fetch');
import fetch from "node-fetch";

/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
        function(response){
            if (response.status === 200){
                console.log(":D");
                return;
            } else{
                console.log("D:");
                return;
            }
        }
    )
/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/
const todo = {
    idUser: 1,
    title: "Tytuł",
    completed: false,
  };
  
fetch("https://jsonplaceholder.typicode.com/todos", {
method: "POST",
body: JSON.stringify(todo),
})
    .then((res) => {
        console.log("Dodano");
        return res.json();
    })
    .catch((err) => {
        console.log("blad");
        return err.json()
    })
    .then(() => {
        console.log(todo.idUser);
    });