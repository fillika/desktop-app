import * as React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '@src/theme';
import { Desktop } from '@features/desktop';
import { MainSidebar } from '@features/main-sidebar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <MainSidebar />
        <Desktop />
      </Container>
    </ThemeProvider>
  );
};
