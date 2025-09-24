let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];

let ageGroup = people.reduce(
  (tot, curr) => {
    let age = curr.age;
    if (age > 10) {
      tot.moreThanTen++;
    } else if (age < 20) {
      tot.lessThanTen++;
    }

    return tot;
  },
  { moreThanTen: 0, lessThanTen: 0 }
);

console.log(ageGroup);
