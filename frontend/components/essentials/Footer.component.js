const Footer = () => {
  return (
    <footer>
      <ul className="HeroFooter">
        <li>super(code)</li>
        <li>© 2002 - 2020</li>
      </ul>
      <style jsx>{`
        .HeroFooter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #000;
          padding: 0 5%;
          height: 10vh;
          list-style: none;
          font-family: "neue-machina-light", sans-serif;
        }
        .HeroFooter li:nth-child(1) {
          color: #fff;
          font-size: 25px;
        }
        .HeroFooter li:nth-child(2) {
          color: rgba(61, 215, 172, 1);
        }

        @media (min-width: 320px) and (max-width: 767px) {
          .HeroFooter li:nth-child(1) {
            color: #fff;
            font-size: 12px;
          }
          .HeroFooter li:nth-child(2) {
            color: rgba(61, 215, 172, 1);
            font-size: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
