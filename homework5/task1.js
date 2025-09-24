function timer(sec) {
  let initialValue = sec;
  let interval = setInterval(() => {
    console.log(initialValue);
    initialValue--;
    if (initialValue < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

timer(5);
