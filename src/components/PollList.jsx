import PollOption from "./PollOption"
import{ useState } from "react";
function PollList({ polls, onVote }) {
  const totalVotes = polls.reduce((sum, poll) => sum + poll.votes, 0);
  const [hasVoted, setHasVoted] = useState(false);
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
          totalVotes={totalVotes}
        />
      ))}
    </div>
  );
}
export default PollList;