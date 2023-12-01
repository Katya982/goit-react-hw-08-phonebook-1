import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 4px;
  font-weight: 700;
  color: black;

  &.active {
      background-color: #29AB87;
    color: white;
    border: 0px;
  }
`;