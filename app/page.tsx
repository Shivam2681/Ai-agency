'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import {
  Brain,
  ChevronRight,
  Database,
  GitMerge,
  Globe,
  LayoutGrid,
  LineChart,
  MessageSquare,
  Settings,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1E30] to-black text-white">
      {/* Navigation */}
      {/* <nav className="sticky top-0 z-50 bg-[#1A1A2E]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Brain className="w-8 h-8 text-[#FF007A]" />
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-[#FF007A] transition-colors">
                  Home
                </a>
                <a href="/about" className="hover:text-[#FF007A] transition-colors">
                  About
                </a>
                <a href="/services" className="hover:text-[#FF007A] transition-colors">
                  Services
                </a>
                <a href="/pricing" className="hover:text-[#FF007A] transition-colors">
                  Pricing
                </a>
                <a href="#" className="hover:text-[#FF007A] transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              Get in Touch
            </Button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-radial py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#00FFFF]">
            Empowering Businesses with AI & Automation
          </h1>
          <p className="text-[#B0B0B0] text-xl mb-8 max-w-3xl mx-auto">
            Unlock the power of AI to drive your business forward with smart,
            automated solutions tailored for growth.
          </p>
          <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] text-lg px-8 py-6">
            Get Started Now
          </Button>

          <div className="mt-16 relative">
            <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(138,43,226,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="AI Workspace"
                className="w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Supportive Ecosystem',
                desc: 'Collaborate with our team for maximum support.',
                longDesc:
                  'Get access to our dedicated team of AI experts, developers, and consultants who provide round-the-clock support and guidance for your projects.',
              },
              {
                icon: Sparkles,
                title: 'Cutting-Edge Technology',
                desc: 'Harness the latest advancements in AI.',
                longDesc:
                  'Stay ahead with state-of-the-art AI models, machine learning algorithms, and automation tools that keep you at the forefront of innovation.',
              },
              {
                icon: LineChart,
                title: 'Scalable Solutions',
                desc: 'Tailored to fit your business growth.',
                longDesc:
                  'Our solutions grow with your business, offering flexible architectures that adapt to increasing demands and evolving requirements.',
              },
              {
                icon: Globe,
                title: 'Trusted by Clients',
                desc: 'A proven track record of success.',
                longDesc:
                  'Join hundreds of satisfied clients who have transformed their operations with our AI solutions, achieving measurable results and ROI.',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 bg-[#1A1826CC] md:bg-transparent border-none transition-all duration-300
                 hover:border-2 hover:border-[#8A2BE2]  hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] group "
              >
                <item.icon className="w-12 h-12 text-[#FF007A] mb-4" />
                <h3 className="text-xl text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#B0B0B0] mb-4">{item.desc}</p>
                <p className="text-[#B0B0B0] text-sm opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.longDesc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Revolutionize */}
      <section className="py-20 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How We Revolutionize Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: 'Data Integration & Analysis',
                desc: 'Seamlessly integrate and analyze your data sources to uncover valuable insights and patterns that drive informed decision-making.',
              },
              {
                icon: Brain,
                title: 'Predictive Modeling',
                desc: 'Leverage advanced AI algorithms to forecast trends, anticipate market changes, and stay ahead of your competition.',
              },
              {
                icon: Settings,
                title: 'Custom AI Development',
                desc: 'Build tailored AI solutions that address your specific business challenges and optimize your unique processes.',
              },
              {
                icon: Zap,
                title: 'Optimization & Automation',
                desc: 'Streamline operations and reduce costs with intelligent automation that handles repetitive tasks with precision.',
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 bg-transparent border border-[#00FFFF] transition-all duration-300 hover:border-2 hover:border-[#8A2BE2]
                hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]"
              >
                <item.icon className="w-12 h-12 text-[#00FFFF] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[#B0B0B0] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 text-lg px-8 py-6">
              Start Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Transforming Ideas */}
      <section className="py-20 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#8A2BE2] mb-6">
                Transforming Ideas into Intelligent Solutions
              </h2>
              <p className="text-[#B0B0B0] text-lg mb-8">
                We specialize in turning complex business challenges into
                streamlined AI-powered solutions that drive real results.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: LineChart, title: 'ROI Analysis' },
                { icon: Users, title: 'Human-Centered Design' },
                { icon: GitMerge, title: 'Custom ML Integration' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <item.icon className="w-8 h-8 text-[#FF007A]" />
                  <span className="text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border-2 border-[#8A2BE2] shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="AI Demonstration"
                className="w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Agents Designed to Work Smarter for You
              </h2>
              <p className="text-[#B0B0B0] text-lg mb-8">
                Our intelligent AI agents automate complex tasks, learn from
                your business processes, and continuously optimize for better
                results.
              </p>
              <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <Input
              placeholder="Your Name"
              className="bg-[#28293E] border-[#FF007A] focus:border-[#FF007A] focus:ring-[#FF007A] text-white placeholder:text-[#B0B0B0]"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-[#28293E] border-[#FF007A] focus:border-[#FF007A] focus:ring-[#FF007A] text-white placeholder:text-[#B0B0B0]"
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              className="bg-[#28293E] border-[#FF007A] focus:border-[#FF007A] focus:ring-[#FF007A] text-white placeholder:text-[#B0B0B0]"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-[#28293E] border-[#FF007A] focus:border-[#FF007A] focus:ring-[#FF007A] text-white placeholder:text-[#B0B0B0]"
              rows={6}
            />
            <Button className="w-full bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]">
              Submit Your Inquiry
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#28293E]">
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
                <a href="#" className="text-[#B0B0B0] hover:text-[#FF007A]">
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#B0B0B0] hover:text-[#FF007A]">
                  <LayoutGrid className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#28293E] text-center text-[#B0B0B0]">
            © 2025 AI Automation Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
