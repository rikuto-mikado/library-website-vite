import React from 'react';

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="hero" className="w-full">
        {/* Title Section */}
        <div className="text-center py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-800 mb-4 tracking-tight leading-none">
              Community Learning Center
            </h1>
          </div>
        </div>
        

        {/* Full-width Library Image */}
        <div className="w-full relative">
          <img
            src="/images/library-background-desktop.png"
            alt="Library"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-inter text-gray-800 mb-4">
              What We Do
          </h1>

          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Speech and Debate is where we'll learn to think critically, speak 
            confidently, and engage in exciting competitions. Here's 
            everything you need to know:
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;