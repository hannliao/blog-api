import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    // prevent unnecessary console logs when logging out
    return (
      <div>
        You've been logged out.{' '}
        <Link to="/login" className="text-sky-700 underline">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col text-center">
      <h2>Welcome, {user.username}!</h2>
      <Link
        to="/new"
        className="w-full bg-yellow-300 hover:bg-yellow-200 rounded-lg p-5 my-5"
      >
        New Post
      </Link>
      <h2 className="text-xl font-semibold">Posts</h2>
      <div className="flex justify-around">
        <nav className="border-r">
          <ul>
            <li>Published</li>
            <li>Drafts</li>
          </ul>
        </nav>
        <div>
          <p>list of posts</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
