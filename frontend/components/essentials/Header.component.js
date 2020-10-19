const Header = () => (
  <header id="Header">
    <h2>super(code)</h2>
    <div id="menuToggle">
      <img id="MenuButtonImg" src="/MenuButton.svg" alt="" />
      {/* <ul id="menu">
        <a href="#">
          <li>Login</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul> */}
    </div>

    <style jsx>{`
      * {
        padding: 0;
        margin: 0;
      }
      #Header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #000;
      }
      #Header h2 {
        color: white;
        font-family: "neue-machina-light", sans-serif;
      }
      #menu {
        position: absolute;
        width: 50vw;
        height: 100vh;
        margin: -70px 0px 0 0;
        padding-top: 300px;
        right: 0px;
        background: #edc;
        // opacity: 0.5;
        list-style-type: none;
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      }

      #menu li {
        text-align: center;
        padding: 30px 0;
        font-size: 22px;
      }
      #menu a {
        text-decoration: none !important;
        color: #232323;
        transition: color 0.3s ease;
      }
      #menu a:hover {
        color: #2ecc71;
      }

      #menuToggle ~ ul {
        transform: scale(1, 1);
        opacity: 1;
      }
    `}</style>
  </header>
);
export default Header;
