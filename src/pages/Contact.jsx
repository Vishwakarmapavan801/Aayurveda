import "../allcss/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent Successfully");
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
          <p>📞 +91 9876543210</p>
          <p>📧 support@yourstore.com</p>
          <p>📍 Bhopal, Madhya Pradesh</p>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Mobile Number" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
