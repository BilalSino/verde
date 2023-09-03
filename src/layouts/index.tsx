import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Toaster } from 'react-hot-toast';

function Layout() {
  return (
    <div>
      <Toaster position="top-right" />
      <Header />
      <div className="p-5 bg-white rounded mt-5 shadow">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
