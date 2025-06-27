import React, { useEffect, useState } from "react";

function Modal({ closeModal }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  });

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

    const now = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > now) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>

          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email Address:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
