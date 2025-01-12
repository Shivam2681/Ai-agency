'use client';

import {
  Brain,
  ChevronRight,
  Star,
  Users,
  Zap,
  Settings,
  LineChart,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1E30] to-black text-white relative">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10">
        {/* Navigation */}
        {/* <nav className="sticky top-0 z-50 bg-[#1A1A2E]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Brain className="w-8 h-8 text-[#FF007A]" />
                <div className="hidden md:flex space-x-8">
                  <a href="/" className="hover:text-[#FF007A] transition-colors">Home</a>
                  <a href="/about" className="text-[#FF007A]">About</a>
                  <a href="/services" className="hover:text-[#FF007A] transition-colors">Services</a>
                  <a href="/pricing" className="hover:text-[#FF007A] transition-colors">Pricing</a>
                  <a href="/contact" className="hover:text-[#FF007A] transition-colors">Contact</a>
                </div>
              </div>
              <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </nav> */}

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#00FFFF]">
              Redefining the Future of Business with AI
            </h1>
            <p className="text-[#B0B0B0] text-xl mb-12">
              Empowering businesses of every size to adopt AI today, for a smarter, cost-efficient, and more productive tomorrow.
            </p>
            <div className="relative rounded-xl overflow-hidden border-2 border-[#8A2BE2] shadow-[0_0_30px_rgba(138,43,226,0.3)] aspect-video">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-[#1D1E30]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Vision: Empowering Businesses to Harness the Power of AI
            </h2>
            <Card className="p-8 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)]">
              <p className="text-[#B0B0B0] text-lg text-center leading-relaxed">
                At AI Automation Agency, we envision a future where businesses of all sizes seamlessly integrate artificial intelligence into their daily operations. Our mission is to democratize AI by making it accessible, scalable, and transformative.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How We Work: A Partnership for Growth
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  { icon: Users, title: 'Collaborative Partnership', desc: 'We work closely with your team to understand your processes, challenges, and goals.' },
                  { icon: Settings, title: 'Tailored Solutions', desc: 'Custom AI solutions designed specifically for your business needs and objectives.' },
                  { icon: Zap, title: 'Automation First', desc: 'Identifying and implementing automation opportunities for maximum efficiency.' },
                  { icon: LineChart, title: 'Continuous Optimization', desc: 'Regular monitoring and optimization of AI systems for peak performance.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <item.icon className="w-8 h-8 text-[#FF007A] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#B0B0B0]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-[#00FFFF] shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Your Trusted AI Partner Section */}
        <section className="py-20 bg-[#1D1E30]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Your Trusted AI Partner
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-[#28293E]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)]">
                <p className="text-[#B0B0B0] text-lg leading-relaxed">
                  Partner with us to leverage the transformative power of AI. Our expertise spans across industries, enabling businesses to achieve unprecedented levels of efficiency, innovation, and growth through intelligent automation and data-driven insights.
                </p>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { number: '30%', text: 'Average Cost Reduction' },
                  { number: '200+', text: 'Successful Implementations' },
                  { number: '24/7', text: 'Support & Monitoring' },
                ].map((stat, i) => (
                  <Card key={i} className="p-6 bg-gradient-to-r from-[#FF007A]/10 to-[#00FFFF]/10 border-2 border-[#8A2BE2] shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                    <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#00FFFF]">
                      {stat.number}
                    </h3>
                    <p className="text-[#B0B0B0]">{stat.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  rating: 5,
                  text: "The AI solutions provided have transformed our operations, reducing costs and improving efficiency beyond our expectations.",
                  name: "Sarah Johnson",
                  title: "CEO, TechCorp"
                },
                {
                  rating: 5,
                  text: "Exceptional service and support. Their team's expertise in AI implementation has given us a competitive edge.",
                  name: "Michael Chen",
                  title: "CTO, InnovateTech"
                },
                {
                  rating: 5,
                  text: "The ROI we've seen from their AI automation solutions has been remarkable. Highly recommended partner.",
                  name: "Emma Williams",
                  title: "Operations Director, FutureScale"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="p-6 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)]">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FF007A] fill-[#FF007A]" />
                    ))}
                  </div>
                  <p className="text-[#B0B0B0] mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-[#B0B0B0] text-sm">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#1D1E30] to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[#B0B0B0] text-xl mb-12">
              Let's work together to create a smarter, more efficient future. Partner with AI Automation Agency today.
            </p>
            <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] text-lg px-8 py-6">
              Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#1A1A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-[#FF007A]" />
                  <span className="font-bold">AI Automation Agency</span>
                </div>
                <p className="text-[#B0B0B0]">
                  Transforming businesses through intelligent automation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-[#B0B0B0]">contact@aiagency.com</p>
                <p className="text-[#B0B0B0]">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Users, href: '#' },
                    { icon: Brain, href: '#' },
                    { icon: LineChart, href: '#' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="text-[#FF007A] hover:text-[#FF007A]/80 hover:shadow-[0_0_15px_rgba(255,0,122,0.5)] transition-all"
                    >
                      <item.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#28293E] text-center text-[#B0B0B0]">
              © 2025 AI Automation Agency. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}