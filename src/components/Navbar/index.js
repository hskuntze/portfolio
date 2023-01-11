import { Tooltip } from 'bootstrap';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const tooltipRef = useRef();
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title: 'Existe um menu aqui também! :)',
      placement: 'bottom',
      trigger: 'manual',
      offset: [0, 5],
    });

    if (showTooltip) {
      tooltip.show();
    }

    const navLinkHeader = document.getElementById('navbar-header-link');
    navLinkHeader.onmouseout = () => {
      tooltip.hide();
      setShowTooltip(false);
    };

    navLinkHeader.addEventListener('hidden.bs.tooltip', () => {
      tooltip.hide();
    });

    Array.from(document.getElementsByClassName('tooltip')).forEach(
      (item, index) => {
        item.onclick = () => {
          tooltip.hide();
        }
      }
    );
  }, [showTooltip]);

  return (
    <nav id="navbar-custom">
      <div className="navbar-header">
        <NavLink
          to="/"
          className={'navbar-header-link'}
          ref={tooltipRef}
          id="navbar-header-link"
        >
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
