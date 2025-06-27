import React, { useState } from "react";

function XModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username) {
      alert("Please fill the username field.");
      return;
    }

    if (!email) {
      alert("Please fill the email field.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!phone) {
      alert("Please fill the phone field.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!dob) {
      alert("Please fill the dob field.");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();

    if (selectedDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // all validations passed
    onClose();
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="date"
            id="dob"
            placeholder="Enter DOB"
            value={formData.dob}
            onChange={handleChange}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
