import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getProducts } from '@/api/getProductsApi';
import FooterComponent from '@/components/Footer';
import Navbar from '@/components/Navbar/index';
import { setProductList } from '@/store/productListSlice';

import { Footer, Header, LayoutContainer, Main } from './styled';

const Layout: React.FC = () => {
  const cart = useSelector((state: any) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((products) => dispatch(setProductList(products)));
  }, []);

  return (
    <ThemeProvider
      theme={useSelector((state: any) => state.currentTheme.value)}
    >
      <LayoutContainer {...{isOpened: useSelector((state: any) => state.isMenuOpened.value)}}>
        <Header {...{isOpened: useSelector((state: any) => state.isMenuOpened.value)}}>
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
