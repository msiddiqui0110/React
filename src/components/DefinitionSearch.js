import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState();
  const navigate = useNavigate();

  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate("/definition/" + word);
      }}
    >
      <input
        className="shrink min-w-0 px-2 rounded py-1"
        placeholder="Search for a word"
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="bg-purple-600 hover:bg-purple-400 text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}
