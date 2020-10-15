import Header from "../components/essentials/Header.component";
import Contact from "../components/home/Contact.component";

const index = () => {
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

        <article className="arrow">
          <p>SCROLL FOR MORE</p>
        </article>
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

      <Contact />

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
      <style jsx global>{`
        @font-face {
          font-family: "neue-machina-light";
          src: url("/font/neue-machina-light.otf") format("opentype");
        }
        @font-face {
          font-family: "neue-machina-regular";
          src: url("/font/neue-machina-regular.otf") format("opentype");
        }
        /* font-family: "neue-machina-light", sans-serif;
        font-family: "neue-machina-regular", sans-serif; */

        html {
          scroll-behavior: smooth;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .btn {
          font-family: "neue-machina-regular", sans-serif;
          padding: 10px 40px;
          display: inline-block;
          text-decoration: none;
          text-align: center;
          transition: top 0.5s linear 0s, box-shadow 0.5s linear 0s, left 0.5s linear 0s;
          min-width: 200px;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .contact-btn {
          width: 100px;
          border: 4px solid white;
          background: none;
          color: white;
          text-transform: uppercase;
        }
        .contact-btn:hover {
          box-shadow: white -5px 5px 0px 0px;
          top: -5px;
          left: 5px;
        }
        .btn-black {
          background: #000000;
          color: #3dd7ac;
          border: 3px solid #3dd7ac;
          text-transform: uppercase;
        }
        .btn-black:hover {
          box-shadow: #3dd7ac -5px 5px 0px 0px;
          top: -5px;
          left: 5px;
        }
        .btn-green {
          background: #3dd7ac;
          color: white;
          border: 3px solid #000000;
          text-transform: uppercase;
        }
        .btn-green:hover {
          box-shadow: #000000 -5px 5px 0px 0px;
          top: -5px;
          left: 5px;
        }
        .btn-purple {
          background: #5d3ede;
          color: white;
          border: 3px solid white;
          outline: none;
          text-transform: uppercase;
        }
        .btn-purple:hover {
          box-shadow: white -5px 5px 0px 0px;
          top: -5px;
          left: 5px;
        }
        .fade {
          transition: all 0.5s;
        }
        .fade:hover {
          color: #5d3ede;
          background: white;
          border: 3px solid #5d3ede;
          box-shadow: none;
        }
        .login-btn {
          border: none;
          border-radius: 5px;
          color: white;
          padding: 13px 20px;
          min-width: 300px;
          height: 45px;
          font-size: 0.9em;
          transition: all 0.5s;
        }
        .green-login {
          background: #04c35c;
          border: 2px solid #04c35c;
        }
        .green-login:hover {
          color: #04c35c;
          background: white;
          border: 2px solid #04c35c;
        }
        .google-btn {
          color: white;
          background: #2d3748;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #2d3748;
        }
        .google-btn:hover {
          background: white;
          color: #2d3748;
          border: 2px solid #2d3748;
        }
        .google-btn img {
          padding-right: 0.5em;
        }
        .filter-tag {
          display: inline-block;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
          border: 1px solid #99879d;
          color: #99879d;
        }
        .filter-tag:hover {
          background: #99879d80;
          color: #ffffff;
          cursor: pointer;
        }
        .filter-tag-active {
          background: #99879d;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};
export default index;
