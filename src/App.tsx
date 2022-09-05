import React from 'react';
// import './App.css';
import {Chatbot} from './components/Chatbot';
// import './styles/index.css';
import './styles/estilosg.css';

function App() {
  // window.addEventListener('message', (event) => {
  //   // Reject all messages except ones from https://parent.example.com
  //   if (event.origin !== 'https://pruebachat--tecmonterreymxqa.myvtex.com/') return;
  
  //   // Do a DOM manipulation on https://video.example.com.
  
  //   // Send a success message to https://parent.example.com
  //   event.source.postMessage('succeeded', event.origin);
  // });


  //  document.domain="pruebachat--tecmonterreymxqa.myvtex.com";
  console.log("domino", document.domain);
  return (
    <div >
      <Chatbot/>
    </div>
  );
}

export default App;
