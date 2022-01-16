let myAnimals = new Map();
myAnimals.set('dog', 'Bobi');
myAnimals.set('cat', 'Charli');
myAnimals.set('bird', 'Willy');
for (let animals of myAnimals.keys()){
  console.log(`Ключ — ${animals}.`)
}
for (let name of myAnimals.values()){
  console.log(`Значение — ${name}.`)
}