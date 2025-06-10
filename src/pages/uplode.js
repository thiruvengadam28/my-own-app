import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div className="preview-box">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="preview-img" />
        ) : (
          <p>Image preview will appear here.</p>
        )}
      </div>
      <Link href="/result">
        <button style={{ marginTop: '20px' }}>Analyze Image</button>
      </Link>
    </div>
  );
}