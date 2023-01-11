import React from 'react';
import {Helmet} from 'react-helmet';
// import './App.css';
import {Chatbot} from './components/Chatbot';
// import './styles/index.css';
import './styles/estilosg.css';

function App() {
  return (
    <div >
      <Helmet>
        <meta http-equiv="Content-Security-Policy"  content="frame-ancestors *" />
        <meta http-equiv="Content-Security-Policy"  content="frame-src *" />
        Content-Security-Policy: frame-src *; frame-ancestors *;
      </Helmet>
    <Chatbot/>
    </div>
  );
}

export default App;
