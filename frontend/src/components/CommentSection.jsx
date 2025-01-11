import { useState, useEffect, useContext } from 'react';
import { getComments, createComment } from '../api/comments';
import CommentListItem from './CommentListItem';
import { UserContext } from '../contexts/UserContext';

const CommentSection = ({ postId }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const response = await getComments(postId);
        setComments(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadComments();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      content: newComment,
      userId: user?.id || null,
      postId,
    };

    try {
      const response = await createComment(formData);
      console.log(response.message);
      const updatedComments = await getComments(postId);
      setComments(updatedComments);
      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading comments...</p>;

  return (
    <div>
      <h3 className="font-semibold my-5">Comments</h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          name="content"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full border-2 border-stone-300 outline-yellow-300 rounded-full p-2 px-5"
          required
        />
        <button>
          <img src="/icons/send.svg" alt="send" className="ml-2 p-2" />
        </button>
      </form>
      <ul>
        {comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
