// პირველი ვერსია როცა კონსოლში გვინდა გადავცეთ რიცხვები
let rectangle = {
  getArea: function (width, length) {
    return width * length;
  },
};

console.log(rectangle.getArea(5, 15));

// მეორე ვერსია როცა ობიექტშია აღნიშნული სიგრძისა და სიგანის რიცხვები
// let rectangle = {
//   width: 5,
//   length: 20,
//   getArea: function () {
//     return this.width * this.length;
//   },
// };

// console.log(rectangle.getArea());
