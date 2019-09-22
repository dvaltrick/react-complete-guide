import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

const App = props => {
  const [appState, setAppState] = useState({
    length: 0,
    text: []
  });

  const onChangeHadler = (event) => {
    let newLength = event.target.value.length;

    setAppState({length: newLength,
                text: event.target.value.split('')});
  }

  const printChars = () => {
    const chars = appState.text;

    chars.map((c, index) => {
      <CharComponent char={c} key={c+index}></CharComponent>
    });
  }

  return (
    <div className="App">
      <input type="text" onChange={onChangeHadler} value={appState.text.join('')}></input>
      <ValidationComponent textLength={appState.length}></ValidationComponent>
      {printChars()}
    </div>
  );
}

export default App;
