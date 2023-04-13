import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const data = await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => data);

function Products() {
  let prodList = data.map((data) => {
    return (
      <ProductCard
        id={data.id}
        title={data.title}
        src={data.image}
        price={data.price}
      />
    );
  });
  return <div className="product">{prodList}</div>;
}

export default Products;
