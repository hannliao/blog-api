import { Link } from 'react-router-dom';

const AuthoredPosts = () => {
  return (
    <>
      <Link
        to="/posts/new"
        className="w-full bg-yellow-300 rounded-lg p-5 my-5"
      >
        New Post
      </Link>
      <h2 class="text-xl font-semibold">Posts</h2>
      <div className="flex justify-around">
        <nav>
          <ul>
            <li>Published</li>
            <li>Drafts</li>
          </ul>
        </nav>
        <div>
          <p>list of posts</p>
        </div>
      </div>
    </>
  );
};

export default AuthoredPosts;
