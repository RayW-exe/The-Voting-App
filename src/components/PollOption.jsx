function pollOption({ option , totalVotes, vote, disabled}){
  
    const percentage = totalVotes
    ? ((option.votes / totalVotes) * 100 ).toFixed(1)
    :0;
}