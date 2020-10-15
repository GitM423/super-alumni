import Header from "../components/essentials/Header.component";
const index = () => {
  return (
    <div>
      <section id="Home">
        <Header />
        <article className="HomeSuperAlumni">
          <img src="/superAlumni1.svg" alt="" />
          <img src="/superAlumni2.svg" alt="" />
          <img src="/superAlumni3.svg" alt="" />
        </article>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
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
        }
        .HomeSuperAlumni {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          position: absolute;
          left: 27%;
          padding: 150px 0 0 0;
        }
      `}</style>
    </div>
  );
};
export default index;
