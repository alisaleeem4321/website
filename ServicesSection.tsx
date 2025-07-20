'use client';

export default function ServicesSection() {
  const seoServices = [
    {
      icon: 'ri-search-line',
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis and competitor research to identify high-value opportunities.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Content Strategy',
      description: 'Data-driven content planning that aligns with search intent and user behavior.'
    },
    {
      icon: 'ri-settings-line',
      title: 'On-Page Optimization',
      description: 'Technical optimization of meta tags, headers, and content structure for better rankings.'
    },
    {
      icon: 'ri-code-line',
      title: 'Technical SEO',
      description: 'Site speed optimization, mobile responsiveness, and crawlability improvements.'
    },
    {
      icon: 'ri-quill-pen-line',
      title: 'Content Writing',
      description: 'SEO-optimized content creation that engages users and satisfies search algorithms.'
    }
  ];

  const promptServices = [
    {
      icon: 'ri-chat-3-line',
      title: 'Custom ChatGPT Prompts',
      description: 'Tailored prompts designed for specific business needs and use cases.'
    },
    {
      icon: 'ri-flow-chart',
      title: 'Automation Prompt Flows',
      description: 'Complex prompt sequences for automated workflows and decision-making processes.'
    },
    {
      icon: 'ri-robot-line',
      title: 'AI Chatbot Tuning',
      description: 'Fine-tuning chatbot responses for better user experience and accuracy.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Creative Prompt Writing',
      description: 'Innovative prompts for creative content generation and problem-solving.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions that combine traditional SEO excellence with cutting-edge AI prompt engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SEO Services */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-search-eye-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SEO Services</h3>
              </div>
              
              <div className="space-y-6">
                {seoServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className={`${service.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Engineering Services */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-brain-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Prompt Engineering</h3>
              </div>
              
              <div className="space-y-6">
                {promptServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className={`${service.icon} text-blue-700`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}