import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      {id: '1', name: 'Diego', age: 29},
      {id: '2', name: 'Kélen', age: 27},
      {id: '3', name: 'Lúcia', age: 58}
    ],
    showPersons: false
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

  const onChangeHandler = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });

    const toChangePerson = {
      ...personState.persons[personIndex]
    };

    toChangePerson.name = event.target.value;

    const persons = personState.persons;
    persons[personIndex] = toChangePerson;
    setPersonsState({
      persons: persons,
      ...personState
    });
  };

  const deletePerson = (index) => {
    let fetched = personState.persons;
    fetched.splice(index,1);
    setPersonsState({persons: fetched, ...personState});
  };

  const togglePersonsHandler = () => {
    const doesShow = personState.showPersons;
    setPersonsState({
      persons: [
        {id: '1', name: 'Diego', age: 29},
        {id: '2', name: 'Kélen', age: 27},
        {id: '3', name: 'Lúcia', age: 58}
      ],
      showPersons: !doesShow});
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let personsDisplay = null;
  if (personState.showPersons) {
    personsDisplay = (
      <div>
        {
          personState.persons.map((p,index) => {
            return <Person 
                      key={p.id}
                      name={p.name} 
                      age={p.age}
                      click={deletePerson.bind(this,index)}
                      changed={(event) => onChangeHandler(event, p.id)}></Person>;
          })
        }
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I am a react app!!!</h1>
      <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
      {personsDisplay}
    </div>
  );
}

export default app;
