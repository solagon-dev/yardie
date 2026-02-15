'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      title: 'Landscape Design',
      description: 'Custom landscape designs that blend beauty with functionality, tailored to your space and lifestyle.',
      icon: '🌿',
    },
    {
      title: 'Hardscaping',
      description: 'Expert installation of patios, walkways, retaining walls, and outdoor structures that stand the test of time.',
      icon: '🏗️',
    },
    {
      title: 'Garden Planning',
      description: 'Strategic garden layouts featuring native plants, sustainable practices, and year-round visual interest.',
      icon: '🌺',
    },
    {
      title: 'Outdoor Living Spaces',
      description: 'Transform your backyard into an extension of your home with custom outdoor kitchens, fire pits, and seating areas.',
      icon: '🔥',
    },
    {
      title: 'Water Features',
      description: 'Add tranquility with professionally designed ponds, fountains, and water gardens.',
      icon: '💧',
    },
    {
      title: 'Lighting Design',
      description: 'Illuminate your landscape with thoughtfully placed lighting that enhances safety and ambiance.',
      icon: '💡',
    },
  ];

  const portfolio = [
    {
      title: 'Modern Minimalist Yard',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    },
    {
      title: 'Rustic Garden Retreat',
      category: 'Landscape Design',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop',
    },
    {
      title: 'Contemporary Patio',
      category: 'Hardscaping',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    },
    {
      title: 'Lush Paradise Garden',
      category: 'Garden Planning',
      image: 'https://images.unsplash.com/photo-1599619870888-2d31fdda2e1a?w=800&h=600&fit=crop',
    },
    {
      title: 'Outdoor Entertainment Hub',
      category: 'Outdoor Living',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    },
    {
      title: 'Zen Water Garden',
      category: 'Water Features',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up opacity-0">
            Transform Your
            <br />
            <span className="text-moss-400">Outdoor Space</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-0 delay-200">
            Expert exterior design and landscaping services that bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-300">
            <a
              href="#contact"
              className="bg-moss-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-moss-800 transition-all hover:shadow-2xl hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="#portfolio"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Comprehensive exterior design solutions tailored to your unique vision and space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-stone-50 rounded-2xl p-8 hover:bg-moss-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-2xl font-semibold text-stone-900 mb-3 group-hover:text-moss-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Explore our portfolio of stunning outdoor transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-moss-400 text-sm font-semibold mb-1">{project.category}</p>
                  <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Crafting Outdoor Spaces Since 2010
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                At Yardie, we believe that your outdoor space should be an extension of your home—a
                place where beauty meets functionality. With over a decade of experience in exterior
                design and landscaping, we've transformed hundreds of ordinary yards into
                extraordinary outdoor living spaces.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our team of skilled designers and craftsmen work closely with each client to
                understand their vision, lifestyle, and budget. From initial concept to final
                installation, we're committed to delivering exceptional results that exceed
                expectations.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="font-display text-4xl font-bold text-moss-700 mb-2">500+</div>
                  <div className="text-sm text-stone-600">Projects Completed</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-moss-700 mb-2">13+</div>
                  <div className="text-sm text-stone-600">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-moss-700 mb-2">98%</div>
                  <div className="text-sm text-stone-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop"
                alt="Beautiful landscape design"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-moss-700 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="font-display text-lg font-semibold mb-2">
                  "Transformed our backyard into a paradise!"
                </p>
                <p className="text-sm text-moss-100">— Sarah & Michael T.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                Ready to transform your outdoor space? Get in touch with us today for a free
                consultation. We'll discuss your vision, explore possibilities, and create a
                custom plan that brings your dream landscape to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-moss-700 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-stone-400">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-moss-700 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-stone-400">info@yardiedesign.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-moss-700 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-stone-400">Mon-Fri: 8am-6pm, Sat: 9am-4pm</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-moss-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-moss-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-moss-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-moss-500 transition-colors resize-none"
                    placeholder="Describe your vision for your outdoor space..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-moss-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-moss-800 transition-all hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
