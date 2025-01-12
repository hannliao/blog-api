export const getUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/users`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  const { user } = await response.json();
  return { user: { id: user.id, username: user.username } };
};
