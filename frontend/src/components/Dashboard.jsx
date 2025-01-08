import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { PostContext } from '../contexts/PostContext';
import PostListItem from './PostListItem';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const { posts, loading, error } = useContext(PostContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('Published');
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex justify-center">
        You've been logged out.{' '}
        <Link to="/login" className="text-sky-700 underline">
          Log In
        </Link>
      </div>
    );
  }

  const published = posts.filter(
    (post) => post.userId === user.id && post.isPublished
  );

  const drafts = posts.filter(
    (post) => post.userId === user.id && !post.isPublished
  );

  const handleLogout = (event) => {
    localStorage.removeItem('token');
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  const handleClick = (event) => {
    setSelectedFilter(event.target.textContent);
    if (event.target.textContent === 'Published') {
      setFilteredPosts(published);
    } else {
      setFilteredPosts(drafts);
    }
  };

  useEffect(() => {
    setFilteredPosts(published);
  }, [posts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex flex-col items-end">
        <p className="font-semibold">@{user.username}</p>
        <button onClick={handleLogout} className="underline">
          Log out
        </button>
      </div>

      <h2 className="text-lg font-medium mb-5">Posts</h2>
      <div className="flex flex-1">
        <nav className="min-w-48 mr-10 h-5/6">
          <ul className="h-full flex flex-col flew-grow">
            <li>
              <button
                onClick={handleClick}
                className={`w-full p-4 hover:bg-slate-200 ${
                  selectedFilter === 'Published' && 'bg-stone-200'
                }`}
              >
                Published
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                className={`w-full p-4 hover:bg-slate-200 ${
                  selectedFilter === 'Drafts' && 'bg-stone-200'
                }`}
              >
                Drafts
              </button>
            </li>
            <li className="mt-auto">
              <Link
                to="/new"
                className="w-full block bg-lime-300 hover:bg-lime-200 hover:cursor-pointer text-center font-medium p-4"
              >
                New Post
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 truncate">
          {filteredPosts.length > 0 ? (
            <div>
              {filteredPosts.map((post, index) => (
                <PostListItem
                  key={index}
                  title={post.title}
                  content={post.content}
                  timestamp={post.timestamp}
                  username={post.username}
                  slug={post.slug}
                />
              ))}
            </div>
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
