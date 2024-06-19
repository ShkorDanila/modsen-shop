import Navbar from '@/components/Navbar/index';
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { Footer, Header, LayoutContainer, Main } from './styled';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '@/components/Footer';
import { useEffect } from 'react';
import getProducts from '@/utils/getProductsApi';
import { setProductList } from '@/store/store';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((products) => dispatch(setProductList(products)));
  }, []);

  return (
    <ThemeProvider
      theme={useSelector((state: any) => state.currentTheme.value)}
    >
      <LayoutContainer>
        <Header>
          <Navbar></Navbar>
        </Header>
        <Main isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
          <Outlet></Outlet>
        </Main>
        <Footer>
          <FooterComponent></FooterComponent>
        </Footer>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
