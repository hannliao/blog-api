import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="w-full flex justify-between items-center py-5">
      <Link to="/">
        <h1 className="font-bold text-2xl">softspeak</h1>
      </Link>
      <div>
        {user ? (
          <Link to={`${user.username}`}>
            <img
              src="/icons/person-circle-outline.svg"
              alt="dashboard"
              className="w-8"
            />
          </Link>
        ) : (
          <Link to="/login">
            <img
              src="/icons/person-circle-outline.svg"
              alt="dashboard"
              className="w-8"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
