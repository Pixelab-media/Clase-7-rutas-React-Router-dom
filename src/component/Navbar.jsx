import { Link, NavLink } from "react-router-dom";

function Navbar() {

//el atributo que me da NavLink es isActive
    return (
      <nav>
        <Link className="link" to="/formulario">Formulario</Link>
        <Link className="link" to="/contacto">contacto</Link>
        <NavLink className={({ isActive }) => (isActive ? "navlink" : "link")} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navlink" : "link")} to="/contacto">contacto</NavLink>
      </nav>
    );
  }
  
  export default Navbar;