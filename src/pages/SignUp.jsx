import CountdownTimer from "../components/CountdownTimer";
import Form from "../components/Form";

function SignUp() {
  return (
    <section className="sign-up ">
      <section className="container grid cols-2">
        <div className="sign-up__content">
          <h2>Work smarter. Save time.</h2>
          <p>
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </p>
          <CountdownTimer />
        </div>
        <Form />
      </section>
      <div className="sign-up__footer"></div>
    </section>
  );
}

export default SignUp;
