export const getPosts = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  return data;
};

export const createPost = async (formData) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
