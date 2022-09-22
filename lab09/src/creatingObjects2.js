// 1. Uprość funkcję BookCreator z poprzednich zajęć tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author) {
    this.title = title;
    this.author = author;
    this.readers = 0;
}

const book = new BookCreator("minecraft poradnik 2", "mojnag");
// console.log(book);


// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.




// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.
class BookCreatorv2 {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.readers = 0;
    }
    print() {
      console.log(`${this.title} - ${this.author}`);
    }
    addReader() {
      this.readers++;
    }
}
const bookv2 = new BookCreatorv2("Akademia Pana Kleksa", "Jan Brzechwa");
// console.log(bookv2);


// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = (name) => ({
    name: name,
    age: 0,
    addAge(){
        this.age++;
    }
})
const person1 = Person("Maciej");
// console.log(person1);

// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)
