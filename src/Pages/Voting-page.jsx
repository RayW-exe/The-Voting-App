import { useState, useEffect } from "react";
import PollForm from "../components/PollForm";
import PollList from "../components/PollList";
import { collection, onSnapshot, query, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function VotingPage() {
  const [polls, setPolls] = useState([]);
  const [votes, setVotes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    const qPolls = query(collection(db, "polls"));
    const unsubscribePolls = onSnapshot(qPolls, (querySnapshot) => {
      const pollsArray = [];
      querySnapshot.forEach((doc) => {
        pollsArray.push({ id: doc.id, ...doc.data() });
      });
      setPolls(pollsArray);
    });

    const qVotes = query(collection(db, "votes"));
    const unsubscribeVotes = onSnapshot(qVotes, (querySnapshot) => {
      const votesArray = [];
      querySnapshot.forEach((doc) => {
        votesArray.push({ id: doc.id, ...doc.data() });
      });
      setVotes(votesArray);
    });

    return () => {
      unsubscribeAuth();
      unsubscribePolls();
      unsubscribeVotes();
    };
  }, []);
    
  const addOption = async (text) => {
    if (!currentUser) {
      alert("Please log in to add options");
      return;
    }
    try {
      await addDoc(collection(db, "polls"), {
        text,
        createdBy: currentUser.uid,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error adding poll:", error);
    }
  };

  const handleVote = async (pollId) => {
    if (!currentUser) {
      alert("Please log in to vote");
      return;
    }
    const existingVote = votes.find(v => v.pollId === pollId && v.userId === currentUser.uid);
    if (existingVote) {
      alert("You have already voted for this option");
      return;
    }
    try {
      await addDoc(collection(db, "votes"), {
        userId: currentUser.uid,
        pollId,
        votedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const totalVotes = polls.reduce((sum, poll) => sum + votes.filter(v => v.pollId === poll.id).length, 0);

  return (
    <div className="bg-gray-300 min-h-screen p-4 flex flex-col items-center">

      <div className="max-w-4xl bg-gray-50 mt-8 p-6 rounded-lg shadow-lg md:w-3/4">

        <h1 className="text-3xl text-center font-bold mb-9">The Voting App</h1>

        <PollForm addOption={addOption} />

        <PollList
          polls={polls}
          votes={votes}
          currentUser={currentUser}
          onVote={handleVote}
          totalVotes={totalVotes}
        />

      </div>
    </div>
  );
}

export default VotingPage;