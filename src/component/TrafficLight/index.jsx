import React, { useState } from 'react';



const TrafficLight = () => {
  const [color, setColor] = useState('white');

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className='main-div'>
      <div onClick={() => handleColorChange('green')} className={`light ${color === 'green' ? 'active1' : ''}`}></div>
      <div onClick={() => handleColorChange('yellow')} className={`light ${color === 'yellow' ? 'active2' : ''}`}></div>
      <div onClick={() => handleColorChange('red')} className={`light ${color === 'red' ? 'active3' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;

