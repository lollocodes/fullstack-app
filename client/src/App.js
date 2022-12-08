import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  console.log(backendData)
 
  return (
    <div className="App">
      <h1>Hello</h1>
      {(typeof backendData.users === 'undefined') ? (
        <p>...Loading</p>
      ) : (
        backendData.users.map((user, id) => (
          <p key={id}>{user}</p>
        ))
      )
      }
    
    </div>
  );
}

export default App;
