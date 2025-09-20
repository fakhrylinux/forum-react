import { BiComment } from "react-icons/bi";
import { postedAt } from "../utils/index.js";
import { Link } from "react-router";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";
import PropTypes from "prop-types";
import { threadItemShape } from "../types/index.js";

function ThreadItem({
  id,
  title,
  category,
  createdAt,
  upVotesBy = [],
  downVotesBy = [],
  totalComments = 0,
  authUser,
  upVote,
  downVote,
  neutralVote = null,
}) {
  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownvoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onNeutralVoteClick = (event) => {
    event.stopPropagation();
    neutralVote(id);
  };

  return (
    <div className="content-card">
      <div className="content-card-header">
        <div>
          <Link to={`/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>

      <div className="content-card-tags">
        <span className="tag">{category}</span>
      </div>

      <div className="footer-card">
        <div className="footer-card__left">
          <div style={{ width: "2.2rem" }}>
            <img src={authUser.avatar} alt={authUser.id} className="avatar" />
          </div>

          <div>
            <h5>{authUser.name}</h5>
            <h6>{postedAt(createdAt)}</h6>
          </div>
        </div>
        <div className="content-card-stats">
          <div className="content-card-stats__item">
            <UpVoteButton
              onUpVote={onUpVoteClick}
              onNeutralVote={onNeutralVoteClick}
              upVotesBy={upVotesBy}
              authUser={authUser.id}
            />
            <h5>{upVotesBy.length}</h5>
          </div>

          <div className="content-card-stats__item">
            <DownVoteButton
              onDownVote={onDownvoteClick}
              onNeutralVote={onNeutralVoteClick}
              downVotesBy={downVotesBy}
              authUser={authUser.id}
            />
            <h5>{downVotesBy.length}</h5>
          </div>
          <div className="content-card-stats__item">
            <button type="button" className="icon-btn">
              <BiComment style={{ fontSize: "1.1rem" }} />
            </button>
            <h5>{totalComments}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
};

export default ThreadItem;
