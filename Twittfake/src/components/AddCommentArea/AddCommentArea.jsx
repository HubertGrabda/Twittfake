/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddCommentArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";
import submitComment from "../../functions/submitComment";

const CommentArea = ({ id }) => {
  const defaultPlaceholderText = "Odpowiedz na tweet";
  const buttonValue = "Prześlij";
  const inputErrorMessage = "Nie można dodać pustej odpowiedzi!";
  const addCommentInputRef = useRef();
  const { tweets, setTweets, userLogged } = useContext(TweetsContext);

  return (
    <div className='add-comment'>
      <textarea
        ref={addCommentInputRef}
        className='add-comment__input'
        placeholder={defaultPlaceholderText}
        maxLength={88}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button
        className='add-comment__submit-button'
        onClick={() =>
          submitComment(
            id,
            addCommentInputRef,
            tweets,
            setTweets,
            inputErrorMessage,
            defaultPlaceholderText,
            userLogged
          )
        }
      >
        {buttonValue}
      </button>
    </div>
  );
};

export default CommentArea;
