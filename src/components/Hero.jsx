import Button from "./Button";

function Hero() {
  return (
    <section className="hero grid cols-2 container">
      <img
        className="hero__image"
        src="home/illustration-charts.svg"
        alt="hero image"
      />
      <div className="hero__content">
        <h1>A simple solution to complex tasks is coming soon</h1>
        <p>
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <Button className="btn" size="sm" color="blue">
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default Hero;
