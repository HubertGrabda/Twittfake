import { classNames, handleLinesAmount } from "../../shared";
import {
  ADD_COMMENT_INPUT_PLACEHOLDER,
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  INPUT_LENGTH,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import "./AddCommentArea.scss";
import PropTypes from "prop-types";

const AddCommentAreaView = ({
  tweetId,
  userLogged,
  commentInputRef,
  submitComment,
  isError,
  theme,
}) => (
  <>
    {userLogged && (
      <div className='add-comment'>
        <textarea
          data-testid='comment-input'
          ref={commentInputRef}
          className={classNames([
            "add-comment__input",
            theme === "dark" && "add-comment__input--dark",
            isError && "add-comment__input--error",
          ])}
          placeholder={
            isError
              ? ADD_COMMENT_INPUT_PLACEHOLDER_ERROR
              : ADD_COMMENT_INPUT_PLACEHOLDER
          }
          maxLength={INPUT_LENGTH}
          onKeyDown={handleLinesAmount}
        />
        <button
          data-testid='submit-input'
          className='add-comment__submit-button'
          onClick={() => submitComment(tweetId, commentInputRef)}
        >
          {SUBMIT_BUTTON_TEXT}
        </button>
      </div>
    )}
  </>
);

AddCommentAreaView.propTypes = {
  userLogged: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  commentInputRef: PropTypes.object,
  theme: PropTypes.string,
  isError: PropTypes.bool,
  tweetId: PropTypes.node,
  submitComment: PropTypes.func,
};

export default AddCommentAreaView;
