import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col flex-1 max-w-3xl w-4/5 items-center">
      <Header />
      <div className="w-full flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
