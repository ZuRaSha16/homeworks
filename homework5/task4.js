async function fetchAPI(API) {
  let res = await fetch(API);
  let data = await res.json();
  let slicedData = data.slice(0, -6);
  console.log(slicedData);
}

fetchAPI("https://jsonplaceholder.typicode.com/users ");
