import { useLocation } from "react-router-dom";
import "../allcss/Order.css";

const Order = () => {
  const { state } = useLocation();

  return (
    <div className="order-container">
      <h2>Order Now</h2>

      {/* PRODUCT SUMMARY */}
      <div className="order-product">
        <img src={state?.image} alt="product" />
        <div>
          <h3>{state?.name}</h3>
          <p className="order-price">₹ {state?.price}</p>
        </div>
      </div>

      {/* ORDER FORM */}
      <form
        className="order-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("✅ Order Placed Successfully!");
        }}
      >
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Order;
