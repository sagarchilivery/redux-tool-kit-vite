import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <h2 className="heading">Welcome to Redux ToolKit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
}
