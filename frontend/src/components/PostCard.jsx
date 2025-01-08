import { Link } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatTimestamp';

const PostCard = ({ title, content, timestamp, username, slug }) => {
  const formattedTimestamp = formatTimestamp(timestamp);

  return (
    <div className="w-full h-64 flex flex-col rounded-lg border-2 hover:shadow-lg p-7 m-5">
      <Link to={`${username}/${slug}`}>
        <p className="text-sm text-stone-400">@{username}</p>
        <p className="text-sm text-stone-400">{formattedTimestamp}</p>
        <h3 className="text-2xl font-semibold text-lime-700 my-2">{title}</h3>
        <p className="line-clamp-3">{content}</p>
      </Link>
      <div className="mt-auto flex justify-around">
        <img src="/icons/heart-outline.svg" alt="like" className="w-6" />
        <img src="/icons/chatbox-outline.svg" alt="comment" className="w-6" />
      </div>
    </div>
  );
};

export default PostCard;
