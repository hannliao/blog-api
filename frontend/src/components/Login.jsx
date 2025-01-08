import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user, redirect } = await loginUser(username, password);
      setUser(user);
      if (redirect) {
        navigate(redirect || '/');
      }
    } catch (err) {
      console.error(err.message);
      if (err.errors) {
        setErrors(err.errors);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-custom font-bold text-2xl p-5 mb-5">softspeak</h1>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} className="text-red-600 my-2">
              {error.msg}
            </p>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col bg-white rounded-lg p-6 mb-2"
      >
        <h1 className="text-center text-xl mb-4">Log In</h1>
        <label htmlFor="username">Username</label>
        <input
          className="border border-stone-300 rounded-lg p-2 my-2"
          id="username"
          name="username"
          type="text"
          maxLength="50"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="border border-stone-300 rounded-lg p-2 my-2"
          id="password"
          name="password"
          type="password"
          maxLength="50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-sky-700 rounded-full p-2 mt-5 text-white">
          Log In
        </button>
      </form>
      <span>
        Don't have an account yet?{' '}
        <Link to="/signup" className="text-sky-700 underline">
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default Login;
