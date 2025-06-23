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
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      return alert("Please fill all fields.");
    }

    if (!email.includes("@")) {
      return alert("Invalid email.");
    }

    if (!/^\d{10}$/.test(phone)) {
      return alert("Phone number must be 10 digits.");
    }

    if (new Date(dob) > new Date()) {
      return alert("Invalid date of birth.");
    }

    alert("Form submitted successfully!");
    setShowModal(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="App">
      <h1>User Form Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Enter Details</h2>

              <label>Username:</label>
              <input id="username" type="text" value={formData.username} onChange={handleChange} />

              <label>Email:</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} />

              <label>Phone:</label>
              <input id="phone" type="text" value={formData.phone} onChange={handleChange} />

              <label>Date of Birth:</label>
              <input id="dob" type="date" value={formData.dob} onChange={handleChange} />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
