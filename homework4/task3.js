const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];

let passedStudents = students
  .filter((el) => el.passed === true)
  .forEach((el) => {
    console.log(`passed: ${el.name}`);
  });
