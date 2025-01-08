import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../api/auth';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(username, password, confirmPwd);
      if (response.redirect) {
        navigate(response.redirect);
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
        <h1 className="text-center text-lg mb-4">Sign Up</h1>
        <label htmlFor="username">Username*</label>
        <input
          className="border border-stone-300 rounded-lg p-2 mb-2"
          id="username"
          name="username"
          type="text"
          maxLength="50"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password*</label>
        <input
          className="border border-stone-300 rounded-lg p-2 mb-2"
          id="password"
          name="password"
          type="password"
          maxLength="50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPwd">Confirm Password*</label>
        <input
          className="border border-stone-300 rounded-lg p-2 mb-2"
          id="confirmPwd"
          name="confirmPwd"
          type="password"
          maxLength="50"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          required
        />
        <button className="bg-sky-700 rounded-full p-2 mt-5 text-white">
          Sign Up
        </button>
      </form>
      <span>
        Already have an account?{' '}
        <Link to="/login" className="text-sky-700 underline">
          Log In
        </Link>
      </span>
    </div>
  );
};

export default SignUp;
