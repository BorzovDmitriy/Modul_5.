let myAnimals = new Map();
myAnimals.set('dog', 'Bobi');
myAnimals.set('cat', 'Charli');
myAnimals.set('bird', 'Willy');
for([key, value] of myAnimals) {
  console.log(`Ключ — ${key},значение — ${value}.`);
}