import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatTimestamp';
import { PostContext } from '../contexts/PostContext';

const PostDetail = () => {
  const { username, slug } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.username === username && p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }
  const formattedTimestamp = formatTimestamp(post.timestamp);

  return (
    <div className="w-full flex-1 flex flex-col p-10">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-sm text-stone-500">Written by @{username}</p>
      <p className="text-sm text-stone-500">{formattedTimestamp}</p>
      <p className="my-5">{post.content}</p>
      <div>
        <h3 className="font-semibold my-5">Comments</h3>
        <form action="" className="flex">
          <input
            type="text"
            placeholder="Add a comment"
            className="w-full border-2 border-stone-300 outline-yellow-300 rounded-full p-2 px-5"
          />
          <button>
            <img src="/icons/send.svg" alt="send" className="ml-2 p-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetail;
