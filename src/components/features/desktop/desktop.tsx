import React from 'react';
import styled from 'styled-components';

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.sizes.sideBar.width}px;
`;

export const Desktop = () => {
  return <DesktopWrapper>Desktop</DesktopWrapper>;
};
