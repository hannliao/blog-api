import { formatTimestamp } from '../utils/formatTimestamp';

const CommentListItem = ({ comment }) => {
  const { content, timestamp, user } = comment;
  const formattedTimestamp = formatTimestamp(timestamp);

  return (
    <li className="my-4">
      <p className="text-sm font-medium">@{user?.username || 'anonymous'}</p>
      <p className="text-xs text-stone-500">{formattedTimestamp}</p>
      <p>{content}</p>
    </li>
  );
};

export default CommentListItem;
