let min = 0;
let max = 100;
function getRandomnumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getRandomnumber(min, max));