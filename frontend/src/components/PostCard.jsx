import { Link } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatTimestamp';
import { useState } from 'react';

const PostCard = ({ title, content, timestamp, username, slug }) => {
  const formattedTimestamp = formatTimestamp(timestamp);
  const [liked, setLiked] = useState(false);

  const handleClick = (event) => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="w-full min-w-80 h-64 flex flex-col rounded-lg border-2 m-5">
      <Link to={`${username}/${slug}`} className="group p-6">
        <p className="text-sm text-stone-400">@{username}</p>
        <p className="text-sm text-stone-400">{formattedTimestamp}</p>
        <h3 className="text-2xl font-semibold text-lime-700 group-hover:text-lime-600 my-2">
          {title}
        </h3>
        <p className="line-clamp-3">{content}</p>
      </Link>
      <div className="mt-auto flex justify-around">
        <button
          onClick={handleClick}
          className={`flex-1 flex justify-center hover:bg-red-100 ${
            liked === true && 'bg-rose-100'
          } p-6`}
        >
          <img src="/icons/heart-outline.svg" alt="like" className="w-6" />
        </button>
        <Link
          to={`/${username}/${slug}`}
          className="flex-1 flex justify-center hover:bg-slate-300 p-6"
        >
          <img src="/icons/chatbox-outline.svg" alt="comment" className="w-6" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
