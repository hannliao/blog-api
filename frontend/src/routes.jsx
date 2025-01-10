import SignUp from './components/SignUp';
import Login from './components/Login';
import App from './components/App';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Dashboard from './components/Dashboard';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'new', element: <NewPostForm /> },
      { path: ':username', element: <Dashboard /> },
      { path: ':username/:slug', element: <PostDetail /> },
      { path: ':username/:slug/edit', element: <EditPostForm /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <Login /> },
    ],
  },
];

export default routes;

// / shows all posts from various authors
// /new shows NewPostForm
// /:username shows Dashboard profile with authored posts listed
// /:username/:slug shows post in published mode
// /:username/:slug/edit shows edit post form
