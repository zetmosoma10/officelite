import Button from "./Button";

function Form({ children }) {
  return (
    <form className="form">
      <div className="input-container">
        <input type="text" placeholder="Name" />
      </div>
      <div className="input-container">
        <input type="email" placeholder="Email Address" />
      </div>
      <div className="custom-dropdown">
        <button className="dropdown-btn">Options</button>
        <div className="options-container">
          <div className="option basic">Basic Free</div>
          <div className="option prop">Pro $9.99</div>
          <div className="option ultimate">Ultimate $19.99</div>
        </div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Phone Number" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Company" />
      </div>
      <Button className="btn" size="lg" color="blue">
        Get on the list
      </Button>
    </form>
  );
}

export default Form;
