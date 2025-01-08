import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';

const Home = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex-1">
      <h2 className="text-lg font-medium my-2">Recent Posts</h2>
      {posts.length > 0 && (
        <div className="flex flex-wrap justify-around">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              timestamp={post.timestamp}
              username={post.username}
              slug={post.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
