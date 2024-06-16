import Navbar from '@/components/Navbar/index';
import { Outlet } from 'react-router-dom';
import { Header, LayoutContainer } from './styled';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const Layout: React.FC = () => {
  return (
      <ThemeProvider theme={useSelector((state: any) => state.currentTheme.value)}>
        <LayoutContainer>
          <Header>
            <Navbar></Navbar>
          </Header>
          <main>
            <Outlet></Outlet>
          </main>
        </LayoutContainer>
        </ThemeProvider>
  );
};

export default Layout;
