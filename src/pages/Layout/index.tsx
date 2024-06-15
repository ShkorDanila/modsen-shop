import Navbar from '@/components/Navbar/index';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
      <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layout;
