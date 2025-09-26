import { BiSolidUpvote, BiUpvote } from 'react-icons/bi';
import PropTypes from 'prop-types';
import IconButton from './styled/IconButton.js';

function UpVoteButton({ onUpVote, onNeutralVote, upVotesBy = [], authUser }) {
  return upVotesBy.includes(authUser) ? (
    <IconButton type="button" onClick={onNeutralVote}>
      <BiSolidUpvote style={{ fontSize: '1.1rem' }} />
    </IconButton>
  ) : (
    <IconButton type="button" onClick={onUpVote}>
      <BiUpvote style={{ fontSize: '1.1rem' }} />
    </IconButton>
  );
}

UpVoteButton.propTypes = {
  onUpVote: PropTypes.func,
  onNeutralVote: PropTypes.func,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  authUser: PropTypes.string,
};

export default UpVoteButton;
