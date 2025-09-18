import api from "../../utils/api.js";
import { receiveThreadsActionCreator } from "../threads/action.js";
import { receiveUsersActionCreator } from "../users/action.js";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
