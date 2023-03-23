import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registerForm.css";
import FormInput from "../FormInput";
import FormDropdown  from "../FormDropdown";




const Register = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    role:"",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      onChange:{InputEvent},
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      type: String,
      placeholder: "Role",
      label: "Role",
      required: true,


    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },


  ];




  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (


    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          if (input.type === "dropdown"){
            return <FormDropdown />;
          }
          else{
            return (
              <FormInput
              key={input.id}
              {...input}
              value = {values[input.name]}
              onChange={onChange}
            />
            );
            }
          })}
          <button type="submit">Submit</button>
        <p>If you already have an account <a href>Login Here</a></p>
      </form>
    </div>






  );
};

export default Register;
