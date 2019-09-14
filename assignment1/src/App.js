import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [usernameState, setUsernameState] = useState({
    username: 'Diego'
  });
  
  const onChangeHandler = (event) => {
    setUsernameState({
      username: event.target.value
    });
  };

  const style = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eeeeee',
    padding: '16px',
    textAlign: 'center'
  }

  return (
    <div className="App">
      <UserInput username={usernameState.username}
                 changed={onChangeHandler}></UserInput>
      <UserOutput title="Test One" 
                  subtitle="Subtitle One" 
                  username={usernameState.username}
                  style={style}></UserOutput>
      <UserOutput title="Test Two" 
                  subtitle="Subtitle Two" 
                  username={usernameState.username}
                  style={style}></UserOutput>
      <UserOutput title="Test Three" 
                  subtitle="Subtitle Three" 
                  username={usernameState.username}
                  style={style}></UserOutput>
    </div>
  );
}

export default App;
