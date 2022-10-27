import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Footer from "./Components/footer/Footer";
import Chat from "./Components/chat/Chat";
import Pages from './Pages/Pages';

const App = () => {
  return (
    <>
    <Header />
    <Pages />
    <Footer />
    <Chat />
    </>
  );
}

export default App;
