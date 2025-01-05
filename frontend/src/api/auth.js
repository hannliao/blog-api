export const getUser = async (username, password) => {
  const response = await fetch(`${import.meta.env.VITE_BLOG_API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
};