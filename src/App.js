import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

 useEffect(() => {
  fetch('http://ad03846467aba42aca5469bb1b252f4c-1134771838.ap-south-1.elb.amazonaws.com/api/message')
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.log(err));
}, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>React Frontend</h1>

      <h2>Message from Backend:</h2>

      <p>{message}</p>
    </div>
  );
}

export default App;
