// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      if (!updated) clearInterval(timer);
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!timeLeft) {
    return <h1 style={{ textAlign: 'center' }}>⏰ Tempo esgotado!</h1>;
  }

return (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
    {Object.entries(timeLeft).map(([label, value]) => (
      <div key={label} style={{
        background: '#282c34',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        minWidth: '80px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{value}</div>
        <div style={{ textTransform: 'capitalize', fontSize: '0.9rem' }}>{label}</div>
      </div>
    ))}
  </div>
);
}

export default CountdownTimer;
