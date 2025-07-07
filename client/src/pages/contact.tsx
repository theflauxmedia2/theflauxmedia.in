import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[var(--flaux-black)] text-[var(--flaux-white)]">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-[var(--flaux-orange)] hover:text-white transition-colors duration-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            Ready to transform your brand? Let's start a conversation about your project.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[var(--flaux-gray)] rounded-xl p-8 border border-[var(--flaux-light-gray)]">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="new-project">New Project</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[var(--flaux-orange)] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Let's talk about your project</h2>
                <p className="text-gray-400 mb-8">
                  Whether you're looking to launch a new brand, redesign your website, or need ongoing digital marketing support, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-400">hello@flauxmedia.com</p>
                    <p className="text-gray-400">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (234) 567-8900</p>
                    <p className="text-gray-400">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office</h3>
                    <p className="text-gray-400">123 Creative Avenue</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                    <p className="text-gray-400">Emergency support available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive brand overhaul could take 2-3 months. We'll provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you work with startups?",
                  answer: "Absolutely! We love working with startups and have special packages designed for growing businesses. We understand budget constraints and can create scalable solutions that grow with your company."
                },
                {
                  question: "What's included in your retainer packages?",
                  answer: "Our retainer packages include ongoing support, regular updates, performance monitoring, and priority access to our team. We'll customize the package based on your specific needs and goals."
                },
                {
                  question: "Can you help with existing projects?",
                  answer: "Yes! We can audit your existing digital presence, identify areas for improvement, and help optimize your current marketing efforts. We're experienced in taking over mid-project work."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-[var(--flaux-light-gray)] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}