import { useState } from 'react';
import { createPost } from '../api/posts';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { title, content, isPublished };
    try {
      const response = await createPost(formData);
      console.log('Post saved successfully:', response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        name="title"
        className="rounded-lg p-2 my-2"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="rounded-lg p-2 my-2"
        name="content"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={() => setIsPublished(false)}
          className="hover:bg-yellow-200 rounded-lg p-3 m-2 text-sm"
        >
          Save draft
        </button>
        <button
          type="submit"
          onClick={() => setIsPublished(true)}
          className="bg-lime-300 hover:bg-lime-400 rounded-lg p-3 my-2 text-sm"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
