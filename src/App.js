import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = () => {
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const enteredDate = new Date(dob);
    if (enteredDate > today) {
      alert("Invalid date of birth");
      return;
    }

    // All validations passed
    setShowModal(false);
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: ""
    });
  };

  const handleClickOutside = (e) => {
    if (e.target.className === "modal") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [showModal]);

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Fill Details</h2>

            <label>Username:</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label>Email Address:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              id="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Date of Birth:</label>
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
