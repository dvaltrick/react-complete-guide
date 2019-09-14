import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" 
                    onChange={props.changed} 
                    value={props.username}></input>
        </div>
    );
}

export default userInput;