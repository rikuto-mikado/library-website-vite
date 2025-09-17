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
            <p className="text-xl md:text-2xl font-inter font-light text-gray-600 mt-6">
              Where knowledge meets community
            </p>
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
              What Is This ?
          </h1>

          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            A place where stories come alive, minds expand, and communities connect. 
            Discover endless possibilities through books, resources, and shared knowledge 
            in our welcoming space designed for learning and growth.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="text-center p-6">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Discover Your Next Adventure
              </h3>
              <p className="text-gray-600">
                From bestsellers to hidden gems, explore our vast collection 
                of books, audiobooks, and digital resources waiting to be discovered.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Community Events & Programs
              </h3>
              <p className="text-gray-600">
                Join book clubs, attend author readings, participate in workshops, 
                and connect with fellow book lovers in our vibrant community space.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Study & Work Spaces
              </h3>
              <p className="text-gray-600">
                Find your perfect spot in our quiet reading rooms, collaborative 
                study areas, or private booths equipped with power and Wi-Fi.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Digital Resources & Support
              </h3>
              <p className="text-gray-600">
                Access online databases, e-books, research tools, and get help 
                from our friendly librarians with any questions or projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;