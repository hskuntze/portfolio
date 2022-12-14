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

const Projects = () => {
  return (
    <main id="projects-main">
      <div id="projects-content">
        {/* The Bullet Journal */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="up-left">
                <img src={BulletJournalLogo} alt="logotipo bullet journal" />
                <a
                  href="https://bullet-journal-frontend.herokuapp.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Acesse
                </a>
              </div>
              <div className="down-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis architecto, doloremque rem voluptates eos unde
                molestiae.
                <div className="hr"></div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident deleniti perspiciatis odit? Iusto aperiam aliquid
                earum? Pariatur ex ab atque.
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
              <div className="up-left">
                <img src={MusikLogo} alt="logotipo musik" />
                <a href="www.google.com" target={'_blank'} rel="noreferrer">
                  Acesse
                </a>
              </div>
              <div className="down-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                ea sapiente vero!
                <div className="hr"></div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti facilis vero est temporibus sequi nesciunt distinctio
                dolor incidunt praesentium? Velit id reiciendis eligendi itaque.
              </div>
            </div>
            <div className="right-side-info">{/* Carousel */}</div>
          </div>
        </section>

        {/* HKLearn */}
        <section className="section">
          <div className="project-info">
            <div className="left-side-info">
              <div className="up-left">
                <img src={HKLearnLogo} alt="logotipo hk learn" />
                <a
                  href="https://hklearn.herokuapp.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Acesse
                </a>
              </div>
              <div className="down-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                deleniti alias tenetur molestias neque velit soluta mollitia
                temporibus!
                <div className="hr"></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                itaque at amet sunt impedit necessitatibus non alias fugit enim?
                A atque necessitatibus at nulla eum!
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
              <div className="up-left">
                <img src={KuntzeVendasLogo} alt="logotipo kuntze vendas" />
                <a
                  href="https://kuntzevendas.netlify.app/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Acesse
                </a>
              </div>
              <div className="down-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, molestias labore. Quas laborum voluptatem harum hic
                nesciunt quaerat excepturi?
                <div className="hr"></div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt dolor earum quae, voluptates reiciendis quaerat! Porro
                ipsam necessitatibus vel quam at incidunt.
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
              <div className="up-left">
                <img src={HKCatalogLogo} alt="logotipo hk catalog" />
                <a
                  href="https://hkcatalog.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acesse
                </a>
              </div>
              <div className="down-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                expedita error dolore a, sapiente et eaque nostrum neque cum
                aliquam consequuntur velit hic quis? Eligendi quasi voluptatum
                velit!
                <div className="hr"></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestias saepe quod eligendi velit commodi doloribus, sint
                recusandae, facilis non eum id? Incidunt, optio autem?
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
