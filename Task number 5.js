let arr = [3, 5, 'summer', 9, 4, 7];
console.log(arr.length);
let result = arr.map(function(item, index, array) {
  return item
});
console.log(result);