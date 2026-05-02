import { useState } from 'react';
import PollForm from './components/PollForm';
import PollOption from './components/PollOption';
import PollList from './components/Pollist';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-300 min-h-screen p-4 items-center flex flex-col">
        <div className="w-4xl bg-white p-6 rounded-lg shadow-lg md:w-3/4">
           <div className="mb-8 bg-sky-500 p-4 rounded-lg shadow-lg text-white">
             <h1 className="text-3xl font-bold mb-4">The Voting App</h1>
           </div>
           <div className="mb-8 bg-sky-100 p-4 rounded-lg shadow-lg">
              <PollForm addOption={() => {}} />
           </div>
           <div className="bg-sky-100 p-4 rounded-lg shadow-lg">
              <PollList polls={[]} onVote={() => {}} isOptionDisabled={() => false} />
              <PollOption option={{id: 1, text: 'Option 1', votes: 0}} totalVotes={0} vote={() => {}} disabled={false} />
           </div>
        </div>
      </div>
    </>
  )
}

export default App;
