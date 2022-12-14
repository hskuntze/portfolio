import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav id="navbar-custom">
      <div className="navbar-header">
        <NavLink to="/">
          <h4>Hassan Kuntze</h4>
        </NavLink>
        <ul className="navbar-links">
          <NavLink to="/aboutMe">
            <li className="navbar-link">About me</li>
          </NavLink>
          <NavLink to="/projects">
            <li className="navbar-link">Projects</li>
          </NavLink>
          <a
            href="https://github.com/hskuntze"
            target={'_blank'}
            rel="noreferrer"
          >
            <li className="navbar-link">
              GitHub{' '}
              <i className="bi bi-github" style={{ marginLeft: '4px' }} />
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
