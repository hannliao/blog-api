import { useState, useEffect } from 'react';
import { getUser } from '../api/user';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const data = await getUser();
          setUser(data.user);
        } catch (err) {
          console.error(err.message);
          setError(err);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  return { user, setUser, loading, error };
};

export default useUser;
