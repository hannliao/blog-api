import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/posts';
import { PostContext } from '../contexts/PostContext';
import { UserContext } from '../contexts/UserContext';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const { posts, setPosts } = useContext(PostContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      content,
      isPublished,
      userId: user.id,
      username: user.username,
    };
    try {
      const response = await createPost(formData);
      console.log(response.message);
      const post = response.post;
      setPosts([post, ...posts]);
      navigate(`/${user.username}/${post.slug}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex-1 flex flex-col p-2">
        <h1 className="text-lg font-medium mb-5">Create Post</h1>
        <input
          type="text"
          name="title"
          className="border border-stone-300 outline-yellow-300 rounded-lg p-2 my-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border border-stone-300 outline-yellow-300 rounded-lg p-2 my-2"
          name="content"
          placeholder="Content"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={() => setIsPublished(false)}
            className="hover:bg-yellow-200 rounded-lg p-3 m-2 text-sm"
          >
            Save draft
          </button>
          <button
            type="submit"
            onClick={() => setIsPublished(true)}
            className="bg-lime-300 hover:bg-lime-400 rounded-lg p-3 my-2 text-sm"
          >
            Publish
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPostForm;
