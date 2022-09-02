import React from 'react';
// import './App.css';
import {Chatbot} from './components/Chatbot';
// import './styles/index.css';
import './styles/estilosg.css';

function App() {
   document.domain="pruebachat--tecmonterreymxqa.myvtex.com";
  console.log("domino", document.domain);
  return (
    <div >
      <Chatbot/>
    </div>
  );
}

export default App;
