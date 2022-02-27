import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Desktop } from '@features/desktop';
import { MainSidebar } from '@features/main-sidebar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <MainSidebar />
      <Desktop />
    </Container>
  );
};
