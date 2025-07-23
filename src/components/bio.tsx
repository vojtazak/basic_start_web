import React from 'react';

const Bio = () => {
  return (
    <section className="bg-white pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 shadow-lg"
              src="/images/profile.png"
              alt="Profile"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Jane Doe</h2>
            <p className="mt-3 text-gray-600 leading-relaxed text-lg">
              Jane is a creative photographer with a passion for capturing unique moments. Her work blends storytelling and visual art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;