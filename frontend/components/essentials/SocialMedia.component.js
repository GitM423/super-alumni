const SocialMedia = () => (
  <div id="SocialMedia">
    <ul className="SocialMediaIcon">
      <li>
        <a href="#" className="fa fa-facebook"></a>
      </li>
      <li>
        <a href="#" className="fa fa-google"></a>
      </li>
      <li>
        <a href="#" className="fa fa-instagram"></a>
      </li>
    </ul>

    <style jsx>{`
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

      .SocialMediaIcon {
        display: flex;
        margin-left: 220px;
        padding: 40px 0;
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
      .SocialMediaIcon .fa-google {
        -webkit-text-stroke: 1px #000;
        color: #fff;
      }
    `}</style>
  </div>
);
export default SocialMedia;
