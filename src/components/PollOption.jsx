function PollOption({ option , totalVotes, vote, disabled}){
  
    const percentage = totalVotes
    ? ((option.votes / totalVotes) * 100 ).toFixed(1)
    :0;

    return(
    //     <div>
    //         <h3>{option.text}</h3>
    //         <p>{option.votes} votes ({percentage}%)</p>
    //         <div className="bg-blue-500 h-full transition-all duration-700 ease-in-out" style={{ width: `${percentage}%` }}></div>
    //         <div className="flex flex-col border p-4 rounded bg-white shadow-sm"></div>
    //             <div className="flex justify-between items-center mb-2"></div>
    //             <h3 className="text-lg font-semibold">{option.text}</h3>
    //             <span className="text-sm font-bold text-blue-600">{percentage}%</span>
    //             <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
    //                 <div className="bg-blue-500 h-3 rounded-full transition-all duration-500"style={{ width: `${percentage}%` }}></div>
    //             </div>
    
    //  <button onClick={vote} disabled={disabled} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 ">
    //     {disabled ? "Voted" : "Vote"}
    //    </button>
    //     </div>
        <div className="border rounded-xl p-4 mb-5 bg-gray-50 shadow-sm space-y-3 transition hover:shadow-lg">
      
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {option.text}
        </h3>
        <span className="text-sm font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      {/* Votes */}
      <p className="text-sm text-gray-500">
        {option.votes} vote{option.votes !== 1 && "s"}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-700 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Button */}
      <button
        onClick={vote}
        disabled={disabled}
        className={`w-full py-2 rounded-lg font-medium transition 
        ${
          disabled
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        {disabled ? "Voted" : "Vote"}
      </button>
    </div>
       
    );

}
export default PollOption;