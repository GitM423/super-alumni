import Header from "../components/essentials/Header.component";
import ScrollArrow from "../components/essentials/ScrollArrow.component";
import SocialMedia from "../components/essentials/SocialMedia.component";

const Home = () => {
  return (
    <div>
      {/* Home Seite / Landing Page 1 */}
      <Header />
      <section id="Home">
        <article className="HomeSuperAlumni">
          <img src="/superAlumni1.svg" alt="" />
          <img src="/superAlumni2.svg" alt="" />
          <img src="/superAlumni3.svg" alt="" />
        </article>

        <article className="SuperAlumniText">
          <h1>super alumni</h1>
          <h3>
            Army had half a day. Bad news. Andy Griffith <br /> turned us down.
            He didn't like his trailer.
          </h3>
        </article>

        <article className="ScrollForMore">
          <div className="MadeBySuperAlumni">
            <p>Made By Super Almuni</p>
          </div>
          <div>
            <ScrollArrow />
          </div>
          <div>
            <SocialMedia />
          </div>
        </article>
      </section>
      {/* Hero Seite / Landing Page 2 */}
      <section id="Hero">
        <article className="HeroArticle">
          <div className="HeroAbout">
            <p>01</p>
            <a href="">About</a>
            <img className="ImageAboutHover1" src="/01.png" alt="" />
          </div>
          <div className="HeroSuper">
            <p>02</p>
            <a href="">Super Alumni</a>
            <img className="ImageSuperHover2" src="/02.png" alt="" />
          </div>
          <div className="HeroUnternehmen">
            <p>03</p>
            <a href="">Unternehmen</a>
            <img className="ImageUnternehmenHover3" src="/03.png" alt="" />
          </div>
          <div className="HeroContact">
            <p>04</p>
            <a href="">Contact us</a>
          </div>
        </article>
        {/* Hero Email us */}
        <article className="HeroEmailUs">
          <p>Email us, we need a coffee</p>
          <div className="HeroLine"></div>
        </article>
        <SocialMedia />
      </section>

      <style jsx>
        {`
          #Home {
            font-family: "neue-machina-light", sans-serif;
            background: linear-gradient(
                  90deg,
                  rgb(3, 0, 15) 68.3333px,
                  transparent 1%
                )
                0% 0% / 69.3333px 69.3333px,
              linear-gradient(rgb(3, 0, 15) 68.3333px, transparent 1%),
              rgb(255, 255, 255);

            background-size: 69.3333px 69.3333px;
            height: 90vh;
          }
          .HomeSuperAlumni {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            position: absolute;
            top: 20%;
            left: 21%;
            // transform: translate(-60%, -50%);
          }
          .HomeSuperAlumni img:nth-child(2) {
            margin-top: -3%;
          }
          .HomeSuperAlumni img:nth-child(3) {
            margin-top: -3%;
          }
          .SuperAlumniText {
            position: absolute;
            top: 40%;
            left: 24%;
            // transform: translate(-50%, -50%);
          }
          .SuperAlumniText > h1 {
            color: rgba(61, 215, 172, 1);
            font-size: 100px;
            font-weight: bold;
            letter-spacing: 2.5px;
          }
          .SuperAlumniText > h3 {
            color: #fff;
            font-weight: 500;
            line-height: 38px;
            font-size: 24px;
            letter-spacing: 2.5px;
            text-align: center;
          }
          .ScrollForMore {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            padding: 500px 50px 0 50px;
            // position: absolute;
            // bottom: -5%;
            // left: 50%;
            // transform: translate(-50%, -50%);
          }
          .ScrollForMore > p {
            font-size: 13px;
          }
          .MadeBySuperAlumni {
            margin-left: -80px;
            transform: rotate(-90deg);
          }

          #Hero {
            height: 150vh;
            background-color: #fff;
            font-family: "neue-machina-light", sans-serif;
            margin-left: 200px;
          }
          .HeroArticle {
            padding: 100px 0 0 25px;
            font-weight: 600;
          }
          .HeroArticle div {
            padding: 40px 0;
          }
          .HeroArticle p {
            font-size: 15px;
            font-weight: 100;
            transform: rotate(-90deg);
          }
          .HeroArticle a {
            // padding-left: 10px;
            text-decoration: none;
            color: #000;
            font-size: 80px;
            font-family: "neue-machina-light", sans-serif;
          }

          .ImageAboutHover1 {
            height: 500px;
            width: 400px;
            object-fit: cover;
            position: absolute;
            right: 50px;
            // top: 90%;
            display: none;
          }
          .HeroAbout a:hover + .ImageAboutHover1 {
            display: block;
          }
          .ImageSuperHover2 {
            height: 500px;
            width: 400px;
            object-fit: cover;
            position: absolute;
            right: 50px;
            top: 130%;
            display: none;
          }
          .HeroSuper a:hover + .ImageSuperHover2 {
            display: block;
          }

          .ImageUnternehmenHover3 {
            height: 500px;
            width: 400px;
            object-fit: cover;
            position: absolute;
            right: 50px;
            top: 150%;
            display: none;
          }
          .HeroUnternehmen a:hover + .ImageUnternehmenHover3 {
            display: block;
          }

          .HeroArticle a:hover {
            color: #fff;
            font-weight: 100;
            -webkit-text-stroke: 2px rgba(61, 215, 172, 1);
            transition: 0.4s;
          }
          .HeroAbout {
            display: flex;
          }
          .HeroSuper {
            display: flex;
          }
          .HeroUnternehmen {
            display: flex;
          }
          .HeroContact {
            display: flex;
          }

          .HeroEmailUs {
            margin: 50px 0 0 0;
            max-width: 220px;
          }
          .HeroEmailUs .HeroLine {
            width: 220px;
            height: 2px;
            background-color: #000;
            margin-top: 20px;
          }
        `}
      </style>
      {/* GLOBAL STYLE */}
      <style jsx global>{``}</style>
    </div>
  );
};
export default Home;
