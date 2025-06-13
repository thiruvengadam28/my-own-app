// components/ImageInfoBox.js
import { useState, useEffect } from 'react';

export default function ImageInfoBox({ file }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (file) {
      setInfo({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        type: file.type,
      });
    } else {
      setInfo(null);
    }
  }, [file]);

  return (
    <div style={styles.box}>
      {info ? (
        <>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Size:</strong> {info.size}</p>
          <p><strong>Type:</strong> {info.type}</p>
        </>
      ) : (
        <p>No image selected.</p>
      )}
    </div>
  );
}

const styles = {
  box: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#fff8e1',
    border: '1px solid #f0c36d',
    borderRadius: '8px',
  },
};