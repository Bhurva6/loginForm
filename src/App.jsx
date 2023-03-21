import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";



const App = () => {
  const [values, setValues] = useState({
    username: "",
    role:"",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });



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
      type: FormDropdown,
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


  function FormDropdown(){
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
    <form>
      <label htmlFor="dropdown"> Define Role: </label>
      <select id="dropdown" value={selectedOption} onChange = {handleOptionChange} >
        <option value="Student"> Student </option>
        <option value="User"> User </option>
        <option value="Admin"> Admin </option>
      </select>
    </form>
    );
  }





  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <p>If you already have an account <a href='src\components\LoginForm.jsx'>Login Here</a></p>
      </form>
    </div>
  );
};



export default App;