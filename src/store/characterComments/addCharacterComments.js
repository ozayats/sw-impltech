import {CHARACTERS_COMMENTS_ADDED} from './actionTypes';

const addCharacterComments = (charactersCommentsArr, commentsObj) => {

    const charactersComments = charactersCommentsArr;
    const commentsKey = Object.keys(commentsObj)[0];
    const commentsObjStore = charactersComments.find((el) => el[commentsKey]);

    if (commentsObjStore === undefined) {
        charactersComments.push(commentsObj)
    } else {
        const commentsArr = commentsObjStore[commentsKey];
        commentsArr.push(commentsObj[commentsKey][0]);
        const newCommentsObj = commentsObjStore;
        newCommentsObj[commentsKey] = commentsArr;
        const commentsObjStoreIndex = charactersCommentsArr.indexOf(commentsObjStore);
        charactersComments.splice(commentsObjStoreIndex, 1, newCommentsObj)
    }

    return {
        type: CHARACTERS_COMMENTS_ADDED,
        payload: charactersComments
    }
};

export default addCharacterComments;