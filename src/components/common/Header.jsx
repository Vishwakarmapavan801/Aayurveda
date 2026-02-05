// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";

// import '../common/Header.css'

// const Header = () => {
//   return (
//     <header className="header">
      
//       {/* Left Logo (Clickable → Home) */}
//       <div className="logo">
//         <NavLink to="/">
//           <img src={logo} alt="Logo" />
//         </NavLink>
//       </div>

//       {/* Center Nav */}
//       <nav className="nav">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/product">Product</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </nav>

//       {/* Right Button */}
//       <div className="order-btn">
//         <NavLink to="/order">
//           <button>Order Now</button>
//         </NavLink>
//       </div>

//     </header>
//   );
// };

// export default Header;




import { NavLink } from "react-router-dom";
import { useState } from "react";
import { List, X } from "react-bootstrap-icons";

import logo from "../../assets/logo.png";
import "../common/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/product" onClick={() => setMenuOpen(false)}>Product</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>

      <div className="order-btn">
        <NavLink to="/order">
          <button>Order Now</button>
        </NavLink>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <List size={28} />}
      </div>

    </header>
  );
};

export default Header;

