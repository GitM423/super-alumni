<<<<<<< HEAD
import Header from "../components/essentials/Header.component";
import Contact from "../components/home/Contact.component";
import Footer from "../components/essentials/Footer.component";
import SocialMedia from "../components/essentials/SocialMedia.component";
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
        {/* Headline Super Alumni */}
        <article className="SuperAlumniText">
          <h1>super alumni</h1>
          <h3>
            Army had half a day. Bad news. Andy Griffith <br /> turned us down.
            He didn't like his trailer.
          </h3>
        </article>
        {/* Scroll Button  */}
        <article className="ScrollButton">
          <p>SCROLL FOR MORE</p>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
        <SocialMedia />
        <Footer />
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
            height: 100vh;
            overflow-x: hidden;
            font-family: "neue-machina-light", sans-serif;
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
            top: 46%;
            left: 25%;
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
          .ScrollButton {
            color: #fff;
            position: absolute;
            bottom: -10%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .ScrollButton > p {
            font-size: 15px;
          }
          .arrow {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100px;
            padding-bottom: 50px;
            margin: 25px 0 0 0;
          }
          .arrow span {
            display: block;
            width: 30px;
            height: 30px;
            border-bottom: 2px solid rgba(61, 215, 172, 1);
            border-right: 2px solid rgba(61, 215, 172, 1);
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            margin: -10px;
            -webkit-animation: animate 2s infinite;
            animation: animate 2s infinite;
          }
          .arrow span:nth-child(2) {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
          }
          .arrow span:nth-child(3) {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
          }
          @-webkit-keyframes animate {
            0% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(-20px, -20px);
              -ms-transform: rotate(45deg) translate(-20px, -20px);
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(20px, 20px);
              -ms-transform: rotate(45deg) translate(20px, 20px);
              transform: rotate(45deg) translate(20px, 20px);
            }
          }
          @keyframes animate {
            0% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(-20px, -20px);
              -ms-transform: rotate(45deg) translate(-20px, -20px);
              transform: rotate(45deg) translate(-20px, -20px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: rotate(45deg) translate(20px, 20px);
              -ms-transform: rotate(45deg) translate(20px, 20px);
              transform: rotate(45deg) translate(20px, 20px);
            }
          }
          #Hero {
            height: 141vh;
            background-color: #fff;
            font-family: "neue-machina-light", sans-serif;
          }
          .HeroArticle {
            padding: 100px 0 0 250px;
          }
          .HeroArticle div {
            padding: 40px 0;
          }
          .HeroArticle div p {
            font-size: 15px;
            font-weight: 100;
            transform: rotate(-90deg);
            color: #000;
          }
          .HeroArticle a {
            padding-left: 10px;
            text-decoration: none;
            color: #000;
            font-size: 80px;
            font-family: "neue-machina-light", sans-serif;
            font-weight: 100;
          }
          .HeroArticle a:hover {
            color: #fff;
            -webkit-text-stroke: 2px rgba(61, 215, 172, 1);
            -webkit-text-fill-color: white;
            transition: 0.6s;
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
            margin: 50px 0 0 220px;
            max-width: 220px;
            // font-family: "neue-machina-light", sans-serif;
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
        p {
          //   font-size: 20px;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
=======
import React from "react";
import Layout from "../components/Layout.component";

import HomeComponent from "../components/Home.component";

const Home = () => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
>>>>>>> ab02a773677068aee2df4ee10808ebe206cd04eb
  );
};

export default Home;
