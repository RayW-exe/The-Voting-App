import { useState } from "react";

function PollForm({ addOption = () => {} }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addOption(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter poll option"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Option</button>
    </form>
  );
}

export default PollForm;