function randomNumber(n) {
  let interval = setInterval(() => {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random === n) {
      clearInterval(interval);
      console.log(`the number was: ${n}`);
    }
  }, 500);

  console.log(n);
}

randomNumber(7);
