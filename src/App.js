import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "50px" }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
