import { useState } from 'react';
import Link from 'next/link';
import DateTimeDisplay from '@/components/datetimedisplay';
import ImageInfoBox from '@/components/imageinfobox';

export default function UploadPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <h1>📤 Upload Image for AI Analysis</h1>
      <DateTimeDisplay />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div className="preview-box">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="preview-img" />
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
