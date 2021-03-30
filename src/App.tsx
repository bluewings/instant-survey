import React from 'react';
import Main from './components/Main';
import Firebase from './providers/Firebase';

function App() {
  return (
    <Firebase>
      <Main />
    </Firebase>
  );
}

export default App;
