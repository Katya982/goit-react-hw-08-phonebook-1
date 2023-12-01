import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar  from './AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
        }} />
    </div>
  );
};

export default Layout;

