import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageBuffer, setImageBuffer] = useState(null);
  const [blobUrl, setBlobUrl] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const buffer = new Uint8Array(reader.result);
        setImageBuffer(buffer);

        const blob = new Blob([buffer], { type: file.type });
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {blobUrl && <img src={blobUrl} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;
