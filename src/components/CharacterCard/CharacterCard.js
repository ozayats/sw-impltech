import React from 'react';
import {useSelector} from 'react-redux'
import CommentsForm from '../CommentsForm/CommentsForm';
import './CharacterCard.scss';

const CharacterCard = ({characterObj}) => {

    const store = useSelector((store) => {
        return store
    });
    const charactersCommentsArr = store.charactersCommentsReducer.charactersComments
    const characterCommentsObj = charactersCommentsArr.length ? charactersCommentsArr.find(element => element.hasOwnProperty(characterObj.name)) : null
    const name = characterObj.name;
    const characterComments = characterCommentsObj ? characterCommentsObj[name] : [];

    return (
        <div className='character-card'>
            <p className='character-card__name'>Character's name: <span>{characterObj.name}</span></p>
            <p className='character-card__climate'>Character's birth year: <span>{characterObj.birth_year}</span></p>
            <CommentsForm name={characterObj.name}/>

            {characterComments
                ?
                <div className='character-card__comments'>
                    {characterComments.map((element) => {
                        return <p className='character-card__comment' key={Date.now()}>
                            <span>{`comment ${characterComments.indexOf(element) + 1}:`}</span><span>{`${element}`}</span>
                        </p>
                    })}
                </div>
                :
                null}
        </div>
    );
};

export default CharacterCard;