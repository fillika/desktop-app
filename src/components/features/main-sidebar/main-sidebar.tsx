import React from 'react';
import styled from 'styled-components';

import { SidebarIcon } from './sidebar-icon';

const Wrapper = styled.div`
  padding-top: 3px;
  max-width: 60px;
  min-width: 60px;
  background: linear-gradient(#441f22, #221521);
`;

export const MainSidebar = () => {
  return (
    <Wrapper>
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
    </Wrapper>
  );
};
