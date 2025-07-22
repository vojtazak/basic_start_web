import React from 'react';

const bio = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 shadow-lg"
            src="/images/person.jpg"
            alt="Profile"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-2xl font-bold text-gray-900">Jane Doe</h2>
          <p className="mt-2 text-gray-600">
            Jane is a creative photographer with a passion for capturing unique moments. Her work blends storytelling and visual art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default bio;
