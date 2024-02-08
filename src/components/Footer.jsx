import { Link } from "react-router-dom";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import CountdownTimer from "./CountdownTimer";

function Footer() {
  return (
    <section className="footer-container">
      <CardsContainer />
      <footer>
        <div className="footer-content container">
          <CountdownTimer />
          <Link to="sign-up">Get Started</Link>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
