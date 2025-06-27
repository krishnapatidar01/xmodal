import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Form</button>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
