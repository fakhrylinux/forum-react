import { BiDownvote, BiSolidDownvote } from 'react-icons/bi';
import PropTypes from 'prop-types';

function DownVoteButton({
  onDownVote,
  onNeutralVote,
  downVotesBy = [],
  authUser,
}) {
  return downVotesBy.includes(authUser) ? (
    <button className="icon-btn" type="button" onClick={onNeutralVote}>
      <BiSolidDownvote style={{ fontSize: '1.1rem' }} />
    </button>
  ) : (
    <button className="icon-btn" type="button" onClick={onDownVote}>
      <BiDownvote style={{ fontSize: '1.1rem' }} />
    </button>
  );
}

DownVoteButton.propTypes = {
  onDownVote: PropTypes.func,
  onNeutralVote: PropTypes.func,
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  authUser: PropTypes.string,
};

export default DownVoteButton;
