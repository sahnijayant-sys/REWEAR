import React, { useState } from 'react';
import { Mail, MessageSquare, ChevronDown, CheckCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/products';
import { useShop } from '../context/ShopContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Please choose or enter a subject';
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save contact inquiry in localStorage
    try {
      const current = JSON.parse(localStorage.getItem('rewear_contact_inquiries') || '[]');
      localStorage.setItem('rewear_contact_inquiries', JSON.stringify([
        ...current,
        { ...formData, submittedAt: new Date().toISOString() }
      ]));
    } catch {}

    setIsSent(true);
    showToast('Your inquiry has been received by our studio team.', 'success');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-[#F7F3EC] pb-24">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block">
            Customer Care & Curation Assistance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F]">
            Contact Studio & FAQs
          </h1>
          <p className="text-xs sm:text-sm text-[#575249] max-w-xl mx-auto">
            Have questions about specific garment measurements, fabric provenance, or an existing order? 
            Our team is here to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#777A55] font-semibold block mb-1">
                Reach Out
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F]">
                Send Us a Note
              </h2>
              <p className="text-xs text-[#575249] mt-2">
                We typically reply within 24 hours on business days.
              </p>
            </div>

            {isSent ? (
              <div className="bg-white border border-[#777A55] p-8 text-center space-y-4 shadow-xs">
                <div className="w-14 h-14 bg-[#777A55]/15 text-[#777A55] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                  Message Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#575249] max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. We have logged your inquiry regarding "{formData.subject}" and will respond to <span className="font-mono text-[#29251F]">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 border border-[#29251F] text-xs uppercase tracking-widest text-[#29251F] hover:bg-[#E6DDD0] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-[#E6DDD0] p-6 sm:p-8 shadow-xs">
                
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#575249] font-medium mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Maya Iyer"
                    className={`w-full px-4 py-2.5 bg-[#FCFAF6] border ${errors.name ? 'border-red-500' : 'border-[#D4C7B5]'} text-xs sm:text-sm text-[#29251F] focus:outline-none focus:border-[#777A55]`}
                  />
                  {errors.name && <p className="text-red-600 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#575249] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="maya@example.com"
                    className={`w-full px-4 py-2.5 bg-[#FCFAF6] border ${errors.email ? 'border-red-500' : 'border-[#D4C7B5]'} text-xs sm:text-sm text-[#29251F] focus:outline-none focus:border-[#777A55]`}
                  />
                  {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#575249] font-medium mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-[#FCFAF6] border ${errors.subject ? 'border-red-500' : 'border-[#D4C7B5]'} text-xs sm:text-sm text-[#29251F] focus:outline-none focus:border-[#777A55]`}
                  >
                    <option value="">Select a topic...</option>
                    <option value="Garment Measurement & Sizing Inquiry">Garment Measurement & Sizing Inquiry</option>
                    <option value="Condition Clarification or Flaw Photos">Condition Clarification or Flaw Photos</option>
                    <option value="Order Tracking & Dispatch Status">Order Tracking & Dispatch Status</option>
                    <option value="Store Credit Return Request">Store Credit Return Request (Within 48h)</option>
                    <option value="Press, Styling & Archival Collaboration">Press, Styling & Archival Collaboration</option>
                  </select>
                  {errors.subject && <p className="text-red-600 text-[11px] mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#575249] font-medium mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about the garment ID, measurement questions, or your order inquiry..."
                    className={`w-full px-4 py-2.5 bg-[#FCFAF6] border ${errors.message ? 'border-red-500' : 'border-[#D4C7B5]'} text-xs sm:text-sm text-[#29251F] focus:outline-none focus:border-[#777A55]`}
                  />
                  {errors.message && <p className="text-red-600 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* Studio Info Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#575249] pt-2">
              <div className="p-4 bg-[#FCFAF6] border border-[#E6DDD0] flex items-start gap-3">
                <Mail size={16} className="text-[#777A55] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#29251F] block uppercase tracking-wider text-[11px]">Direct Support</strong>
                  <span>hello@rewear.store</span>
                </div>
              </div>
              <div className="p-4 bg-[#FCFAF6] border border-[#E6DDD0] flex items-start gap-3">
                <Clock size={16} className="text-[#777A55] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#29251F] block uppercase tracking-wider text-[11px]">Studio Hours</strong>
                  <span>Mon – Sat: 10:00 – 18:00 IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Frequently Asked Questions Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#777A55] font-semibold block mb-1">
                Help & Clarifications
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-[#575249] mt-2">
                Everything you need to know about purchasing pre-loved garments at Rewear.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E6DDD0] transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#29251F] hover:text-[#777A55] transition-colors"
                    >
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#777A55] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#575249] leading-relaxed border-t border-[#E6DDD0]/60 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
