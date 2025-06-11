import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/games.json')
      .then((res) => res.json())
      .then((games) => {
        const found = games.find((g) => g.id === id);
        setGame(found);
      });
  }, [id]);

  if (!game) return <p>Loading or game not found...</p>;

  return (
    <div>
      <Link to="/">← Back to games</Link>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <iframe
        src={game.embedUrl}
        width="100%"
        height="600"
        style={{ border: 'none', borderRadius: '8px' }}
        title={game.title}
        allowFullScreen
      />
    </div>
  );
}
