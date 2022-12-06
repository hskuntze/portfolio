import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  useEffect(() => {
    const menu = document.getElementById('home-main');
    const infos = document.getElementsByClassName('home-menu-info');

    Array.from(document.getElementsByClassName('home-link')).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
          infos[index].style.display = 'block';
        };

        item.onmouseout = () => {
          infos[index].style.display = 'none';
        };
      }
    );
  }, []);

  return (
    <main id="home-main" className="bg-primary">
      <div id="home-menu">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/aboutMe" className="home-link">
          About me
        </Link>
        <Link to="/projects" className="home-link">
          Projects
        </Link>
        <a
          href="https://github.com/hskuntze"
          alt="Link para o GitHub"
          className="home-link"
        >
          GitHub
        </a>
      </div>
      <div id="background-menu-img"></div>
      <div className="vl"></div>
      <div className="home-menu-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        reprehenderit obcaecati voluptates non ut qui officiis, ea quae ipsam
        eum, sequi maxime consequuntur. Libero, officiis!
      </div>
      <div className="home-menu-info">
        Vestibulum eget accumsan felis. Integer pulvinar lorem vel augue
        posuere, in ullamcorper leo faucibus. Donec a ante in urna laoreet
        dictum eget nec justo. Pellentesque.
      </div>
      <div className="home-menu-info">
        Phasellus non tempus sem. Mauris lacinia pulvinar hendrerit. Proin metus
        leo, tempus in lectus a, aliquet bibendum arcu. Nunc tincidunt nec justo
        eget pellentesque. Praesent.
      </div>
      <div className="home-menu-info">
        Etiam tellus ipsum, consectetur sed tincidunt nec, rutrum ac sapien.
        Suspendisse urna nunc, feugiat vel ipsum at, aliquet porttitor ipsum.
        Fusce accumsan eros sed blandit.
      </div>
    </main>
  );
};

export default Home;
