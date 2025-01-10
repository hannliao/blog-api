import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatTimestamp';
import { UserContext } from '../contexts/UserContext';
import { PostContext } from '../contexts/PostContext';
import { deletePost } from '../api/posts';
import DeletePostModal from './DeletePostModal';

const PostListItem = ({ title, content, timestamp, username, slug }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const formattedTimestamp = formatTimestamp(timestamp);
  const { posts, setPosts } = useContext(PostContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const post = posts.find((p) => p.username === username && p.slug === slug);

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const data = await deletePost(post.id);
      console.log(data.message);
      const remainingPosts = posts.filter((p) => p.id !== post.id);
      setPosts(remainingPosts);
      setModalVisible(false);
      navigate(`/${user.username}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex items-center border-b border-stone-300 p-3 group">
      <Link to={`/${username}/${slug}`} className="w-3/4 flex flex-col">
        <h3 className="font-semibold text-lg group-hover:text-lime-600">
          {title}
        </h3>
        <p className="truncate my-2">{content}</p>
        <p className="text-sm text-stone-500">
          Last saved {formattedTimestamp}
        </p>
      </Link>
      <div className="text-sm font-medium opacity-0 group-hover:opacity-100">
        <Link
          to={`/${username}/${slug}/edit`}
          className="rounded-lg p-3 ml-2 hover:bg-yellow-100"
        >
          Edit
        </Link>
        <button
          onClick={() => setModalVisible(true)}
          className="rounded-lg p-3 ml-2 hover:bg-yellow-100"
        >
          Delete
        </button>
      </div>

      {isModalVisible && (
        <DeletePostModal
          onCancel={() => setModalVisible(false)}
          onDelete={handleDelete}
          isModalVisible={isModalVisible}
        />
      )}
    </div>
  );
};

export default PostListItem;
