'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "AliGenix transformed our online presence completely. Their SEO strategies increased our organic traffic by 300% in just 4 months. The team's expertise in both traditional SEO and AI-driven optimization is unmatched.",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20headshot%20with%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20corporate%20background%2C%20professional%20lighting%2C%20contemporary%20business%20portrait%20style%2C%20friendly%20and%20approachable%20appearance%2C%20high-quality%20executive%20photo&width=80&height=80&seq=testimonial-1&orientation=squarish"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthCorp",
      content: "The prompt engineering services from AliGenix revolutionized our content creation process. We now produce high-quality, SEO-optimized content 5x faster while maintaining our brand voice. Incredible results!",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20marketing%20director%20headshot%20with%20warm%20smile%2C%20modern%20business%20suit%2C%20clean%20office%20background%2C%20professional%20corporate%20portrait%2C%20confident%20and%20friendly%20demeanor%2C%20high-quality%20business%20photography&width=80&height=80&seq=testimonial-2&orientation=squarish"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "EcomPro Solutions",
      content: "Working with AliGenix was a game-changer for our e-commerce business. Their AI chatbot optimization increased our customer satisfaction by 90% and reduced response times dramatically. Outstanding service!",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20female%20founder%20headshot%20with%20confident%20expression%2C%20modern%20business%20attire%2C%20clean%20contemporary%20background%2C%20professional%20lighting%2C%20successful%20entrepreneur%20portrait%2C%20approachable%20and%20professional%20appearance&width=80&height=80&seq=testimonial-3&orientation=squarish"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with AliGenix.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="absolute top-6 right-6 text-4xl text-blue-200">
                  <i className="ri-double-quotes-r"></i>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}