import Button from "../../components/button";
import logo from "../../assets/Main.png";
import "./landing.css";

type LandingProps = {
  clickContinue: () => void;
};

function Landing({ clickContinue }: LandingProps) {
  return (
    <div id="landing">
      <div id="image_container">
        <img src={logo} alt="counter logo" />
      </div>

      <div id="text_container">
        <h1>Welcome to Counters</h1>
        <p>
          Capture cups of lattes, frapuccinos or anything else that can be
          counted.
        </p>
      </div>

      <div id="button_container">
        <Button variant="primary" text="Get started" onClick={clickContinue} />
      </div>
    </div>
  );
}

export default Landing;
