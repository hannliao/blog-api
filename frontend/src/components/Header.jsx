import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setUser, loading } = useContext(UserContext);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = (event) => {
    localStorage.removeItem('token');
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="w-screen flex justify-around items-center p-10">
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
      <button onClick={handleLogout}>Log out</button>
    </header>
  );
};

export default Header;
