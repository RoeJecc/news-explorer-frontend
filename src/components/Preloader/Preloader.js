import preloaderimg from "../../images/preloader.png";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <img src={preloaderimg} className="preloader__image" alt="preloader" />
        <p className="preloader__text">Searching for the news...</p>
      </div>
    </section>
  );
}

export default Preloader;
