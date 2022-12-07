import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav id="navbar-custom">
      <div className="navbar-header">
        <NavLink to="/">
          <h4>Hassan Kuntze</h4>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
