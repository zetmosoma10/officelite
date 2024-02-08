import { useState } from "react";
import Button from "./Button";
import joi from "joi-browser";
import { formSchema } from "../validateSchema";

function Form() {
  const [formData, setFormData] = useState({
    account: {
      firstName: "",
      email: "",
      phone: "",
      company: "",
    },
    error: {},
  });
  const [toggle, setToggle] = useState(false);

  const errorStyles = {
    borderColor: "#f05b5b",
  };

  const validate = () => {
    const option = { abortEarly: false };
    const results = joi.validate(formData.account, formSchema, option);
    if (!results.error) return null;

    const errors = {};

    for (const item of results.error.details) {
      const name = item.path[0];
      const errorMessage = item.message;

      errors[name] = errorMessage;
    }

    return errors;
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        account: {
          ...prevFormData.account,
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setFormData((prevFormData) => {
      return {
        account: { ...prevFormData.account },
        error: { ...errors },
      };
    });

    if (errors) return;
    alert("Your form is submitted succesfully ");
    setFormData((prevFormData) => {
      return {
        account: {
          firstName: "",
          email: "",
          phone: "",
          company: "",
        },
        error: {},
      };
    });
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div
        style={formData.error.firstName && errorStyles}
        className="input-container"
      >
        <input
          type="text"
          onChange={handleChange}
          value={formData.account.firstName}
          name="firstName"
          placeholder="Name"
        />
        {formData.error.firstName && <img src="sign-up/icon-cross.svg" />}
      </div>
      <div
        style={formData.error.email && errorStyles}
        className="input-container"
      >
        <input
          type="email"
          onChange={handleChange}
          value={formData.account.email}
          name="email"
          placeholder="Email Address"
        />
        {formData.error.email && <img src="sign-up/icon-cross.svg" />}
      </div>
      <div className="custom-dropdown">
        <div onClick={handleToggle} className="dropdown-btn">
          <div>Option {toggle && <span>Opened</span>} </div>
          <img
            className={toggle ? `arrow-up` : ""}
            src="sign-up/icon-arrow-down.svg"
          />
        </div>
        {toggle ? (
          <div className="options-container">
            <div className="option basic">
              Basic <span> Free</span>
            </div>
            <div className="option prop">
              Pro <span>$9.99</span>
            </div>
            <div className="option ultimate">
              Ultimate <span>$19.99</span>
            </div>
          </div>
        ) : null}
      </div>
      <div
        style={formData.error.phone && errorStyles}
        className="input-container"
      >
        <input
          type="text"
          onChange={handleChange}
          value={formData.account.phone}
          name="phone"
          placeholder="Phone Number"
        />
        {formData.error.phone && <img src="sign-up/icon-cross.svg" />}
      </div>
      <div
        style={formData.error.company && errorStyles}
        className="input-container"
      >
        <input
          type="text"
          onChange={handleChange}
          value={formData.account.company}
          name="company"
          placeholder="Company"
        />
        {formData.error.company && <img src="sign-up/icon-cross.svg" />}
      </div>
      <Button className="btn" size="lg" color="blue">
        Get on the list
      </Button>
    </form>
  );
}

export default Form;
