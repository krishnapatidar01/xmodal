import React, { useState } from "react";
import XModal from "./XModal";
import "./XModal.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="modal">
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>
      {isModalOpen && <XModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
