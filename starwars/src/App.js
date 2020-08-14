import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterList from './components/CharacterList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharData(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Rick & Morty Character Catalog</h1>
      <CharacterList charData={charData} setCharData={setCharData}>

      </CharacterList>
    </div>
  );
}

export default App;
