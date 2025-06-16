import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';
import ImageInfoBox from '../components/ImageInfoBox';

const DateTimeDisplay = dynamic(() => import('../components/DateTimeDisplay'), { ssr: false });

export default function UploadPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <h1>📤 Upload Image for AI Analysis</h1>
      <DateTimeDisplay />
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ margin: '16px 0' }} />

      <div className="preview-box">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="preview-img" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }} />
        ) : (
          <p>🖼️ Image preview will appear here.</p>
        )}
      </div>

      <ImageInfoBox file={selectedFile} />

      <Link href="/result">
        <button style={{ marginTop: '20px' }}>Analyze Image</button>
      </Link>
    </div>
  );
}
