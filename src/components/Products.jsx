/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  console.log("status: ", status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {status === "loading"
        ? "loading..."
        : status === "idle"
        ? products &&
          products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to cart
              </button>
            </div>
          ))
        : "Something went wrong"}
    </div>
  );
}
