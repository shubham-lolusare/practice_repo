const data = await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => data);

console.log(data);
