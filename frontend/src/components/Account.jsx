import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="w-full flex flex-col text-center">
      <h2>Welcome, username!</h2>

      <Link
        to="/:username/posts"
        className="bg-stone-300 hover:bg-stone-400 rounded-lg p-20 my-10 font-semibold"
      >
        my blog
      </Link>

      <a
        href="/logout"
        className="bg-sky-700 rounded-full p-2 text-white text-sm font-semibold"
      >
        Log out
      </a>
    </div>
  );
};

export default Account;
