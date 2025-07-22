import React from 'react';

const images = [
  { src: '/images/ftp-poster.png', label: 'FTP Poster' },
  { src: 'https://source.unsplash.com/random/800x1000?sig=2', label: 'Nature Scene' },
  { src: 'https://source.unsplash.com/random/800x600?sig=3', label: 'Urban' },
  { src: 'https://source.unsplash.com/random/800x900?sig=4', label: 'Mood' },
  { src: 'https://source.unsplash.com/random/800x1100?sig=5', label: 'Texture' },
];

const Gallery = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Masonry Grid Gallery
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map(({ src, label }, index) => (
            <div
              key={index}
              className="relative w-full break-inside-avoid group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={src}
                alt={label}
                className="w-full transition duration-300 ease-in-out group-hover:blur-sm"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
