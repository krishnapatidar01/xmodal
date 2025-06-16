import React, { useState } from "react";

function Modal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^\d{10}$/.test(phone);

  const isValidDOB = (dob) => {
    const date = new Date(dob);
    const now = new Date();
    return date instanceof Date && !isNaN(date) && date < now;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Invalid phone number");
      return;
    }

    if (!isValidDOB(dob)) {
      alert("Invalid date of birth");
      return;
    }

    alert("Form submitted successfully!");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={closeModal}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "400px"
        }}
      >
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
