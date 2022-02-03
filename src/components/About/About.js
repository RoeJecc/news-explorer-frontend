import aboutimg from "../../images/aboutimg.png";

function About() {
  return (
    <section className="about">
      <img className="about__image" alt="About Image" src={aboutimg} />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          This block describes Joe. Here I will indicate my name, that I am an
          aspiring web developer, and which development techniques I know.
        </p>
        <p className="about__paragraph">
          These development techniques include but are not limited to techniques
          displayed in this here application.
        </p>
      </div>
    </section>
  );
}

export default About;
