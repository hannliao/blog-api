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
      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-stone-400">Written by @{username}</p>
      <p className="text-sm text-stone-400">{formattedTimestamp}</p>
      <p className="my-5">{post.content}</p>
    </div>
  );
};

export default PostDetail;
