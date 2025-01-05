import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, loading, error };
};

export default usePosts;
