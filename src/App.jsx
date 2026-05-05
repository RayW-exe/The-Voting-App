import { useState } from 'react';
import PollForm from './components/PollForm';
import PollList from './components/PollList';


function App() {
  const initialData = [
    { id: 1, text: "Option 1", votes: 0 },
    { id: 2, text: "Option 2", votes: 0 },
  ];

 
  const [polls, setPolls] = useState(() => {
    const stored = localStorage.getItem("polls");
    return stored ? JSON.parse(stored) : initialData;
  });

 function storePollOptions(newPoll){
  localStorage.setItem("polls", JSON.stringify(newPoll));
  }

  return (
    <>
      <div className="bg-gray-300 min-h-screen p-4 items-center flex flex-col">
        <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg md:w-3/4">
           <div className="mb-8 bg-sky-500 p-4 rounded-lg shadow-lg text-white">
             <h1 className="text-3xl font-bold mb-4">The Voting App</h1>
           </div>
           <div className="mb-8 bg-sky-100 p-4 rounded-lg shadow-lg">
              <PollForm addOption={(text) => {
                const newPolls = [...polls, { id: Date.now(), text, votes: 0 }];
                setPolls(newPolls);
                storePollOptions(newPolls);
              }} />
           </div>
           <div className="bg-sky-100 p-4 rounded-lg shadow-lg">
              <PollList polls={polls} onVote={(pollId) => {
                const updatedPolls = polls.map(poll => {
                  if (poll.id === pollId) {
                    return { ...poll, votes: poll.votes + 1 };
                  }
                  return poll;
                });
                setPolls(updatedPolls);
                storePollOptions(updatedPolls);
              }} isOptionDisabled={() => false} />
              <button onClick={() => {
                setPolls(initialData);
                storePollOptions(initialData);
              }}
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Reset
              </button>
           </div>

        </div>
      </div>
    </>
  )
}

export default App;
