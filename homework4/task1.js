const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];

let sortedArr = laptops.sort((a, b) => a.price - b.price);
let mostExpensive = sortedArr[sortedArr.length - 1];

console.log(mostExpensive);
