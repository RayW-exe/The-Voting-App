import PollOption from "./PollOption";


function PollList({ polls, onVote, isOptionDisabled, }) {
  const totalVotes = polls.reduce((sum, poll) => sum + poll.votes, 0);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Poll Options</h2>
      {polls.map((poll) => (
        <PollOption
          key={poll.id}
          option={poll}
          vote={() => onVote(poll.id)}
          totalVotes={totalVotes}
          disabled={isOptionDisabled ? isOptionDisabled(poll.id) : false}
        />
      ))}
    </div>
  );
}
export default PollList;