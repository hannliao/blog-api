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
        <h1 className="font-bold text-3xl p-2 hover:text-lime-600">
          softspeak
        </h1>
      </Link>
      <div className="rounded-lg hover:bg-yellow-100">
        {user ? (
          <Link to={`${user.username}`}>
            <img
              src="/icons/person-circle-outline.svg"
              alt="dashboard"
              className="w-14 p-2"
            />
          </Link>
        ) : (
          <Link to="/login">
            <img
              src="/icons/person-circle-outline.svg"
              alt="dashboard"
              className="w-14 p-2"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
