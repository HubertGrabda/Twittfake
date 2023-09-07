import { useRef } from "react";
import PropTypes from "prop-types";
import "./AddCommentArea.scss";
import { classNames, handleLinesAmount } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { AddCommentInputPlaceholder } from "../../const/input";
import { useTheme } from "../../hooks/useTheme";

const CommentArea = ({ id }) => {
  const buttonValue = "Prześlij";
  const inputErrorMessage = "Nie można dodać pustej odpowiedzi!";
  const addCommentInputRef = useRef();
  const { userLogged } = useTweetContext();
  const { submitComment } = SubmitService();
  const { theme } = useTheme();

  const handleCommentSubmit = () => {
    submitComment(id, addCommentInputRef, inputErrorMessage);
  };

  return (
    <>
      {userLogged && (
        <div className='add-comment'>
          <textarea
            ref={addCommentInputRef}
            className={classNames([
              "add-comment__input",
              theme === "isDark" && "add-comment__input--isDark",
            ])}
            placeholder={AddCommentInputPlaceholder}
            maxLength={80}
            onKeyDown={handleLinesAmount}
          />
          <button
            className='add-comment__submit-button'
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
  id: PropTypes.node.isRequired,
};

export default CommentArea;
