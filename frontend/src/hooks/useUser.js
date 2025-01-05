import { useState, useEffect } from 'react';
import { getUser } from '../api/auth';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return { user, setUser, loading, error };
};

export default useUser;
