import React from 'react';

import './CharacterCard.scss';


const CharacterCard = (characterInfoObj) => {
    return (
        <div className='charcter-card'>
            <p className='charcter-card__name'>{`name: ${characterInfoObj.name}`}</p>
        </div>
    );
};

export default CharacterCard;