import Header from "../components/essentials/Header.component";
import ScrollArrow from "../components/essentials/ScrollArrow.component";
import SocialMedia from "../components/essentials/SocialMedia.component";
import Footer from "../components/essentials/Footer.component";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      {/* Home Seite / Landing Page 1 */}
      <Header />
      <section id="Home">
        <article></article>

        <article className="SuperAlumniText">
          <div className="HomeSuperAlumni">
            <img src="/superAlumni1.svg" alt="" />
            <img src="/superAlumni2.svg" alt="" />
            <img src="/superAlumni3.svg" alt="" />
          </div>
          <h1>super alumni</h1>
          <h3>
            Join alumni, members and friends of the SuperCode community.
            <br />
            Sign up today, make a profile and stay in touch!
          </h3>
        </article>

        <article className="ScrollForMore">
          <div className="MadeBySuperAlumni">
            <p>Made By Super Almuni</p>
          </div>
          <div>
            <ScrollArrow />
          </div>
          <div className="SocialMediaHome">
            <SocialMedia />
          </div>
        </article>
      </section>
      {/* Hero Seite / Landing Page 2 */}
      <section id="Hero">
        <article className="HeroArticle">
          <div className="HeroAbout">
            <p>01</p>
            <Link href="">
              <a> About</a>
            </Link>
            <img className="ImageAboutHover1" src="/about.png" alt="" />
          </div>
          <div className="HeroSuper">
            <p>02</p>
            <Link href="/pool">
              <a>Super Alumni</a>
            </Link>
            <img
              className="ImageSuperHover2"
              src="/superalumnipool.png"
              alt=""
            />
          </div>
          <div className="HeroUnternehmen">
            <p>03</p>
            <Link href="/pool">
              <a>Unternehmen</a>
            </Link>
            <img
              className="ImageUnternehmenHover3"
              src="/orderpool.png"
              alt=""
            />
          </div>
          <div className="HeroContact">
            <p>04</p>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </div>
        </article>
        {/* Hero Email us */}
        <article className="HeroEmailUs">
          <p>Email us, we need a coffee</p>
          <div className="HeroLine"></div>
        </article>
        <div className="SocialBottom">
          <SocialMedia />
        </div>
      </section>
      <Footer />
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
            padding-top: 10vh;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
          .HomeSuperAlumni {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            // padding-right: 20em;
            // margin-bottom: -4rem;
            position: absolute;
            top: -50%;
            left: -5.5%;
          }
          .HomeSuperAlumni img:nth-child(2) {
            margin-top: -3%;
          }
          .HomeSuperAlumni img:nth-child(3) {
            margin-top: -3%;
          }
          .SuperAlumniText {
            position: relative;
            // position: absolute;
            // top: 40%;
            // left: 25%;
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
            font-size: 17px;
            letter-spacing: 2.5px;
            text-align: center;
            padding-top: 1em;
          }
          .ScrollForMore {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            margin-bottom: 3%;
          }
          .MadeBySuperAlumni > p {
            font-size: 13px;
          }
          .MadeBySuperAlumni {
            margin-left: -80px;
            transform: rotate(-90deg);
          }

          #Hero {
            min-height: 130vh;
            background-color: #fff;
            font-family: "neue-machina-light", sans-serif;
            margin-left: 200px;
            margin-bottom: 50px;
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
            width: 40%;
            position: absolute;
            right: 50px;
            // top: 90%;
            display: none;
          }
          .HeroAbout a:hover + .ImageAboutHover1 {
            display: block;
          }
          .ImageSuperHover2 {
            width: 40%;
            position: absolute;
            right: 50px;
            top: 130%;
            display: none;
          }
          .HeroSuper a:hover + .ImageSuperHover2 {
            display: block;
          }

          .ImageUnternehmenHover3 {
            width: 40%;
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

          /* tablet */
          @media (min-width: 768px) and (max-width: 1024px) {
            .HomeSuperAlumni {
              // top: 23.5%;
              // left: 17%;
            }
            .HomeSuperAlumni img:nth-child(1) {
              width: 75%;
            }
            .HomeSuperAlumni img:nth-child(2) {
              width: 75%;
            }
            .HomeSuperAlumni img:nth-child(3) {
              width: 82%;
            }
            .SuperAlumniText {
              // left: 21%;
              // top: 39%;
            }
            .SuperAlumniText > h1 {
              font-size: 80px;
            }
            .SuperAlumniText > h3 {
              font-weight: 500;
              line-height: 38px;
              font-size: 13px;
              letter-spacing: 2.5px;
              text-align: center;
            }

            #Hero {
              margin-left: 100px;
            }

            .HeroArticle a {
              font-size: 60px;
            }
          }

          /* mobile */
          @media (min-width: 320px) and (max-width: 767px) {
            .HomeSuperAlumni {
              // top: 28%;
              // left: 17%;
            }
            .HomeSuperAlumni img:nth-child(1) {
              width: 75%;
            }
            .HomeSuperAlumni img:nth-child(2) {
              width: 75%;
            }
            .HomeSuperAlumni img:nth-child(3) {
              width: 82%;
            }
            .SuperAlumniText {
              // left: 19%;
              // top: 34%;
            }
            .SuperAlumniText > h1 {
              font-size: 30px;
            }
            .SuperAlumniText > h3 {
              font-size: 0.6em;
              max-width: 240px;
              text-align: center;
            }
            .MadeBySuperAlumni p {
              font-size: 11px;
            }
            #Hero {
              margin-left: 20px;
              // display: none;
            }
            .HeroArticle {
              // display: none;
            }
            .HeroArticle a {
              font-size: 30px;
            }
            .HeroArticle p {
              font-size: 10px;
              transform: rotate(-90deg);
            }
            .HeroEmailUs {
              margin: 20px 0 0 20px;
              font-size: 12px;
            }
            .HeroEmailUs .HeroLine {
              width: 160px;
            }
            .SocialMediaIcon {
              // transform: rotate(-90deg);
              // margin-right: -45px;
              background: red;
            }
            .SocialMediaIcon .fa {
              font-size: 15px;
              transform: rotate(90deg);
            }
            .SocialMediaHome {
              display: none;
            }
            .ScrollForMore {
              display: block;
            }
            .MadeBySuperAlumni {
              position: absolute;
              top: 85%;
              transform: rotate(-90deg);
            }
          }
        `}
      </style>
      {/* GLOBAL STYLE */}
      <style jsx global>{``}</style>
    </div>
  );
};
export default Home;
