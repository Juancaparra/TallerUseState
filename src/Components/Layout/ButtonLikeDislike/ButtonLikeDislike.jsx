import React, { useState } from 'react';

export const ButtonLikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
      <button onClick={() => setDislikes(dislikes + 1)} style={{ marginLeft: '10px' }}>
        Dislike ({dislikes})
      </button>
    </div>
  );
};