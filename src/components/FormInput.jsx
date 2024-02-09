function FormInput({ name, placeholder, handleChange, type, formData }) {
  const errorStyles = {
    borderColor: "#f05b5b",
  };

  return (
    <div
      style={formData.error[name] && errorStyles}
      className="input-container"
    >
      <input
        type={type}
        onChange={handleChange}
        value={formData.account[name]}
        name={name}
        placeholder={placeholder}
      />
      {formData.error[name] && <img src="sign-up/icon-cross.svg" />}
    </div>
  );
}

export default FormInput;
