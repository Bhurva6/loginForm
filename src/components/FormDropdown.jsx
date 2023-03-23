
import { useState } from "react";


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

  export default FormDropdown;