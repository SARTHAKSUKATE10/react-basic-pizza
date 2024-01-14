import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/contact.css";
import { useHistory } from "react-router-dom";

function Contact() {

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (nameInput.value !== "" && emailInput.value !== "" && messageTextarea.value !== "") {
      alert("Thanks for visiting");
      
      history.push('/');
    } else {
      alert("Please fill in all the required fields.");
    }
  };


  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            //   placeholder="Enter full name..."
            type="text"
          />

          <label htmlFor="email">Full Email</label>
          <input
            name="email"
            //   placeholder="Enter email..."
            type="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            // placeholder="Enter message..."
            required
          ></textarea>
          
            <button 
            onClick={onSubmit}
            >
             Submit Message</button>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
