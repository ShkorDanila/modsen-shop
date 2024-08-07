import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as styled from './styled';
const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <styled.ErroWrapper>
      <styled.ErrorHeader>404 ERROR</styled.ErrorHeader>
      <styled.ErrorDescription>
        This page not found <br />
        back to home and start again
      </styled.ErrorDescription>
      <styled.ToHomePageButton onClick={() => navigate('/')}>
        Homepage
      </styled.ToHomePageButton>
    </styled.ErroWrapper>
  );
};
export default ErrorPage;
