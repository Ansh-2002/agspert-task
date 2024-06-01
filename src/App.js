import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default App;
