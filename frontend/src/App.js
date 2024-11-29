import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')  // Senza indicare http://localhost o URL specifici
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Errore:', error));
  }, []);

  return (
    <div>
      <h1>Frontend React</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

