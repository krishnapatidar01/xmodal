import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const { username, email, phone, dob } = formData;
    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
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
    const selectedDate = new Date(dob);
    const today = new Date();
    if (selectedDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // Success: reset form and modal
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Open Form</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Form</h2>
            <input
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              id="dob"
              type="date"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
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
