import React from "react";

const Form = () => {
  return (
    <div className="form_wrapper">
        <form>
        <p>Subscribe to our newsletter</p>
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required></input>
        <input type="submit" value="Subscribe!"></input>
        </form>
    </div>
   
  );
};

export default Form;
