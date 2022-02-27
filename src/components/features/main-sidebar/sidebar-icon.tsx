import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: 100ms ease-in background-color;
  margin: 0 auto 3px;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    transition: 200ms ease-in background-color;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.37);
  }
`;

export const SidebarIcon = () => {
  return <Icon>Icon</Icon>;
};
