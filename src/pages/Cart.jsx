import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleClick = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products &&
          products.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button
                onClick={() => {
                  handleClick(product.id);
                }}
                className="btn"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
