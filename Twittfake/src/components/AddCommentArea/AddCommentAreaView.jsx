import { classNames, handleLinesAmount } from "../../shared";
import {
  ADD_COMMENT_INPUT_PLACEHOLDER,
  ADD_COMMENT_INPUT_PLACEHOLDER_ERROR,
  SUBMIT_BUTTON_TEXT,
} from "../../const/input";
import "./AddCommentArea.scss";
import PropTypes from "prop-types";

const AddCommentAreaView = (props) => (
  <>
    {props.userLogged && (
      <div className='add-comment'>
        <textarea
          ref={props.commentInputRef}
          className={classNames([
            "add-comment__input",
            props.theme === "isDark" && "add-comment__input--isDark",
            props.errorOccured && "add-comment__input--error",
          ])}
          placeholder={
            props.errorOccured
              ? ADD_COMMENT_INPUT_PLACEHOLDER_ERROR
              : ADD_COMMENT_INPUT_PLACEHOLDER
          }
          maxLength={75}
          onKeyDown={handleLinesAmount}
        />
        <button
          className='add-comment__submit-button'
          onClick={() => props.submitComment(props.id, props.commentInputRef)}
        >
          {SUBMIT_BUTTON_TEXT}
        </button>
      </div>
    )}
  </>
);

AddCommentAreaView.propTypes = {
  userLogged: PropTypes.string,
  commentInputRef: PropTypes.object,
  theme: PropTypes.string,
  errorOccured: PropTypes.bool,
  id: PropTypes.node,
  submitComment: PropTypes.func,
};

export default AddCommentAreaView;
