'use client';

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20technology%20workspace%20with%20futuristic%20blue%20holographic%20displays%20showing%20SEO%20analytics%20and%20AI%20neural%20networks%2C%20clean%20minimalist%20office%20environment%20with%20floating%20data%20visualizations%2C%20electric%20blue%20and%20white%20color%20scheme%2C%20professional%20tech%20atmosphere%2C%20sophisticated%20digital%20transformation%20concept%2C%20clean%20background%20with%20subtle%20geometric%20patterns&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock Growth with
            <span className="text-blue-300"> SEO + Prompt Engineering</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
            AliGenix helps brands rank higher and think smarter using AI-driven strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Get Started
            </button>
            <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all whitespace-nowrap cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-blue-300"></i>
      </div>
    </section>
  );
}