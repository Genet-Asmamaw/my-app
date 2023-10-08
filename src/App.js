//display some text using App componet on the browser
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h2>hey, I am here</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;