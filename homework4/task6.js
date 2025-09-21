const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];

let sorted = phones.sort((a, b) => a.price - b.price);
let cheapest = sorted[0];

console.log(cheapest.model);
