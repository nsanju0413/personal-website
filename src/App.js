// src/App.js

import React from 'react';
import './App.css';
import DevProfile from './components/DevProfile';

function App() {
  // Replace 'YOUR_API_KEY' and 'YOUR_CHANNEL_ID' with your actual API key and channel ID
  const apiKey = 'AIzaSyBUCP8bKn2aigAGHdahtLT89gecIPgzCcc';
  const channelId = 'UCscSdWvWU0SeKvLRHZRY1hQ';

  return (
    <div className="App">
      <header className="App-header">
        <DevProfile apiKey={apiKey} channelId={channelId} />
      </header>
    </div>
  );
}

export default App;
