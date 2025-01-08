export const loginUser = async (username, password) => {
  const response = await fetch(`${import.meta.env.VITE_BLOG_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem('token', data.token);
    return data;
  } else {
    throw data;
  }
};

export const getUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/user`,
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

export const createUser = async (username, password, confirmPwd) => {
  const response = await fetch(`${import.meta.env.VITE_BLOG_API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, confirmPwd }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
};
