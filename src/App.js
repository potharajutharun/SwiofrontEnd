import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';
import RouterLayout from './components/RouterLayout';
import Home from './components/Home';
import Sleeve from './components/Sleeve';
import Help from './components/Help';
import Umbra from './components/Umbra';
import Update from './components/Update';
import Payment from './components/Payment';
import History from './components/History';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout/>}>
        <Route index element={<Home/>} ></Route>
        <Route path="help" element={<Help/>}></Route>
        <Route path="sleeve" element={<Sleeve/>}></Route>
        <Route path="umbra" element={<Umbra/>}></Route>
        <Route path="update" element={<Update/>}></Route>
        <Route path="/sleeve/payment" element={<Payment/>}></Route>
        <Route path="/sleeve/payment/History" element={<History/>}></Route>

      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

