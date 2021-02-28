import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import addCharacterComments from '../../store/characterComments/addCharacterComments';
import charactersCommentsSelector from '../../store/selectors/charactersCommentsSelector';
import './CommentsForm.scss';


const CommentsForm = ({name}) => {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const charactersCommentsArr = useSelector(charactersCommentsSelector);

    const newCommentObj = {};
    newCommentObj[name] = [comment];

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment !== '') {
            dispatch(addCharacterComments(charactersCommentsArr, newCommentObj));
            setComment('');
        }
    };

    return (
        <form className='comments-form' onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor='input'>type your comment here:</label>
            <input type='text' className='comments-form__input' name='input' value={comment}
                   onChange={(event) => handleChange(event)}/>
            <button className='comments-form__btn' type='submit'>add comment</button>
        </form>
    );
};

export default CommentsForm;