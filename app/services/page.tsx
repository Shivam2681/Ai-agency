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
  Bot,
  Cpu,
  Database,
  Clock,
  Shield,
  BarChart,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Services() {
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

      {/* Starry Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
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
                  <a href="/about" className="hover:text-[#FF007A] transition-colors">About</a>
                  <a href="/services" className="text-[#FF007A]">Services</a>
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
              Revolutionizing Businesses with AI-Powered Solutions
            </h1>
            <p className="text-[#B0B0B0] text-xl mb-12">
              From AI Development to Automation, we help businesses of all sizes adopt intelligent solutions that streamline operations, cut costs, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] text-lg px-8 py-6">
                Get a Free Consultation
              </Button>
              <Button className="bg-[#4A4A4A] hover:bg-[#4A4A4A]/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] text-lg px-8 py-6">
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-[#1D1E30]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Custom AI Development",
                  description: "Bespoke AI models built to solve your unique business challenges.",
                  color: "#FF007A"
                },
                {
                  icon: Zap,
                  title: "Automation Workflows",
                  description: "End-to-end automation of repetitive tasks for unmatched efficiency.",
                  color: "#00FFFF"
                },
                {
                  icon: Bot,
                  title: "AI Agents",
                  description: "Intelligent agents trained and fine-tuned for specific business functions.",
                  color: "#8A2BE2"
                }
              ].map((service, i) => (
                <Card key={i} className="p-8 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300">
                  <service.icon className={`w-12 h-12 mb-6`} style={{ color: service.color }} />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#B0B0B0]">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom AI Development */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Ideas into Reality with Custom AI Development
              </h2>
              <p className="text-[#B0B0B0] text-xl max-w-3xl mx-auto">
                Leverage cutting-edge technology to develop bespoke AI models that revolutionize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "AI Agents Development",
                  description: "Custom AI agents designed to handle specific tasks and workflows within your organization.",
                  timeline: "4–6 weeks"
                },
                {
                  icon: Brain,
                  title: "Fine-Tuning & Training LLMs",
                  description: "Specialized language models trained on your business data for enhanced performance.",
                  timeline: "6–8 weeks"
                },
                {
                  icon: BarChart,
                  title: "Predictive Analytics & Data Modeling",
                  description: "Advanced AI models that forecast trends and identify potential risks.",
                  timeline: "5–7 weeks"
                }
              ].map((service, i) => (
                <Card key={i} className="p-8 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300">
                  <service.icon className="w-12 h-12 text-[#FF007A] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#B0B0B0] mb-4">{service.description}</p>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#FF007A] mr-2" />
                    <span className="text-[#FF007A]">{service.timeline}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Workflows */}
        <section className="py-20 bg-[#1D1E30]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automate Everything. Focus on What Matters.
              </h2>
              <p className="text-[#B0B0B0] text-xl max-w-3xl mx-auto">
                We identify your bottlenecks and replace them with intelligent, automated workflows for seamless, cost-effective operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Cpu,
                  title: "Process Automation",
                  description: "Streamline repetitive tasks with intelligent workflows.",
                  timeline: "3–5 weeks"
                },
                {
                  icon: Database,
                  title: "Data Pipeline Automation",
                  description: "Automated data collection, processing, and analysis.",
                  timeline: "4–6 weeks"
                },
                {
                  icon: MessageSquare,
                  title: "Customer Service Automation",
                  description: "AI-powered customer support and engagement systems.",
                  timeline: "5–7 weeks"
                }
              ].map((service, i) => (
                <Card key={i} className="p-8 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300">
                  <service.icon className="w-12 h-12 text-[#00FFFF] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#B0B0B0] mb-4">{service.description}</p>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#00FFFF] mr-2" />
                    <span className="text-[#00FFFF]">{service.timeline}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose AI Automation Agency?
              </h2>
              <p className="text-[#B0B0B0] text-xl">
                We Deliver Results, Not Just Promises
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Bespoke AI Solutions",
                  description: "Tailored solutions designed specifically for your business needs."
                },
                {
                  icon: Cpu,
                  title: "Cutting-Edge Technology",
                  description: "Access to the latest AI and automation technologies."
                },
                {
                  icon: Shield,
                  title: "Scalable and Secure",
                  description: "Enterprise-grade security with room for growth."
                },
                {
                  icon: LineChart,
                  title: "Real Results, Proven Success",
                  description: "Track record of delivering measurable business impact."
                }
              ].map((feature, i) => (
                <Card key={i} className="p-6 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-[#FF007A] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-[#B0B0B0]">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-[#1D1E30]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 bg-[#2A2B3F]/80 border-none shadow-[0_0_30px_rgba(138,43,226,0.3)]">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FF007A] fill-[#FF007A]" />
                ))}
              </div>
              <p className="text-[#B0B0B0] text-lg italic mb-6">
                "The AI automation solutions provided by the team have transformed our business operations completely. We've seen a 40% reduction in operational costs and a significant improvement in customer satisfaction."
              </p>
              <div>
                <p className="font-semibold text-lg">David Anderson</p>
                <p className="text-[#B0B0B0]">CTO, Global Solutions Inc.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your AI Transformation Starts Today
            </h2>
            <p className="text-[#B0B0B0] text-xl mb-12">
              Let us help you build smarter, faster, and more efficient business processes. Partner with us to automate success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] text-lg px-8 py-6">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-[#4A4A4A] hover:bg-[#4A4A4A]/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] text-lg px-8 py-6">
                Schedule a Demo <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
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