import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import PropTypes from "prop-types";
import "./AddCommentArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";
import submitComment from "../../functions/submitComment";
import useGetUsername from "../../hooks/useGetUsername";

const CommentArea = ({ id }) => {
  const defaultPlaceholderText = "Odpowiedz na tweet";
  const buttonValue = "Prześlij";
  const inputErrorMessage = "Nie można dodać pustej odpowiedzi!";
  const addCommentInputRef = useRef();
  const { tweets, setTweets, setFilteredTweetsData, userLogged } =
    useContext(TweetsContext);

  const handleCommentSubmit = () => {
    submitComment(
      id,
      addCommentInputRef,
      tweets,
      setTweets,
      inputErrorMessage,
      defaultPlaceholderText,
      userLogged,
      setFilteredTweetsData
    );
  };

  return (
    <>
      {userLogged && (
        <div className="add-comment">
          <textarea
            ref={addCommentInputRef}
            className="add-comment__input"
            placeholder={defaultPlaceholderText}
            maxLength={80}
            onKeyDown={handleLinesAmount}
          />
          <button
            className="add-comment__submit-button"
            onClick={handleCommentSubmit}
          >
            {buttonValue}
          </button>
        </div>
      )}
    </>
  );
};

CommentArea.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CommentArea;
