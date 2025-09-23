import { BiSolidUpvote, BiUpvote } from 'react-icons/bi';
import PropTypes from 'prop-types';

function UpVoteButton({ onUpVote, onNeutralVote, upVotesBy = [], authUser }) {
  return upVotesBy.includes(authUser) ? (
    <button className="icon-btn" type="button" onClick={onNeutralVote}>
      <BiSolidUpvote style={{ fontSize: '1.1rem' }} />
    </button>
  ) : (
    <button className="icon-btn" type="button" onClick={onUpVote}>
      <BiUpvote style={{ fontSize: '1.1rem' }} />
    </button>
  );
}

UpVoteButton.propTypes = {
  onUpVote: PropTypes.func,
  onNeutralVote: PropTypes.func,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  authUser: PropTypes.string,
};

export default UpVoteButton;
