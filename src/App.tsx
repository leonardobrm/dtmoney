import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};

export default App;
