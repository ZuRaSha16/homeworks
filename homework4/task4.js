const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];

let filter = products.filter((num) => num.price < 10).map((el) => el.title);

console.log(filter);
