import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import charactersInfoSelector from "../../store/selectors/charactersInfoSelector";
import getCharactersInfo from "../../store/charactersInfo/getCharactersInfo";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import './Main.scss';

const Main = () => {
    const charactersInfo = useSelector(charactersInfoSelector);
    const dispatch = useDispatch();

    return (
        charactersInfo.length === 0
            ?
            <p>loading...</p>
            :
            <section className='characters-list__section'>
                <div className='characters-list'>
                    {charactersInfo.results.map((elem) => {
                        return <CharacterCard characterObj={elem} key={elem.name}/>
                    })}
                </div>

                <div className="characters-list__btns-container">

                    {charactersInfo.previous ? <button disabled={!charactersInfo.previous}
                                                       onClick={() => dispatch(getCharactersInfo(charactersInfo.previous))}>previous
                    </button> : <button disabled style={{color: 'grey', border: '1px solid grey'}}>previous</button>}

                    {charactersInfo.next ? <button disabled={!charactersInfo.next}
                                                   onClick={() => dispatch(getCharactersInfo(charactersInfo.next))}>next
                    </button> : <button disabled style={{color: 'grey', border: '1px solid grey'}}>next</button>}

                </div>
            </section>
    );
};

export default Main;