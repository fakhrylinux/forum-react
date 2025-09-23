import { postedAt } from '../utils/index.js';
import PropTypes from 'prop-types';
import UpVoteButton from './UpVoteButton.jsx';
import DownVoteButton from './DownVoteButton.jsx';
import { authUserShape, ownerShape } from '../types/index.js';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
  upVote,
  downVote,
  neutralVote,
}) {
  const onUpVoteClickHandle = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteClickHandle = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onNeutralVoteClickHandle = (event) => {
    event.stopPropagation();
    neutralVote(id);
  };

  return (
    <>
      <div className="post-header">
        <div className="post-author">
          <img src={owner.avatar} alt="Author" className="avatar" />
        </div>
        <div>
          <h3>{title}</h3>
          <small>{postedAt(createdAt)}</small>
        </div>
      </div>
      <div className="post-tags">
        <span className="tag">{category}</span>
      </div>
      <div className="post-content">
        <p>{body}</p>
      </div>

      <div className="post-stats">
        <div className="post-stats__item">
          <UpVoteButton
            onUpVote={onUpVoteClickHandle}
            onNeutralVote={onNeutralVoteClickHandle}
            upVotesBy={upVotesBy}
            authUser={authUser.id}
          />
          <h5>{upVotesBy.length}</h5>
        </div>
        <div className="post-stats__item">
          <DownVoteButton
            onDownVote={onDownVoteClickHandle}
            onNeutralVote={onNeutralVoteClickHandle}
            downVotesBy={downVotesBy}
            authUser={authUser.id}
          />
          <h5>{downVotesBy.length}</h5>
        </div>
      </div>
    </>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.shape(authUserShape).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
