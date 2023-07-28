/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddCommentArea.scss";

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

    const newComment = {
      id: tweets.length + 1,
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
      ></textarea>
      <button className='add-comment__submit-button' onClick={addComment}>
        {buttonValue}
      </button>
    </div>
  );
};

export default CommentArea;
