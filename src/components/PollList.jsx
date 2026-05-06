import { useMemo } from "react";
import PollOption from "./PollOption";

function PollList({ polls = [], onVote, votes = [], currentUser, totalVotes }) {
  const voteMeta = useMemo(() => {
    const meta = {};
    for (const poll of polls) {
      meta[poll.id] = {
        hasVoted: votes.some(
          (v) => v.pollId === poll.id && v.userId === currentUser?.uid
        ),
        voteCount: votes.filter((v) => v.pollId === poll.id).length,
      };
    }
    return meta;
  }, [polls, votes, currentUser]);

  const handleVote = (pollId) => {
    if (voteMeta[pollId]?.hasVoted) return;
    onVote(pollId);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Poll Options</h2>
      {!currentUser && (
        <p className="text-sm text-gray-500 mb-3">Log in to cast a vote.</p>
      )}
      {polls.map((poll) => {
        const { hasVoted, voteCount } = voteMeta[poll.id];
        return (
          <PollOption
            key={poll.id}
            disabled={hasVoted || !currentUser}
            option={{ ...poll, votes: voteCount }}
            vote={() => handleVote(poll.id)}
            totalVotes={totalVotes}
          />
        );
      })}
    </div>
  );
}

export default PollList;
