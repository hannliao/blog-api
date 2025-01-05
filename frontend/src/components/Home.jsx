import usePosts from '../hooks/usePosts';

const Home = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h2>Recent Posts</h2>
      {posts.length > 0 && (
        <div>
          {posts.map((post, index) => (
            <div key={index}>{post}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
