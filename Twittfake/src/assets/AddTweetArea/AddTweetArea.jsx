import { useContext, useRef } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import "./AddTweetArea.scss";

export const AddTweetArea = () => {
  const inputPlaceholder = "O czym myślisz?";
  const buttonValue = "Prześlij";
  const InputRef = useRef();

  const { tweets, setTweets } = useContext(TweetsContext);

  const submitTweet = () => {
    const newTweet = {
      id: tweets.length + 1,
      username: "Twittfake_Dev",
      content: InputRef.current.value,
    };

    setTweets([...tweets, newTweet]);
  };

  return (
    <div className='textarea-wrapper'>
      <textarea
        className='textarea-wrapper__input'
        placeholder={inputPlaceholder}
        ref={InputRef}
      ></textarea>
      <button className='textarea-wrapper__submit-button' onClick={submitTweet}>
        {buttonValue}
      </button>
    </div>
  );
};
