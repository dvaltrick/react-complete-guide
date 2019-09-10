import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Diego', age: 29},
      {name: 'Kélen', age: 27},
      {name: 'Lúcia', age: 58}
    ]
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 29},
        {name: 'Kélen Klein Heffel', age: 27},
        {name: 'Lúcia', age: 58}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a react app!!!</h1>
      <button onClick={switchNameHandler.bind(this, "Diego !!!")}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>TESTE CHILDREN</Person>
      <Person name={personState.persons[1].name} click={switchNameHandler.bind(this, "Di !!!!")} age={personState.persons[1].age}></Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );
}

export default app;
