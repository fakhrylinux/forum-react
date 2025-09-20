import { postedAt } from "../utils/index.js";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";
import PropTypes from "prop-types";
import { ownerShape } from "../types/index.js";

function CommentItem({ content, createdAt, owner, upVotesBy, downVotesBy }) {
  return (
    <div className="comment-card">
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
        <small>{postedAt(createdAt)}</small>
        <div className="comment-stats">
          <div className="comment-stats__item">
            <UpVoteButton />
            <h5>{upVotesBy.length}</h5>
          </div>
          <div className="comment-stats__item">
            <DownVoteButton />
            <h5>{downVotesBy.length}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

export default CommentItem;
