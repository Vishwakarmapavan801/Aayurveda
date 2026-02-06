// import "../allcss/Contact.css";

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("✅ Message Sent Successfully");
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Now</h2>
//       <p className="contact-subtitle">
//         Have any questions? We are happy to help you.
//       </p>

//       <div className="contact-box">
//         {/* LEFT INFO */}
//         <div className="contact-info">
//           <h3>Get in Touch</h3>
//           <p>📞 +91 9876543210</p>
//           <p>📧 support@yourstore.com</p>
//           <p>📍 Bhopal, Madhya Pradesh</p>
//         </div>

//         {/* FORM */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <input type="tel" placeholder="Mobile Number" required />
//           <textarea placeholder="Your Message" required />
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;





import { useState } from "react";
import "../allcss/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("❌ Please fill all details");
      return;
    }

    const whatsappMessage = `
📩 *New Contact Message*

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}

💬 Message:
${form.message}
    `;

    const adminNumber = "918103308023"; // 👉 apna WhatsApp number

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Contact Now</h2>
      <p className="contact-subtitle">
        Have any questions? We are happy to help you.
      </p>

      <div className="contact-box">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📞 +91 8103308023</p>
          <p>📧 support@yourstore.com</p>
          <p>📍 Bhopal, Madhya Pradesh</p>
        </div>

        {/* FORM */}
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

          <p style={{ fontSize: "12px", textAlign: "center", marginTop: "8px" }}>
            WhatsApp open hone ke baad <b>SEND</b> dabana zaroori hai
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;

