let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];

let reducedArr = products.reduce(
  (tot, curr) => {
    let price = curr.price;
    if (price > 20) {
      tot.moreThanTwenty++;
    } else if (price < 20) {
      tot.lessThanTwenty++;
    }
    return tot;
  },
  { moreThanTwenty: 0, lessThanTwenty: 0 }
);

console.log(reducedArr);
