'use client';

export default function PortfolioSection() {
  const caseStudies = [
    {
      title: "E-commerce Traffic Transformation",
      description: "Doubled organic traffic in 3 months for a major e-commerce platform through strategic SEO optimization and content restructuring.",
      metrics: [
        { label: "Traffic Increase", value: "150%" },
        { label: "Keyword Rankings", value: "Top 3" },
        { label: "Conversion Rate", value: "+45%" }
      ],
      category: "SEO",
      image: "https://readdy.ai/api/search-image?query=E-commerce%20website%20analytics%20dashboard%20showing%20dramatic%20traffic%20growth%20charts%20and%20SEO%20performance%20metrics%2C%20modern%20interface%20with%20blue%20and%20green%20growth%20indicators%2C%20clean%20professional%20design%20with%20upward%20trending%20graphs%2C%20digital%20marketing%20success%20visualization%2C%20bright%20clean%20background&width=400&height=300&seq=portfolio-1&orientation=landscape"
    },
    {
      title: "AI Chatbot Optimization",
      description: "Trained AI bot for 90% accuracy in customer service responses, reducing response time by 70% while maintaining human-like interaction quality.",
      metrics: [
        { label: "Response Accuracy", value: "90%" },
        { label: "Response Time", value: "-70%" },
        { label: "Customer Satisfaction", value: "4.8/5" }
      ],
      category: "AI",
      image: "https://readdy.ai/api/search-image?query=Advanced%20AI%20chatbot%20interface%20with%20sophisticated%20conversation%20flows%20and%20high%20accuracy%20metrics%2C%20futuristic%20chat%20interface%20with%20blue%20and%20white%20color%20scheme%2C%20modern%20AI%20technology%20dashboard%20showing%20performance%20statistics%2C%20clean%20tech%20visualization%20with%20neural%20network%20elements&width=400&height=300&seq=portfolio-2&orientation=landscape"
    },
    {
      title: "Content Strategy Revolution",
      description: "Implemented AI-powered content generation system that increased content production by 200% while maintaining quality and SEO performance.",
      metrics: [
        { label: "Content Output", value: "+200%" },
        { label: "Engagement Rate", value: "+85%" },
        { label: "Time to Publish", value: "-60%" }
      ],
      category: "Content",
      image: "https://readdy.ai/api/search-image?query=Content%20management%20system%20with%20AI-powered%20writing%20tools%20and%20analytics%2C%20modern%20editorial%20dashboard%20with%20content%20performance%20metrics%2C%20clean%20interface%20showing%20increased%20productivity%20and%20engagement%20rates%2C%20professional%20blue%20and%20white%20design%20with%20writing%20automation%20features&width=400&height=300&seq=portfolio-3&orientation=landscape"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve remarkable growth through our innovative SEO and AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <div className="space-y-3">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-bold text-blue-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}