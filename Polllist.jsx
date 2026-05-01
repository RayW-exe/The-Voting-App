import pollopption from "./Polloption";
import "./App.css";
function Polllist({polls, onVote}) {
  return (
    <div>
        {polls.map((poll) => (
            <pollopption key={poll.id} poll={poll} onVote={onVote} />
        ))}
    </div>
    );
}
export default Polllist;