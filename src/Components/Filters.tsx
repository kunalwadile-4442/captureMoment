// Components/Filters.tsx

import React, { useState } from 'react';
import '../App.css'; // Import custom CSS for Camera component
// import DogFaceFilter from './DogFaceFilter'; // Import any custom filters you created

interface FiltersProps {
  applyFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ applyFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>('none');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    applyFilter(filter);
  };

  const filters = [
    { name: 'None', value: 'none' },
    { name: 'Grayscale', value: 'grayscale(100%)' },
    { name: 'Sepia', value: 'sepia(100%)' },
    { name: 'Invert', value: 'invert(100%)' },
    { name: 'Blur', value: 'blur(5px)' },
    { name: 'Brightness', value: 'brightness(150%)' },
    { name: 'Contrast', value: 'contrast(200%)' },
    { name: 'Saturate', value: 'saturate(200%)' },
    { name: 'Hue Rotate', value: 'hue-rotate(90deg)' },
    { name: 'Opacity', value: 'opacity(0.5)' },
    
    // Add more filters as needed
  ];

  return (
    <div className="filters-container mt-3">
      <h3>Select a Filter:</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {filters.map(({ name, value }) => (
          <button 
            key={value}
            onClick={() => handleFilterClick(value)} 
            className={`btn ${activeFilter === value ? 'btn-success' : 'btn-secondary'} mx-1 my-1`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
