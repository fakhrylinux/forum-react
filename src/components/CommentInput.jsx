import useInput from '../hooks/useInput.js';
import PropTypes from 'prop-types';
import { authUserShape } from '../types/index.js';

function CommentInput({ authUser, addComment }) {
  const [content, onContentChange, setContent] = useInput('');

  const onAddComment = () => {
    if (content.trim()) {
      addComment(content);
      setContent('');
    }
  };

  return (
    <form className="comment-input">
      <div className="avatar">
        <img
          src={authUser.avatar}
          alt={authUser.name}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <input
        className="comment-input__field"
        value={content}
        onChange={onContentChange}
      />
      <button type="button" className="comment-button" onClick={onAddComment}>
        Comment
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
