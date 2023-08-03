import "./NewTweetView.scss";
import { TweetsContext } from "../../context/Tweet'sState";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/twittfake.png";

const NewTweetView = () => {
  const { tweets, setTweets } = useContext(TweetsContext);
  const textareaInput = useRef();
  const loggedUsername = "Twittfake_Dev";
  const inputPlaceholder = `O czym myślisz, ${loggedUsername}?`;
  const buttonValue = "Prześlij";
  const InputErrorMessage = "Nie można dodać pustego tweeta!";
  const navigate = useNavigate();

  const submitTweet = () => {
    let input = textareaInput.current;
    if (input.value.trim() === "") {
      textareaInput.current.placeholder = InputErrorMessage;
      textareaInput.current.className =
        "input-field-wrapper__textarea__input--error";
      return;
    } else input.value;

    const newTweet = {
      id: tweets.length + 1,
      username: "Twittfake_Dev",
      content: input.value,
    };

    setTweets([newTweet, ...tweets]);

    textareaInput.current.placeholder = inputPlaceholder;
    textareaInput.current.value = "";
    textareaInput.current.className = "textarea-wrapper__input";

    navigate("/");
  };

  return (
    <div className='input-field-wrapper'>
      <div className='input-field-wrapper__user-data'>
        <img
          src={logo}
          className='input-field-wrapper__user-data__profile-pic'
        ></img>
        <h4 className='input-field-wrapper__user-data__username'>
          {loggedUsername}
        </h4>
      </div>
      <div className='input-field-wrapper__textarea'>
        <textarea
          ref={textareaInput}
          className='input-field-wrapper__textarea__input'
          placeholder={inputPlaceholder}
        ></textarea>{" "}
        <button
          className='input-field-wrapper__textarea__submit-button'
          onClick={() => submitTweet()}
        >
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default NewTweetView;
