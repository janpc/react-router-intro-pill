import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function FindForm() {
  const [formData, setFormData] = useState({ month: "01", year: "2000" });
  const history = useHistory();

  const submitForm = (event) => {
    event.preventDefault();
    history.push(`/beers/find?brewed_after=${formData.month}/${formData.year}`);
  };

  const handelInputChange = (event) => {
    const key = event.target.id;
    let value = event.target.value;

    if(value > event.target.max){
        value = event.target.max;
    } else if(value < event.target.min){
        value = event.target.min;
    }

    setFormData((prevState) => {
      let newState = { ...prevState };
      newState[key] = value;
      return newState;
    });
  };
  return (
    <form>
      <span for="month">Month (0-12): </span>
      <input
        type="number"
        id="month"
        name="month"
        placeholder="0-12"
        max="12"
        min="0"
        onChange={handelInputChange}
      />
      <br />
      <br />
      <span for="year">Year : </span>
      <input
        type="number"
        id="year"
        name="year"
        placeholder="2007"
        max="2021"
        min="2000"
        onChange={handelInputChange}
      />
      <br />
      <br />
      <input type="submit" onClick={submitForm} />
    </form>
  );
}

export default FindForm;
