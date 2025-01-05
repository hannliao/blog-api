import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <header className="w-screen flex justify-around items-center p-10">
      <Link to="/">
        <h1 className="font-bold text-2xl">softspeak</h1>
      </Link>
      <div>
        {user ? (
          <>
            <span>Hi, @{user.username}</span>
            <Link to={`${username}`}>
              <img
                src="/icons/person-circle-outline.svg"
                alt="account"
                className="w-8"
              />
            </Link>
          </>
        ) : (
          <Link to="/login">
            <img
              src="/icons/person-circle-outline.svg"
              alt="account"
              className="w-8"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
