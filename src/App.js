import React,{useState} from 'react'
import './App.css';
import useFetch from "./hooks/useFetch";

function App() {
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')
    const {...state} =useFetch(query)

    console.log(state);

    function onSubmit(e) {
      e.preventDefault()
      setQuery(name)
    }
  return (
    <>
    <form
    onSubmit={onSubmit}
    >
      <label htmlFor="name">Name:</label>
      <input onChange={e=>setName(e.target.value)} type="text" name="name" id="name"/>
      <button>Submit</button>
    </form>
    </>
  );
}

export default App;
