import React from 'react';
import { Footer, Navbar } from './components';
import { AppRouter } from './router';

function CalcApp() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default CalcApp;