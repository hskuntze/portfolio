import './styles.css';
import MusikLogo from '../../assets/images/musik-logo.svg';
import BulletJournalLogo from '../../assets/images/bullet-journal-logo.svg';
import HKLearnLogo from '../../assets/images/hklearn-logo.svg';
import HKCatalogLogo from '../../assets/images/hk-catalog-logo.svg';
import KuntzeVendasLogo from '../../assets/images/kuntze-vendas-logo.svg';

//Bullet Journal Images
import bj1 from '../../assets/images/bj1.png';
import bj2 from '../../assets/images/bj2.png';
import bj3 from '../../assets/images/bj3.png';
import bj4 from '../../assets/images/bj4.png';

//HKLearn Images
import hkl1 from '../../assets/images/hkl1.png';
import hkl2 from '../../assets/images/hkl2.png';
import hkl3 from '../../assets/images/hkl3.png';
import hkl4 from '../../assets/images/hkl4.png';
import hkl5 from '../../assets/images/hkl5.png';
import hkl6 from '../../assets/images/hkl6.png';

//KuntzeVendas Images
import kv1 from '../../assets/images/kv1.png';
import kv2 from '../../assets/images/kv2.png';

//HKCatalog Images
import hkc1 from '../../assets/images/hkc1.png';
import hkc2 from '../../assets/images/hkc2.png';
import hkc3 from '../../assets/images/hkc3.png';
import hkc4 from '../../assets/images/hkc4.png';

//Musik Images
import mk1 from '../../assets/images/mk_1.png';
import mk2 from '../../assets/images/mk_2.png';
import mk3 from '../../assets/images/mk_3.png';

const Projects = () => {
  return (
    <main id="projects-main">
      <div id="projects-content">
        {/* The Bullet Journal */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="status-alert bg-success">
                Finalizado -<span className="fst-italic">&nbsp;Finished</span>
              </div>
              <div className="up">
                <div className="up-left">
                  <a
                    href="https://bullet-journal-frontend.herokuapp.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img
                      src={BulletJournalLogo}
                      alt="logotipo bullet journal"
                    />
                  </a>
                </div>
                <div className="up-right">
                  <span>Front-end: React.js + Typescript</span>
                  <span>Back-end: Java + Spring Boot</span>
                  <span>Versionamento: GIT @ GitHub</span>
                  <span>Banco de Dados: PostgreSQL</span>
                  <span>Hospedagem: Heroku</span>
                  <span>Hospedagem de Banco de Dados: Heroku</span>
                </div>
              </div>
              <div className="down-left">
                O Bullet Journal é uma iniciativa pessoal que nasce com a
                perspectiva da importância de um controle da rotina, bem como um
                espaço pessoal.
                <div className="hr"></div>
                The Bullet Journal is a personal initiative which is born with
                the notion of importance to maintain a routine, as well as a
                personal space.
              </div>
            </div>
            <div className="right-side-info">
              <div
                id="bulletCarousel"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#bulletCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#bulletCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#bulletCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#bulletCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={bj1}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bj2}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bj3}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bj4}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#bulletCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#bulletCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Musik */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="status-alert bg-warning text-bg-warning">
                Em progresso -
                <span className="fst-italic">&nbsp;Work in progress</span>
              </div>
              <div className="up">
                <div className="up-left">
                  <a
                    href="https://kuntzeprojects-musik.netlify.app/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img src={MusikLogo} alt="logotipo musik" />
                  </a>
                </div>
                <div className="up-right">
                  <span>Front-end: React.js</span>
                  <span>Versionamento: GIT @ GitHub</span>
                  <span>Hospedagem: Netlify</span>
                </div>
              </div>
              <div className="down-left">
                O Musik é um aplicativo de transferência de músicas entre as
                plataformas "Spotify" e "YouTube".
                <div className="hr"></div>
                Musik is an app to transfer musics from one platform to another.
                It's possible to transfer musics from "Spotify" to "YouTube" and
                vice versa.
              </div>
            </div>
            <div className="right-side-info">
              <div
                id="musikCarousel"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#musikCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#musikCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#musikCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={mk1}
                      className="d-block w-100"
                      alt="imagem home musik"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={mk2}
                      className="d-block w-100"
                      alt="imagem dashboard musik"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={mk3}
                      className="d-block w-100"
                      alt="imagem seção spotify musik"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#musikCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#musikCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HKLearn */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="status-alert bg-success">
                Finalizado -<span className="fst-italic">&nbsp;Finished</span>
              </div>
              <div className="up">
                <div className="up-left">
                  <a
                    href="https://hklearn.herokuapp.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img src={HKLearnLogo} alt="logotipo hk learn" />
                  </a>
                </div>
                <div className="up-right">
                  <span>Front-end: React.js + Typescript</span>
                  <span>Back-end: Java + Spring Boot</span>
                  <span>Versionamento: GIT @ GitHub</span>
                  <span>Banco de Dados: PostgreSQL</span>
                  <span>Hospedagem: Heroku</span>
                  <span>Hospedagem de Banco de Dados: AWS <span className="text-muted fst-italic">Desabilitado</span></span>
                </div>
              </div>
              <div className="down-left">
                O HKLearn foi criado com o intuito de oferecer uma plataforma de
                cursos para entidades ou empresas que não tenham sua própria
                plataforma.
                <div className="hr"></div>
                The HKLearn was created with the goal to offer a platform for
                companys or institutions that already doesn't have one.
              </div>
            </div>
            <div className="right-side-info">
              <div
                id="hklearnCarousel"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hklearnCarousel"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={hkl1}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkl2}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkl3}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkl4}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkl5}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkl6}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#hklearnCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#hklearnCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* KuntzeVendas */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="status-alert bg-success">
                Finalizado -<span className="fst-italic">&nbsp;Finished</span>
              </div>
              <div className="up">
                <div className="up-left">
                  <a
                    href="https://kuntzevendas.netlify.app/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img src={KuntzeVendasLogo} alt="logotipo kuntze vendas" />
                  </a>
                </div>
                <div className="up-right">
                  <span>Front-end: React.js + Typescript</span>
                  <span>Back-end: Java + Spring Boot</span>
                  <span>Versionamento: GIT @ GitHub</span>
                  <span>Banco de Dados: PostgreSQL</span>
                  <span>Hospedagem Front-end: Netlify</span>
                  <span>Hospedagem Back-end: Heroku</span>
                  <span>Hospedagem de Banco de Dados: AWS <span className="text-muted fst-italic">Desabilitado</span></span>
                </div>
              </div>
              <div className="down-left">
                KuntzeVendas é um projeto de demonstração que exibe uma tela de
                dashboard reunindo vários dados que dizem respeito a um grupo
                hipotético de vendas.
                <div className="hr"></div>
                KuntzeVendas it's a demonstration project which displays a
                dashboard that gathers data from a hypothetical sales group.
              </div>
            </div>
            <div className="right-side-info">
              <div
                id="kuntzeVendasCarousel"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#kuntzeVendasCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#kuntzeVendasCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={kv1}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={kv2}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#kuntzeVendasCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#kuntzeVendasCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HK Catalog */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="status-alert bg-success">
                Finalizado -<span className="fst-italic">&nbsp;Finished</span>
              </div>
              <div className="up">
                <div className="up-left">
                  <a
                    href="https://hkcatalog.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={HKCatalogLogo} alt="logotipo hk catalog" />
                  </a>
                </div>
                <div className="up-right">
                  <span>Front-end: React.js + Typescript</span>
                  <span>Back-end: Java + Spring Boot</span>
                  <span>Versionamento: GIT @ GitHub</span>
                  <span>Banco de Dados: PostgreSQL</span>
                  <span>Hospedagem Front-end: Netlify</span>
                  <span>Hospedagem Back-end: Heroku</span>
                  <span>Hospedagem de Banco de Dados: AWS <span className="text-muted fst-italic">Desabilitado</span></span>
                </div>
              </div>
              <div className="down-left">
                HKCatalog é um aplicativo que demonstra um catálogo de produtos
                online.
                <div className="hr"></div>
                HKCatalog is an app that exhibits a online product catalog.
              </div>
            </div>
            <div className="right-side-info">
              <div
                id="hkcatalogCarousel"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#hkcatalogCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hkcatalogCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hkcatalogCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#hkcatalogCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={hkc1}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkc2}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkc3}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={hkc4}
                      className="d-block w-100"
                      alt="imagem home bullet journal"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#hkcatalogCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#hkcatalogCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
