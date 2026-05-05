import { useState,useEffect } from "react";
import PollForm from "../components/PollForm";
import PollList from "../components/PollList";
import {collection,onSnapshot,query} from "firebase/firestore"
import { db } from "../firebase";
function VotingPage() {
  const initialData = [
    { id: 1, text: "Option 1", votes: 0 },
    { id: 2, text: "Option 2", votes: 0 },
  ];

  const [polls, setPolls] = useState(initialData);

  useEffect(() => {
    const q = query(collection(db, "polls"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const pollsArray = [];
      querySnapshot.forEach((doc) => {
        pollsArray.push({ id: doc.id, ...doc.data() });
      });
      setPolls(pollsArray);
    });

    return () => unsubscribe();
  }, []);
    
  function storePollOptions() {

  }

  return (
    <div className="bg-gray-300 min-h-screen p-4 flex flex-col items-center">

      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg md:w-3/4">

        <h1 className="text-3xl font-bold mb-4">The Voting App</h1>

        <PollForm
          addOption={(text) => {
            const newPolls = [...polls, { id: Date.now(), text, votes: 0 }];
            setPolls(newPolls);
            storePollOptions();
          }}
        />

        <PollList
          polls={polls}
          onVote={(pollId) => {
            const updatedPolls = polls.map((poll) =>
              poll.id === pollId
                ? { ...poll, votes: poll.votes + 1 }
                : poll
            );

            setPolls(updatedPolls);
            storePollOptions();
          }}
          isOptionDisabled={() => false}
        />

        <button
          onClick={() => {
            setPolls(initialData);
            storePollOptions();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default VotingPage;