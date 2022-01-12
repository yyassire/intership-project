import "./hero.scss";
import Icon from "../../assets/undraw_newspaper_k-72-w.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-wrapper">
        <h3 className="hero-text">
          World's <br />
          Latest <br />
          News
        </h3>
        <div className="hero-img">
          <img src={Icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
