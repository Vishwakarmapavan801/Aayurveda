import { useState } from "react";
import "../allcss/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    Pincode: "",
    City: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message || !form.City || !form.Pincode) {
      alert("Please fill all details");
      return;
    }

    const whatsappMessage = `
*New Contact Message*

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
City: ${form.City}
Pincode: ${form.Pincode}

Message:
${form.message}
    `;

    const adminNumber = "919589954259";

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Contact Now</h2>

      <div className="contact-box">

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>+91 9589954259</p>
          <p>support@aayurveda.com</p>
          <p>Indore, Madhya Pradesh</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
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
            name="City"
            placeholder="City"
            value={form.City}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="Pincode"
            placeholder="Pin Code"
            value={form.Pincode}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
