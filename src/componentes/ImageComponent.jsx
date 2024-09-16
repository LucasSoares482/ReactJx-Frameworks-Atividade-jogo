import React from 'react';
import myImage from './path/to/your/image.jpg';

const ImageComponent = () => {
  return (
    <div>
      <img src={myImage} alt="Descrição da imagem" />
    </div>
  );
};

export default ImageComponent;
