import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddTweetArea.scss";
import handleLinesAmount from "../../functions/handleLinesAmount";

export const AddTweetArea = () => {
  const inputPlaceholder = "O czym myślisz?";
  const buttonValue = "Prześlij";
  const InputErrorMessage = "Nie można dodać pustego tweeta!";
  const InputRef = useRef();

  const { tweets, setTweets } = useContext(TweetsContext);

  const submitTweet = () => {
    let input = InputRef.current;
    if (input.value.trim() === "") {
      InputRef.current.placeholder = InputErrorMessage;
      InputRef.current.className = "textarea-wrapper__input--error";
      return;
    } else input.value;

    const newTweet = {
      id: tweets.length + 1,
      username: "Twittfake_Dev",
      content: input.value,
    };

    setTweets([newTweet, ...tweets]);

    InputRef.current.placeholder = inputPlaceholder;
    InputRef.current.value = "";
    InputRef.current.className = "textarea-wrapper__input";
  };

  return (
    <div className='textarea-wrapper'>
      <textarea
        className='textarea-wrapper__input'
        placeholder={inputPlaceholder}
        ref={InputRef}
        maxLength={100}
        onKeyDown={handleLinesAmount}
      ></textarea>
      <button className='textarea-wrapper__submit-button' onClick={submitTweet}>
        {buttonValue}
      </button>
    </div>
  );
};
