import { useRef } from "react";
import "./AddTweetArea.scss";
import { classNames, handleLinesAmount } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import { AddTweetInputPlaceholder, submitButtonText } from "../../const/input";

export const AddTweetArea = () => {
  const { userLogged } = useTweetContext();
  const { submitTweet } = SubmitService();
  const { theme } = useTheme();
  const inputRef = useRef();

  return (
    <>
      {userLogged && (
        <div className='textarea'>
          <textarea
            className={classNames([
              "textarea__input",
              theme === "isDark" && "textarea__input--isDark",
            ])}
            placeholder={AddTweetInputPlaceholder(userLogged)}
            ref={inputRef}
            maxLength={85}
            onKeyDown={handleLinesAmount}
          ></textarea>
          <button
            className='textarea__submit-button'
            onClick={() => submitTweet(inputRef)}
          >
            {submitButtonText}
          </button>
        </div>
      )}
    </>
  );
};
