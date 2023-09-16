import { useRef } from "react";
import { useTweetContext } from "../../hooks/useTweetContext";
import SubmitService from "../../services/SubmitService";
import { useTheme } from "../../hooks/useTheme";
import AddCommentAreaView from "./AddCommentAreaView";
import PropTypes from "prop-types";

const CommentAreaContainer = ({ id }) => {
  const commentInputRef = useRef();
  const { userLogged } = useTweetContext();
  const { submitComment, errorOccured } = SubmitService();
  const { theme } = useTheme();

  return (
    <AddCommentAreaView
      id={id}
      userLogged={userLogged}
      commentInputRef={commentInputRef}
      submitComment={submitComment}
      errorOccured={errorOccured}
      theme={theme}
    />
  );
};

CommentAreaContainer.propTypes = {
  id: PropTypes.node.isRequired,
};

export default CommentAreaContainer;
