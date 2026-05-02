import React from 'react';


function PollOption({ option , totalVotes, vote, disabled}){
  
    const percentage = totalVotes
    ? ((option.votes / totalVotes) * 100 ).toFixed(1)
    :0;

    return(
        <div>
            <h3>{option.text}</h3>
            <p>{option.votes} votes ({percentage}%)</p>
    
     <button onClick={() => vote(option.id)} disabled={disabled} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        vote
       </button>
        </div>

      
    );

}
export default PollOption;