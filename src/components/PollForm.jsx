import { useState } from "react";

function PollForm({ addOption = () => {}}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;
    
    addOption(text);
    setText("");
  };

  return (
    <div className="space-y-3">
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Add Poll Option</h1>
      <input
        type="text"
        placeholder="Enter poll option"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outlin-none"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-7 rounded-full">
        Add Option
      </button>
      <hr className="mb-5"/>

    </form>
    </div>
  );
}

export default PollForm;