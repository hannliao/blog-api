import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { PostProvider } from './contexts/PostContext.jsx';
import routes from './routes';
import './styles/index.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </UserProvider>
  </StrictMode>
);
