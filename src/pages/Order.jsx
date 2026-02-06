// import { useLocation } from "react-router-dom";
// import "../allcss/Order.css";

// const Order = () => {
//   const { state } = useLocation();

//   return (
//     <div className="order-container">
//       <h2>Order Now</h2>

//       {/* PRODUCT SUMMARY */}
//       <div className="order-product">
//         <img src={state?.image} alt="product" />
//         <div>
//           <h3>{state?.name}</h3>
//           <p className="order-price">₹ {state?.price}</p>
//         </div>
//       </div>

//       {/* ORDER FORM */}
//       <form
//         className="order-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("✅ Order Placed Successfully!");
//         }}
//       >
//         <input type="text" placeholder="Full Name" required />
//         <input type="tel" placeholder="Mobile Number" required />
//         <input type="text" placeholder="Address" required />
//         <input type="text" placeholder="City" required />

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default Order;



import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../allcss/Order.css";

const Order = () => {
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (!state) {
      alert("❌ Product details missing");
      return;
    }

    if (!form.name || !form.phone || !form.address || !form.city) {
      alert("❌ Please fill all details");
      return;
    }

    const message = `
🛒 *New Order Received*

📦 Product: ${state.name}
💰 Price: ₹${state.price}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏠 Address: ${form.address}
🌆 City: ${form.city}

✅ Please confirm this order.
    `;

    const adminNumber = "919589954259"; // YOUR WHATSAPP NUMBER

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

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

      {/* NOTE */}
      <p style={{ fontSize: "13px", color: "#555", textAlign: "center" }}>
        WhatsApp open hone ke baad <b>SEND</b> button dabana zaroori hai
      </p>

      {/* ORDER FORM */}
      <form className="order-form" onSubmit={placeOrder}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Order on WhatsApp (Send to Confirm)
        </button>
      </form>
    </div>
  );
};

export default Order;

