function compareNumbers(a, b, callback) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
    callback();
  } else {
    console.log(`${a} is less than or equal to ${b}`);
  }
}

function numberCallBack() {
  console.log("The callback ran");
}

compareNumbers(10, 5, numberCallBack);
