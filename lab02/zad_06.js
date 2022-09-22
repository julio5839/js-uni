const cat = { 
    name: 'Filemon', 
    age: 6,
}

console.log(`kot ma na imie ${cat.name} i ma ${cat.age} lat`);

cat["description"] = `kot ma na imie ${cat.name} i ma ${cat.age} lat`;

cat["breed"] = "British Shorthair";
cat["color"] = "blueish";

cat["description"] += `rasa ${cat.breed}, kolor ${cat.color}`;

console.log(cat);