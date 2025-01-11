export const getComments = async (postId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts/${postId}/comments`
  );

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
};

export const createComment = async (formData) => {
  const { postId } = formData;
  const response = await fetch(
    `${import.meta.env.VITE_BLOG_API_URL}/api/posts/${postId}/comments`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
};
