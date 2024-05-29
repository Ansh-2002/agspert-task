import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../App';

function Layout() {
  return (
    <>
      <ColorModeScript />
      <App />

      <Outlet />
    </>
  );
}

export default Layout;
