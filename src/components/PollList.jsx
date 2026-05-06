import PollOption from "./PollOption";

function PollList({ polls, onVote, votes, currentUser, totalVotes }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Poll Options</h2>
      {polls.map((poll) => {
        const hasVoted = votes.some(v => v.pollId === poll.id && v.userId === currentUser?.uid);
        const voteCount = votes.filter(v => v.pollId === poll.id).length;
        return (
          <PollOption
            key={poll.id}
            disabled={hasVoted}
            option={{ ...poll, votes: voteCount }}
            vote={() => onVote(poll.id)}
            totalVotes={totalVotes}
          />
        );
      })}
    </div>
  );
}

export default PollList;