import PollOption from "./PollOption"
import { useState, useEffect } from "react";
function PollList({ polls, onVote, resetVotingState }) {
  const totalVotes = () => polls.reduce((sum, poll) => sum + poll.votes, 0);
  const [hasVoted, setHasVoted] = useState(false);

  // Reset voting state when the parent triggers a reset
  useEffect(() => {
    if (resetVotingState) {
      setHasVoted(false);
    }
  }, [resetVotingState]);

  const handleVote = (pollId) => {
    if (!hasVoted) {
      onVote(pollId);
      setHasVoted(true);
    }
  };          

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Poll Options</h2>
      {polls.map((poll) => (
        <PollOption
          key={poll.id}
          disabled={hasVoted}
          option={poll}
          vote={() => handleVote(poll.id)}
          totalVotes={totalVotes()}
        />
      ))}
    </div>
  );
}
export default PollList;