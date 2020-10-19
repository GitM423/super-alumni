import Header from "../components/essentials/Header.component";

import ScrollArrow from "../components/essentials/ScrollArrow.component";

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

        <ScrollArrow />
        {/* <article className="arrow">
          <p>SCROLL FOR MORE</p>
        </article> */}
      </section>
      {/* Hero Seite / Landing Page 2 */}
      <section id="Hero">
        <article className="HeroArticle">
          <div className="HeroAbout">
            <p>01</p>
            <a href="">About</a>
          </div>
          <div className="HeroSuper">
            <p>02</p>
            <a href="">Super Alumni</a>
          </div>
          <div className="HeroUnternehmen">
            <p>03</p>
            <a href="">Unternehmen</a>
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
      </section>

      <style jsx>
        {`
          #Home {
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
            // position: relative;
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
          .SuperAlumniText {
            position: absolute;
            top: 45%;
            left: 26%;
            // transform: translate(-50%, -50%);
            font-family: "neue-machina-regular", sans-serif;
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
          .arrow {
            color: #fff;
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .arrow > p {
            font-size: 15px;
          }

          #Hero {
            height: 150vh;
            background-color: #fff;
          }
          .HeroArticle {
            padding: 100px 0 0 250px;
            font-family: "neue-machina-regular", sans-serif;
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
            padding-left: 10px;
            text-decoration: none;
            color: #000;
            font-size: 80px;
            font-family: "neue-machina-light", sans-serif;
          }
          .HeroArticle a:hover {
            color: #fff;
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
            margin: 50px 0 0 200px;
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
