import PollForm from "./components/PollForm";

function App() {
  const addOption = (text) => {
    console.log("New option:", text);
  };

  return (
    <div>
      <h1>Testing PollForm</h1>
      <PollForm addOption={addOption} />
    </div>
  );
}

export default App;