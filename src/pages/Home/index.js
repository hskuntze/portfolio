import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MusikLogo from '../../assets/images/musik-logo.svg';
import BulletJournalLogo from '../../assets/images/bullet-journal-logo.svg';
import HKLearnLogo from '../../assets/images/hklearn-logo.svg';
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
          menu.dataset.activeIndex = -1;
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
          GitHub <i className="bi bi-github" id="github-icon" />
        </a>
      </div>
      <div id="background-menu-img"></div>
      <div className="vl"></div>
      <div className="home-menu-info">
        Bem-vindo(a) ao meu portfólio! Aqui se encontram alguns dos meus
        projetos favoritos. Sempre em busca pelo moderno, inclusivo e elegante.{' '}
        <div className="hr"></div> Welcome to my portfolium! Here you'll find
        some of my favorite projects. Always looking for whats modern, inclusive
        and elegant.
      </div>
      <div className="home-menu-info">
        <q>
          ... sou bem confiante na minha capacidade de aprender e de se
          interessar pelo o que há de novo no mercado. Ainda em busca de
          oportunidades, tenho dedicado muito do meu tempo aos estudos de
          especialização em ferramentas populares como o React e Vue.js para o
          front-end, mas também me especializando nas ferramentas de back-end
          como o ecossistema Spring.
        </q>
        <div className="hr"></div>
        <q>
          ... i'm pretty confident in my learning capacity and to be interested
          in whats new on the market. Yet looking for opportunities i've been
          dedicating most of my time to specialize in popular tools like React
          and Vue.js on the front-end, as well as back-end tools like the Spring
          ecosystem.
        </q>
      </div>
      <div className="home-menu-info">
        <div className="fake-carousel">
          <div className="left-item">
            <span>Musik</span>
            <img src={MusikLogo} alt="logotipo do aplicativo musik" />
          </div>
          <div className="center-item">
            <span>The Bullet Journal</span>
            <img
              src={BulletJournalLogo}
              alt="logotipo do aplicativo bullet journal"
            />
          </div>
          <div className="right-item">
            <span>HKLearn</span>
            <img src={HKLearnLogo} alt="logotipo do aplicativo hk learn" />
          </div>
        </div>
        <span>Alguns dos meus principais projetos</span>
        <div className="hr"></div>
        <span>Some of my main projects</span>
      </div>
      <div className="home-menu-info">
        Confira todos os meus projetos no GitHub
        <div className="hr"></div>
        Check out all of my projects at GitHub
      </div>
    </main>
  );
};

export default Home;
