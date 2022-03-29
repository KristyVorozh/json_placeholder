import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListUsers from './pages/ListUsers'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListUsers />} />
        </Routes>
      </BrowserRouter>  );
}

export default App;
