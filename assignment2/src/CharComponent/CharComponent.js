import React from 'react';
import './CharComponent.css';

const CharComponent = props => {

    return (
        <p className="defaultStyle">{props.char}</p>
    );
}

export default CharComponent;