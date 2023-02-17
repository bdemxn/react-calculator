import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, GeneralFunc } from '../pages';

function AppRouter() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/general'} element={<GeneralFunc />} />
    </Routes>
  );
}

export default AppRouter;