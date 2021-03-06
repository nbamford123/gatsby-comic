import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { totalWidth as headerWidth } from '../types';

interface NavLinkProps {
  fontWeight?: string;
}
const NavLink = styled(Link)<NavLinkProps>`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      max-width: ${headerWidth}px;
      margin: auto;
      padding-bottom: 0.5rem;
    `}
  >
    <nav>
      <NavLink to="/" activeClassName="current-page">
        LATEST PAGE
      </NavLink>
      <NavLink to="/blog" activeClassName="current-page">
        NEWS
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        ABOUT
      </NavLink>
      <NavLink to="/archive" activeClassName="current-page">
        ARCHIVE
      </NavLink>
    </nav>
  </header>
);

export default Header;
