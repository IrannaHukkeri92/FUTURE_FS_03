import React, { useState, useEffect } from 'react';
import {
  Dumbbell,
  Heart,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Star,
  ChevronDown,
  Menu,
  X,
  Play,
  Check,
  Users,
  Award,
  Activity,
  Calendar,
  Send,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import GymBackground from './assets/weight-training.jpg';


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      id: 1,
      category: 'strength',
      title: 'Personal Training',
      price: '$49/session',
      description: 'PExpert-led personal training tailored to your fitness needs.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300',
      features: ['Customized workout plans', 'Nutrition guidance', 'Progress tracking', 'Flexible scheduling']
    },
    {
      id: 2,
      category: 'cardio',
      title: 'HIIT Classes',
      price: '$29/class',
      description: 'High-intensity interval training to burn calories and build endurance fast.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400&h=300',
      features: ['45-minute sessions', 'All fitness levels', 'Energetic atmosphere', 'Heart rate monitoring']
    },
    {
      id: 3,
      category: 'strength',
      title: 'Weight Training',
      price: '$34/session',
      description: 'Build muscle and strength with our comprehensive weight training programs.',
      image: GymBackground,
      features: ['Free weights area', 'Machine equipment', 'Expert guidance', 'Progressive overload']
    },
    {
      id: 4,
      category: 'yoga',
      title: 'Yoga & Pilates',
      price: '$25/class',
      description: 'Improve flexibility, balance, and mental well-being with our expert instructors.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=300',
      features: ['Multiple styles', 'Beginner friendly', 'Meditation included', 'Premium equipment']
    },
    {
      id: 5,
      category: 'cardio',
      title: 'Cardio Zone',
      price: '$19/day pass',
      description: 'Access to state-of-the-art cardio equipment including treadmills, bikes, and ellipticals.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=400&h=300',
      features: ['Latest equipment', 'Entertainment systems', 'Climate controlled', 'Open 24/7']
    },
    {
      id: 6,
      category: 'nutrition',
      title: 'Nutrition Coaching',
      price: '$59/session',
      description: 'Personalized nutrition plans to complement your fitness journey.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=300',
      features: ['Custom meal plans', 'Macro tracking', 'Supplement advice', 'Weekly check-ins']
    },
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Gym Equipment' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Cardio Area' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Weight Training' },
    { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Yoga Studio' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Training Session' },
    { src: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Locker Rooms' },
    { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Fitness Class' },
    { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Reception Area' },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Member since 2023',
      image: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&q=80&w=100&h=100',
      rating: 5,
      text: 'Amazing gym experience! Trainers are very supportive and helped me gain 6 kg of muscle in just 5 months.'
    },
    {
      name: 'Priya Verma',
      role: 'Member since 2022',
      image: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&q=80&w=100&h=100',
      rating: 5,
      text: 'The atmosphere is very motivating. I reduced 12 kg with proper guidance and diet planning from trainers.'
    },
    {
      name: 'Neha Gupta',
      role: 'Member since 2023',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=100&h=100',
      rating: 5,
      text: 'Best fitness center in my city! Equipment is modern and the HIIT sessions are extremely effective.'
    },
    {
      name: 'Sahil Iyer',
      role: 'Member since 2021',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100&h=100',
      rating: 5,
      text: 'Yoga classes here are excellent. I feel more flexible, calm, and energetic throughout the day.'
    },
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Active Members' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Activity, value: '50+', label: 'Classes Weekly' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Dumbbell className={`h-8 w-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                FitZone
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Join Now
              </button>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920&h=1080"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Limited Offer: 50% Off First Month</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Body & Mind
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join FitZone Gym and unlock your full potential with state-of-the-art equipment,
              expert trainers, and a motivating community. Start your fitness journey today!
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('#contact')}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30 flex items-center space-x-2">
                <span>Book Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button onClick={() => window.open('https://www.youtube.com/watch?v=B7xU6h-94oE', '_blank')}
              className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <stat.icon className="h-8 w-8 text-orange-400 mb-2" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=700"
                alt="About FitZone"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/80">Years of Excellence</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <Award className="h-10 w-10 text-orange-500" />
              </div>
            </div>

            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Your Fitness Journey Starts Here
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At FitZone Gym, we believe fitness is not just about looking good—it's about feeling amazing
                and living your best life. Since 2009, we've been transforming lives through our
                world-class facilities and passionate team of fitness experts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to provide a welcoming, inclusive environment where everyone,
                from beginners to athletes, can achieve their fitness goals. With cutting-edge equipment,
                diverse classes, and personalized training programs, we're more than just a gym—we're a community.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  '24/7 Access',
                  'Expert Trainers',
                  'Premium Equipment',
                  'Nutrition Counseling',
                  'Group Classes',
                  'Recovery Zone'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-orange-100 rounded-full p-2">
                      <Check className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Explore Our Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover a wide range of fitness programs designed to help you achieve your goals.
              From personal training to group classes, we have something for everyone.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { value: 'all', label: 'All Programs' },
              { value: 'strength', label: 'Strength Training' },
              { value: 'cardio', label: 'Cardio' },
              { value: 'yoga', label: 'Yoga' },
              { value: 'nutrition', label: 'Nutrition' },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === item.value
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {item.label}
              </button>

              
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-orange-500 font-bold text-lg">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button onClick={() => scrollToSection('#contact')}
                  className="w-full bg-black text-white py-3 rounded-xl font-semibold shadow-lg !text-white !opacity-100">
                  
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Take a Look Inside
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and see what makes FitZone Gym the ultimate
              destination for fitness enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-full min-h-96' : 'h-48 md:h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.replace('w=600&h=400', 'w=1200&h=800')}
            alt="Gallery Image"
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              What Our Members Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the amazing members of our FitZone family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-white/15"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index
                    ? 'bg-orange-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to start your fitness journey? Reach out to us and our team will be happy to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Iranna Hukkeri"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="irannahukkeri004@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 border border-gray-300"
                >
                  <Send className="h-5 w-5 text-black" />
                  <span className="text-black">Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="h-7 w-7 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">
                    HSR Layout, 818, 2nd–4th Floor, 27th Main Rd,<br />
                     Bengaluru, Karnataka 560102
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Phone className="h-7 w-7 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+91 1234567899<br />Mon-Sun: 6AM - 10PM</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Mail className="h-7 w-7 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">FitZonestudio@gmail.com<br />support@FitZonestudio.com</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <Clock className="h-7 w-7 text-purple-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 5AM - 11PM<br />Weekends: 6AM - 10PM</p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.35989968476118!3d34.07356418060241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf20e4c82873%3A0x207a1983d416a6c6!2sDowntown%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-black/90 text-xl mb-8">
            Join FitZone Gym today and get your first month 50% off. Limited spots available!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('#contact')}
            className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>Book Free Trial</span>
            </button>
            <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Dumbbell className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">FitZone</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your body and mind at FitZone Gym. We provide the best fitness experience
                with top-notch equipment and expert trainers.
              </p>
              <div className="flex space-x-4">
                {/* <a href="https://www.facebook.com" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a> */}
                <a href="https://www.instagram.com/saketgokhleupdates" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                {/* <a href="https://twitter.com" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a> */}
                <a href="https://www.youtube.com/@SaketGokhaleUpdates/featured" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            




            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers and fitness tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-xl font-semibold transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 FitZone Gym. All rights reserved. Made with <Heart className="h-4 w-4 text-red-500 inline" /> for fitness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;