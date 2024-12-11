import React, { useState } from "react";

function CharacterCounter() {
  // Declare state variables
  const [text, setText] = useState("");

  // Function to handle text input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ width: "300px", height: "100px", marginBottom: "10px" }}
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
