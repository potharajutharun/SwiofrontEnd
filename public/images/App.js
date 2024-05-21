import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import RouterLayout from './components/RouterLayout';
import Home from './components/Home';
import Sleeve from './components/Sleeve';
import Help from './components/Help';
import Umbra from './components/Umbra';
import Update from './components/Update';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="sleeve" element={<Sleeve />} />
        <Route path="umbra" element={<Umbra />} />
        <Route path="update" element={<Update />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <CustomNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

