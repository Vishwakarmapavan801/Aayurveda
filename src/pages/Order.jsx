

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../allcss/Order.css";

const Order = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pin: "",
  });

  // Redirect if product not selected
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.city || !form.pin) {
      alert("Please fill all details");
      return;
    }

    const message = `
 *New Order Received*

 Product: ${state.name}
 Price: ₹${state.price}

 Name: ${form.name}
 Phone: ${form.phone}
 Address: ${form.address}
 City: ${form.city}
 Pin Code: ${form.pin}

Please confirm this order.
`;

    const adminNumber = "919589954259";

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  if (!state) return null;

  return (
    <div className="order-container">
      <h2>Order Now</h2>

      <div className="order-product">
        <img src={state.image} alt={state.name} />
        <div>
          <h3>{state.name}</h3>
          <p className="order-price">₹ {state.price}</p>
        </div>
      </div>

      <p className="order-note">
        WhatsApp open hone ke baad <b>SEND</b> button dabana zaroori hai
      </p>

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
          pattern="[0-9]{10}"
          maxLength="10"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Full Address"
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

        <input
          type="text"
          name="pin"
          placeholder="Pin Code"
          pattern="[0-9]{6}"
          maxLength="6"
          value={form.pin}
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
