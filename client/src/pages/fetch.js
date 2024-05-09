import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch('/upload/images.jpeg')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  console.log(imageUrl);

  return (
    <div className="App">
      {imageUrl && <img src={imageUrl} alt="Uploaded JPEG Image" />}
    </div>
  );
  
}

export default App;
