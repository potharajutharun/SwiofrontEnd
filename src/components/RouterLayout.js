import React from 'react';
import CustomNavbar from './CustomNavbar';
import { Outlet } from 'react-router-dom';

function RouterLayout() {
  return (
    <>
      <CustomNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RouterLayout;
