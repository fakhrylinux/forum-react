import './add-thread.css';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action.js';
import useInput from '../hooks/useInput.js';
import { useNavigate } from 'react-router';

function AddThread() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = () => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="post-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter post title..."
          name="title"
          value={title}
          onChange={onTitleChange}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea
          rows="8"
          placeholder="Write your post here..."
          name="body"
          value={body}
          onChange={onBodyChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={onCategoryChange}
        />
      </div>

      <button className="create-button" onClick={onAddThread}>
        Publish Post
      </button>
    </div>
  );
}

export default AddThread;
