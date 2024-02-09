import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import { validateInput } from "../validateSchema";
import FormInput from "./FormInput";

function Form() {
  const [formData, setFormData] = useState({
    account: {
      firstName: "",
      email: "",
      phone: "",
      company: "",
      plans: "",
    },
    error: {},
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        account: {
          ...prevFormData.account,
          [name]: type === "checkbox" ? checked : value,
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateInput(formData.account);
    setFormData((prevFormData) => {
      return {
        account: { ...prevFormData.account },
        error: { ...errors },
      };
    });

    if (errors) return;
    toast.success("Your form is submitted succesfully ");
    setFormData((prevFormData) => {
      return {
        account: {
          firstName: "",
          email: "",
          phone: "",
          company: "",
          plans: "",
        },
        error: {},
      };
    });
  };

  const errorStyles = {
    borderColor: "#f05b5b",
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormInput
        type="text"
        handleChange={handleChange}
        placeholder="Name"
        name="firstName"
        formData={formData}
      />
      <FormInput
        type="email"
        handleChange={handleChange}
        placeholder="Email"
        name="email"
        formData={formData}
      />
      <div
        className="custom-dropdown"
        style={formData.error.plans && errorStyles}
      >
        <select
          name="plans"
          className="select-box"
          value={formData.account.plans}
          onChange={handleChange}
        >
          <option value="">--Choose option--</option>
          <option value="basic">Basic Pack Free</option>
          <option value="pro">Pro Pack $9.99</option>
          <option value="ultimate">Ultimate Pack $19.99</option>
        </select>
        <img className="select-icon" src="sign-up/icon-arrow-down.svg" />
      </div>
      <FormInput
        type="text"
        handleChange={handleChange}
        placeholder="Phone number"
        name="phone"
        formData={formData}
      />
      <FormInput
        type="text"
        handleChange={handleChange}
        placeholder="Company"
        name="company"
        formData={formData}
      />
      <Button className="btn" size="lg" color="blue">
        Get on the list
      </Button>
    </form>
  );
}

export default Form;
