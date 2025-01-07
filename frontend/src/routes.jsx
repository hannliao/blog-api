import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './components/App';
import Home from './components/Home';
// import AuthoredPosts from './components/AuthoredPosts';
import NewPostForm from './components/NewPostForm';
import Dashboard from './components/Dashboard';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ':username',
        element: <Dashboard />,
        // children: [

        // {
        //   path: ':postTitle',
        //   element: <Post />,
        //   children: [{ path: 'edit', element: <EditPostForm /> }],
        // },
        // ],
      },
      { path: 'new', element: <NewPostForm /> },
    ],
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login />,
  },
];

export default routes;

// / shows all posts from various authors
// /new shows NewPostForm
// /:username shows Dashboard profile with authored posts listed
// /:username/:postTitle shows post in published mode
// /:username/:postTitle/edit shows edit post form
