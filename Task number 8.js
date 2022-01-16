let myAnimals = new Map();
myAnimals.set('dog', 'Bobi');
myAnimals.set('cat', 'Charli');
myAnimals.set('bird', 'Willy');
for([value, key] of myAnimals) {
  console.log(`Ключ — ${key},значение — ${value}.`);
}