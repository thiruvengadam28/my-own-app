// components/DateTimeDisplay.js
import { useState, useEffect } from 'react';

export default function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.time}>{dateTime.toLocaleTimeString()}</h3>
      <p style={styles.date}>{dateTime.toDateString()}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#eef6ff',
    padding: '10px',
    borderRadius: '10px',
    marginTop: '20px',
  },
  time: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#003366',
  },
  date: {
    margin: 0,
    fontSize: '1rem',
    color: '#555',
  },
};
