import './styles.css';
import TestImg from '../../assets/images/galaxy.png';
import FaceImg from '../../assets/images/Screenshot_83.png';
import GuitarImg from '../../assets/images/Screenshot_84.png';

const About = () => {
  return (
    <main id="about-main">
      <div id="about-content">
        <section className="section">
          <div className="first-section">
            <div className="div-img">
              <img src={FaceImg} alt="alt text" />
            </div>
            <span className="section-info">
              Olá! Me chamo Hassan Kuntze Rodrigues da Cunha, tenho 23 anos, e
              sou natural de Brasília, Distrito Federal. Sou um grande admirador
              da tecnologia, música e filosofia. Me formei em Análise e
              Desenvolvimento de Sistemas pela Universidade do Distrito Federal
              &#40;UDF&#41; em agosto de 2022. No mesmo mês iniciei minha
              pós-graduação em Engenharia de Software com Java pelo institudo
              INFNET. Pretendo continuar minha especialização no modelo
              fullstack atuando com Java no back-end e Javascript no front-end.
              <div className="hr"></div>
              Hi! I'm Hassan Kuntze Rodrigues da Cunha, 23 years old, born in
              Brasília, Distrito Federal, Brazil. I'm a big fan of technology,
              music and philosophy. I graduated in Analysis and Systems
              Development, an IT course here in Brazil, at the Universidade do
              Distrito Federal &#40;UDF&#41; in august of 2022. In the same
              month i started a graduate course in Software Engineering with
              Java by the INFNET institute. I intend to persue my specialization
              in the fullstack model employing Java in the back-end and
              Javascript in the front-end.
            </span>
          </div>
        </section>
        <section className="section">
          <div className="second-section">
            <div className="div-img">
              <img src={TestImg} alt="alt text" />
            </div>
            <span className="section-info">
              Minha primeira experiência profissional na área de TI teve inicio
              na ANATEL, na área de Big Data com a ferramenta QlikSense. Após
              cerca de 4 meses me desliguei do estágio por problemas contratuais
              e segui no estudo de desenvolvimento back-end com cursos focados
              no Java e no ecossistema Spring. Em setembro de 2021 iniciei um
              estágio no Ministério da Cidadania e lá pude expandir as minhas
              habilidades no front-end desenvolvendo protótipos de telas com
              Bootstrap, HTML, CSS e Javascript. Enquanto isso, continuei
              estudando back-end através de um bootcamp ministrado pelo
              instituto DevSuperior, focando no ecossistema Spring. Logo em
              seguida iniciei outro bootcamp, pelo mesmo instituto, mas focando
              no front-end com o framework ReactJS. Depois de 8 meses de
              estágio, em abril de 2022, fui indicado para uma bolsa de estudos
              para pesquisa e desenvolvimento atendendo a demandas do Ministério
              da Cidadania, mas como desenvolvedor front-end utilizando o
              ReactJS e o Vue.JS para a criação das aplicações, pela
              Universidade de Brasília.
              <div className="hr"></div>
              My first professional experience in the IT field started at
              ANATEL, one of many federal public administration institutes, in
              the Big Data area using QlikSense. About four months later i had
              to finish my internship because of contractual issues and moved on
              to studying back-end courses focused on Java and the Spring
              ecosystem. In september 2021 i began a internship at the
              Ministério da Cidadania, an government organ of executive power,
              and there i could improve my front-end skills by developing screen
              prototypes using Bootstrap, HTML, CSS and Javascript. Meanwhile i
              continued studying back-end topics through a bootcamp ministred by
              the DevSuperior institute and focusing on the Spring ecosystem. As
              soon as i finished this bootcamp i began another one but
              emphasizing the front-end with the ReactJS framework. After 8
              months of internship, in april 2022, i was indicated to a research
              and development scholarship meeting demands by the Ministério da
              Cidadania through the Universidade de Brasília &#40;UnB&#41;, as a
              front-end developer using ReactJS and Vue.JS.
            </span>
          </div>
        </section>
        <section className="section">
          <div className="third-section">
            <div className="div-img">
              <img src={GuitarImg} alt="alt text" />
            </div>
            <span className="section-info">
              Além do meu interesse na área da tecnologia, me reconheço como um
              apaixonado na música, principalmente se tratando de composições
              clássicas da MPB. Filosofia, música, fotografia, ficção científica
              e astronomia são alguns dos meus tópicos favoritos. Me considero
              curioso e genuinamente interessado no estudo, seja ele no campo da
              TI, seja na música etc. e sou bem confiante na minha capacidade de
              aprender e de se interessar pelo o que há de novo no mercado.
              Ainda em busca de oportunidades, tenho dedicado muito do meu tempo
              aos estudos de especialização em ferramentas populares como o
              React e Vue.js para o front-end, mas também me especializando nas
              ferramentas de back-end como o ecossistema Spring.
              <div className="hr"></div>
              Beyond my interest in the technology field, i recognize myself as
              a music enthusiast, even more when the subject is classic
              compositions of the MPB &#40;Brazilian Popular Music&#41;.
              Philosophy, music, photography, science fiction and astronomy are
              my favorite subjects. I consider myself a curious type of person,
              genuinely interested by the act of studying, whether it be in the
              IT field, music etc. and i'm pretty confident in my learning
              capacity and to be interested in whats new on the market. Yet
              looking for opportunities i've been dedicating most of my time to
              specialize in popular tools like React and Vue.js on the
              front-end, as well as back-end tools like the Spring ecosystem.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
