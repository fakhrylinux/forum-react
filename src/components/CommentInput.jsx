import useInput from "../hooks/useInput.js";

function CommentInput({ authUser, addComment }) {
  const [content, onContentChange, setContent] = useInput("");

  const onAddComment = () => {
    if (content.trim()) {
      addComment(content);
      setContent("");
    }
  };

  return (
    <form className="comment-input">
      <div className="avatar">
        <img
          src={authUser.avatar}
          alt={authUser.name}
          style={{ borderRadius: "50%" }}
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

export default CommentInput;
