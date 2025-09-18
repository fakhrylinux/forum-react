import { postedAt } from "../utils/index.js";

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div className="comment">
      <div className="avatar">
        <img
          src={owner.avatar}
          alt={owner.name}
          className="comment-author-image"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="comment-text">
        <p>{content}</p>
        <h5>{postedAt(createdAt)}</h5>
        <h5>{upVotesBy.length} upvote</h5>
        <h5>{downVotesBy.length} down vote</h5>
      </div>
    </div>
  );
}

export default CommentItem;
