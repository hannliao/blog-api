import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../api/posts';
import { PostContext } from '../contexts/PostContext';
import { UserContext } from '../contexts/UserContext';

const EditPostForm = () => {
  const { username, slug } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const post = posts.find((p) => p.username === username && p.slug === slug);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!post) {
      console.error('Post not found');
    }

    const formData = {
      title,
      content,
      isPublished,
    };
    try {
      const response = await updatePost(post.id, formData);
      const updatedPost = response.post;
      const updatedPosts = posts.map((p) =>
        p.slug === slug ? updatedPost : p
      );
      setPosts(updatedPosts);
      navigate(`/${user.username}/${updatedPost.slug}`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      console.error('Post not found');
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex-1 flex flex-col p-2">
        <h1 className="text-lg font-medium mb-5">Edit Post</h1>
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
            className="hover:bg-yellow-300 rounded-lg p-3 m-2 text-sm"
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

export default EditPostForm;
