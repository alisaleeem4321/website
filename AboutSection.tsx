'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AliGenix
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AliGenix is a future-forward digital service agency offering cutting-edge SEO optimization and AI prompt engineering solutions to help businesses thrive in the search-first and AI-driven era.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We combine traditional SEO expertise with innovative AI technologies to deliver unprecedented results for our clients. Our team of specialists understands both the technical aspects of search optimization and the nuanced art of prompt engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20team%20of%20digital%20marketing%20experts%20working%20with%20AI%20technology%20and%20SEO%20analytics%2C%20modern%20office%20setting%20with%20multiple%20monitors%20displaying%20search%20rankings%20and%20artificial%20intelligence%20dashboards%2C%20collaborative%20workspace%20with%20diverse%20professionals%2C%20clean%20corporate%20environment%20with%20blue%20and%20white%20color%20scheme%2C%20futuristic%20tech%20atmosphere&width=600&height=400&seq=about-team&orientation=landscape"
                alt="AliGenix Team"
                className="rounded-lg shadow-2xl object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}