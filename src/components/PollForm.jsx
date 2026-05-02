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
      <h1 className="text-2xl font-bold mb-4">Add Poll Option</h1>
      <input
        type="text"
        placeholder="Enter poll option"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add Option
      </button>
    </form>
  );
}

export default PollForm;