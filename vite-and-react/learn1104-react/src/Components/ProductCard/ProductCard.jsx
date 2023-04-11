import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div>{props.id}</div>
      <div>
        <img src={props.src} width="100px" />
      </div>
      <div>{props.title}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default ProductCard;
