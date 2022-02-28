import React from 'react';
import styled from 'styled-components';

import { SidebarIcon } from './sidebar-icon';

const Wrapper = styled.div`
  padding-top: 3px;
  max-width: ${({ theme }) => theme.sizes.sideBar.width}px;
  min-width: ${({ theme }) => theme.sizes.sideBar.width}px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const OpacityOverlay = styled(Wrapper)`
  background-image: ${({ theme }) => theme.colors.overlay};
  opacity: 0.78;
`;

export const MainSidebar = () => {
  return (
    <>
      <OpacityOverlay />
      <Wrapper>
        <SidebarIcon />
        <SidebarIcon />
        <SidebarIcon />
        <SidebarIcon />
      </Wrapper>
    </>
  );
};
