export const getPosts = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts`
  );

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
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

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
};

export const updatePost = async (id, formData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }
  return response.json();
};

export const deletePost = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }
  return response.json();
};
