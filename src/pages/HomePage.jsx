import ThreadList from "../components/ThreadList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncPopulateUsersAndThreads } from "../states/shared/action.js";
import {
  asyncDownVoteThread,
  asyncNeutralizeThread,
  asyncUpVoteThread,
} from "../states/threads/action.js";

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralVote = (id) => {
    dispatch(asyncNeutralizeThread(id));
  };

  return (
    <>
      <div className="main-content">
        <ThreadList
          threads={threadList}
          upVote={onUpVote}
          downVote={onDownVote}
          neutralVote={onNeutralVote}
        />
      </div>
    </>
  );
}

export default HomePage;
