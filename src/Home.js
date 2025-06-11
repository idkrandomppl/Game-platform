import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/games.json')
      .then((res) => res.json())
      .then(setGames);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
      {games.map((game) => (
        <Link
          key={game.id}
          to={`/games/${game.id}`}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <img src={game.thumbnail} alt={game.title} style={{ width: '100%', borderRadius: '4px' }} />
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </Link>
      ))}
    </div>
  );
}
