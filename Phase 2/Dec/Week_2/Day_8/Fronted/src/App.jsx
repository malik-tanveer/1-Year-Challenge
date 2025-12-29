import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/post');
        setClients(response.data);
        setLoading(false);
      } catch (err) {
        setError('API Error');
        setLoading(false);
        console.error(err);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <div style={{
          border: '8px solid #f3f3f3',
          borderTop: '8px solid #3498db',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          margin: '0 auto 20px'
        }}></div>
        <h2>Loading ...</h2>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>
        <h1>Error!</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px'}}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        My Clients Data ({clients.length})
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {clients.map((client) => (
          <div
            key={client._id}
            style={{
              padding: '20px',
              color : "white",
              backgroundColor: '#df8888ff',
            }}
          >
            <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>
              {client.name}
            </h2>
            <p><strong>Username:</strong>{client.username}</p>
            <p><strong>Bio:</strong> {client.bi}</p>
            <p><strong>Followers:</strong> {client.followerCount}</p>
            <p><strong>Following:</strong> {client.followingCount}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            {client.website && (
              <a 
                href={client.website} 
                rel="noopener noreferrer"
                style={{ color: '#3498db', textDecoration: 'none' }}
              >
                Websites 
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;