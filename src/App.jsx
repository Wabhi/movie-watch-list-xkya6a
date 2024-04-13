// App.js
import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <Login />
      <SignUp />
    </>
  );
};

export default App;
