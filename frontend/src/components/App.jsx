import { createContext, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
};

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
