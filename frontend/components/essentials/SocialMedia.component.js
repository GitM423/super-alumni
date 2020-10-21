import Link from "next/link";

const SocialMedia = () => (
  <div id="SocialMedia">
    <ul className="SocialMediaIcon SocialMediaIcon2">
      <li>
        <Link href="https://www.facebook.com/supercodegmbh/">
          <a className="fa fa-facebook"></a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="fa fa-envelope-o"></a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="fa fa-instagram"></a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

      .SocialMediaIcon {
        display: flex;
        align-items: center;
        // padding: 40px 0;
        margin-top: 6em;
        list-style: none;
      }

      .SocialMediaIcon li {
        list-style: none;
        text-decoration: none;
      }
      .SocialMediaIcon li:nth-child(2) {
        padding: 0 20px;
      }

      .SocialMediaIcon .fa {
        font-size: 30px;
        text-align: center;
        text-decoration: none;
      }
      .SocialMediaIcon .fa:hover {
        opacity: 0.5;
      }
      .SocialMediaIcon .fa-facebook {
        -webkit-text-stroke: 1px #000;
        color: #fff;
      }

      .SocialMediaIcon .fa-instagram {
        -webkit-text-stroke: 1px #000;
        color: #fff;
      }
      .SocialMediaIcon .fa-envelope-o {
        -webkit-text-stroke: 1px #000;
        color: #fff;
        font-size: 28px;
      }

      @media (min-width: 320px) and (max-width: 767px) {
        .SocialMediaIcon {
          // transform: rotate(-90deg);
          // margin-right: -45px;
          display: flex;
          justify-content: space-evenly;
        }
        .SocialMediaIcon .fa {
          font-size: 20px;
        }
        .SocialMediaIcon li {
          margin: 0 2%;
        }
        .SocialMediaIcon li:nth-child(2) {
          padding: 0;
        }
      }
    `}</style>
  </div>
);
export default SocialMedia;
