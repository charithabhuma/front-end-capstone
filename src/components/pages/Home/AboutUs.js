import "./AboutUs.css";
import MarioAdrainA from "../../../Images/Mario and Adrian A.jpg";
import MarioAdrainB from "../../../Images/Mario and Adrian b.jpg";

const AboutUs = () => {
  return (
    <div className="container grid about">
      <div className="aboutText">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim velit
          mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="MarioAdrain">
        <img className="image1" src={MarioAdrainB} alt="Mario and Adrian B" />
        <img className="image2" src={MarioAdrainA} alt="Mario and Adrian A" />
      </div>
    </div>
  );
};

export default AboutUs;
