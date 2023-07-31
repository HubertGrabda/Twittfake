/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddCommentArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";

const CommentArea = ({ id }) => {
  const defaultPlaceholderText = "Odpowiedź do tweeta";
  const buttonValue = "Prześlij";
  const inputErrorMessage = "Nie można dodać pustej odpowiedzi!";
  const addCommentInputRef = useRef();
  const { tweets, setTweets } = useContext(TweetsContext);

  const addComment = () => {
    let input = addCommentInputRef.current;
    if (input.value.trim() === "") {
      input.placeholder = inputErrorMessage;
      input.className = "add-comment__input--error";
      return;
    }

    const highestCommentId = tweets.reduce((highestID, tweet) => {
      if (tweet.comments && tweet.comments.length > 0) {
        const maxCommentId = tweet.comments.reduce(
          (maxID, comment) => Math.max(maxID, comment.id),
          0
        );
        return Math.max(highestID, maxCommentId);
      }
      return highestID;
    }, 0);

    const newComment = {
      id: highestCommentId + 1,
      username: "Twittfake_Dev",
      content: input.value,
    };

    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, comments: [newComment, ...(tweet.comments ?? [])] }
          : tweet
      )
    );

    input.placeholder = defaultPlaceholderText;
    input.value = "";
    input.className = "add-comment__input";
  };

  return (
    <div className='add-comment'>
      <textarea
        ref={addCommentInputRef}
        className='add-comment__input'
        placeholder={defaultPlaceholderText}
        maxLength={100}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button className='add-comment__submit-button' onClick={addComment}>
        {buttonValue}
      </button>
    </div>
  );
};

export default CommentArea;
