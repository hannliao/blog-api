import { createContext } from 'react';
import usePosts from '../hooks/usePosts';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { posts, setPosts, loading, error } = usePosts();

  return (
    <PostContext.Provider value={{ posts, setPosts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};
