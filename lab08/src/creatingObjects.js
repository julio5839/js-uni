// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
  title: "title",
  author: "author",
  readers: 0,
  print(){
    console.log(`${this.author} - ${this.title}`);
  },
  addReaders() {
    this.readers++;
  },
};

// book0.print();

const book1 = {};

book1.title = "title";
book1.author = "author";
book1.print = () => {
  console.log(`${book1.author} - ${book1.title}`);
};

// book1.print();

const book2 = Object.create({});

book2.title = "title";
book2.author = "author";
book2.print = () => {
  console.log(`${book2.author} - ${book2.title}`);
};

// book2.print();

function BookCreator(title, author) {
  const b = {};
  b.title = title;
  b.author = author;
  b.print =()=>{
    console.log(`${b.title} - ${b.author}`);
  }
  return b
}

const book3 = BookCreator("Cień wiatru", "Carlos Ruiz Zafon");
const book4 = BookCreator("Ojciech Chrzestny", "Mario Puzo");

// book3.print();
// book4.print();

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
  console.log(this);
}

// testThis(); //window object

function testThis2() {
  "use strict";
  console.log(this);
}

// testThis2(); //undefined

// 2.1. Czym jest this?
//odwoluje sie do object w ktorym jest wywolywana

// 2.2. Do czego odwołuje się this w obu przypadkach

const person = {
  name: "Oscar Wilde",
  print() {
    console.log(`'a: ${this.name}'`);

    function a() {
      console.log(this);
    }
    a();
  },
};
// person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
//pierwsze to do name w person a drugie to do window object bo this jest w funkcji samej sobie

// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function () {
  console.log(this.name);
};

const person1 = {
  name: "Aaron Towels",
};

const person2 = {
  name: "Tom Clancy",
};

person1.printName = printName;
person2.printName = printName;

// person1.printName();
// person2.printName();

// // 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!

const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    const a = () => {
      console.log(this);
    };
    a();
  },
};
person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function?
//obiekt, scope calego obiektu  

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1.
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title.
// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.

// ========================================
// * ZADANIE 4
// ========================================

// Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller').
// ========================================
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania)

const object = {};
object.hasOwnProperty("isBestseller");

// ========================================
// * ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy?
const book = BookCreator("the picture of dorian gray", "oscar wilde");
console.log(book.__proto__);

//__proto__ odwoluje sie do value prototype obiektu