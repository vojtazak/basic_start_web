
import React from 'react';

const images = [
  'https://source.unsplash.com/random/800x1200?sig=1',
  'https://source.unsplash.com/random/800x1000?sig=2',
  'https://source.unsplash.com/random/800x600?sig=3',
  'https://source.unsplash.com/random/800x900?sig=4',
  'https://source.unsplash.com/random/800x1100?sig=5',
];

 const Gallery = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Masonry Grid Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full rounded-lg shadow-sm break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;