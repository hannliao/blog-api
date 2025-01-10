import usePosts from '../hooks/usePosts';
import PostCard from './PostCard';

const Home = () => {
  const { posts, loading, error } = usePosts();

  const published = posts
    .filter((post) => post.isPublished)
    .sort((a, b) => b.timestamp - a.timestmp);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex-1 p-2">
      <h2 className="text-lg font-medium mb-5">Recent Posts</h2>
      {published.length > 0 && (
        <div className="flex flex-wrap justify-around">
          {published.map((post, index) => (
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
