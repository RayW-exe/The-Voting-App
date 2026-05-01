import PollOption from "./PollOption";
import "../App.css";
function PollList({ polls, onVote, isOptionDisabled }) {
  return (
    <div>
      {polls.map((poll) => {
        const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);
        return (
          <section key={poll.id} className="poll-section">
            <h2>{poll.text}</h2>
            {poll.options.map((option) => (
              <PollOption
                key={option.id}
                option={option}
                vote={() => onVote(poll.id, option.id)}
                totalVotes={totalVotes}
                disabled={isOptionDisabled ? isOptionDisabled(poll.id, option.id) : false}
              />
            ))}
          </section>
        );
      })}
    </div>
  );
}
export default PollList;