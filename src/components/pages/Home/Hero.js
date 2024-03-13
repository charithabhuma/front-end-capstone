import "./Hero.css";
import { Link } from "react-router-dom";
import pages from "../../../constants/Pages";
import heroImage from "../../../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid hero-grid">
        <div className="hero-info">
          <h1>Little lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={pages["reservations"].path}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={heroImage} alt="hero Image" />
      </div>
    </section>
  );
};

export default Hero;
