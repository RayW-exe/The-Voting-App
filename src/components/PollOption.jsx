function PollOption({ option , totalVotes, vote, disabled}){
  
    const percentage = totalVotes
    ? ((option.votes / totalVotes) * 100 ).toFixed(1)
    :0;

    return(
        <div>
            <h3>{option.text}</h3>
            <p>{option.votes} votes ({percentage}%)</p>
            <div className="w-full bg-gray-300 rounded h-4 mt-2">
         <div
             className="bg-green-500 h-4 rounded p-1 transition-all duration-500 ease-in-out"
   
             style={{ width: `${percentage}%` }}
  ></div>
</div>
    
     <button onClick={vote} disabled={disabled} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        vote
       </button>
        </div>

       
    );

}
export default PollOption;