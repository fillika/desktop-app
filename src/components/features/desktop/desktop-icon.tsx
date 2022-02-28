import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
}

const Icon = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const DesktopIcon: React.FC<IconProps> = ({ name }) => {
  return <Icon>{name}</Icon>;
};
