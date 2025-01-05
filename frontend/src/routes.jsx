import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './components/App';
import Home from './components/Home';
import AuthoredPosts from './components/AuthoredPosts';
import NewPostForm from './components/NewPostForm';
import Account from './components/Account';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'new', element: <NewPostForm /> },
      {
        path: ':username',
        element: <Account />,
        children: [
          { index: true, element: <AuthoredPosts /> },
          // {
          //   path: ':postTitle',
          //   element: <Post />,
          //   children: [{ path: 'edit', element: <EditPostForm /> }],
          // },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
];

export default routes;

// / shows all posts from various authors
// /new shows NewPostForm
// /:username shows account profile with authored posts listed
// /:username/:postTitle shows post in published mode
// /:username/:postTitle/edit shows edit post form
