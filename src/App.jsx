import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`

  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);



  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts

    async function fetchProgrammingJoke() {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
      if (data?.joke) {
        setJoke(data.joke);
      } else {
        setJoke('No joke found.');
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Error fetching joke.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProgrammingJoke();
  }, []);


  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  // - Update the `joke` state with the fetched joke
  // - Set `loading` to false once the joke is loaded
  // - Handle any errors in the `.catch` block

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchProgrammingJoke} />
    </div>
  );
}

export default App;