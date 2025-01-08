export const getPosts = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts`
  );
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }
  return data;
};

export const createPost = async (formData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
