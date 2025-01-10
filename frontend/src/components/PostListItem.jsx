import { Link } from 'react-router-dom';
import { formatTimestamp } from '../utils/formatTimestamp';

const PostListItem = ({ title, content, timestamp, username, slug }) => {
  const formattedTimestamp = formatTimestamp(timestamp);

  return (
    <div className="w-full flex items-center border-b border-stone-200 p-3">
      <Link to={`/${username}/${slug}`} className="w-5/6 flex flex-col group">
        <h3 className="font-semibold text-lg text-lime-700 group-hover:text-lime-600">
          {title}
        </h3>
        <p className="truncate my-2">{content}</p>
        <p className="text-sm text-stone-400">
          Last saved {formattedTimestamp}
        </p>
      </Link>
      <Link
        to={`/${username}/${slug}/edit`}
        className="rounded-lg p-3 ml-5 hover:bg-slate-200"
      >
        Edit
      </Link>
    </div>
  );
};

export default PostListItem;
