function test(n, callback) {
  if (n > 27) {
    callback();
  } else {
    console.log("not more than 27");
  }
}

function callBackFnc() {
  console.log("more than 27");
}

test(25, callBackFnc);
