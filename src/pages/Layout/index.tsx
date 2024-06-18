import Navbar from '@/components/Navbar/index';
import { Outlet } from 'react-router-dom';
import { Footer, Header, LayoutContainer, Main } from './styled';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import FooterComponent from '@/components/Footer';

const Layout: React.FC = () => {
  return (
    <ThemeProvider
      theme={useSelector((state: any) => state.currentTheme.value)}
    >
      <LayoutContainer>
        <Header>
          <Navbar></Navbar>
        </Header>
        <Main isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
          <Outlet></Outlet>sdas
        </Main>
        <Footer>
          <FooterComponent></FooterComponent>
        </Footer>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
