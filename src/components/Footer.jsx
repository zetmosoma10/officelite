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
          <Button className="btn btn-footer" size="sm" color="blue">
            Get Started
          </Button>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
