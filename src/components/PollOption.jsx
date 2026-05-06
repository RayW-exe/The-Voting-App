function PollOption({ option, totalVotes, vote, disabled }) {
  const percentage = totalVotes
    ? ((option.votes / totalVotes) * 100).toFixed(1)
    : 0;

  return (
    <div className="flex flex-col border p-4 rounded bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{option.text}</h3>
        <span className="text-sm font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{option.votes} votes ({percentage}%)</p>
      <button
        onClick={vote}
        disabled={disabled}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {disabled ? "Voted" : "Vote"}
      </button>
    </div>
  );
}

export default PollOption;