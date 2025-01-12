'use client';

import {
  Brain,
  Check,
  ChevronRight,
  Minus,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Bot,
  Sparkles,
  MessageSquare,
  ChevronDown,
  Users,
  LineChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E0131] to-[#0A0014] text-white relative">
      {/* Starry Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(92,78,171,0.15) 1px, transparent 1px),
                           radial-gradient(circle, rgba(132,111,241,0.1) 2px, transparent 2px)`,
          backgroundSize: '30px 30px, 50px 50px'
        }}
      ></div>

      <div className="relative z-10">
        {/* Navigation */}
        {/* <nav className="sticky top-0 z-50 bg-[#1E0131]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Brain className="w-8 h-8 text-[#FF5DB1]" />
                <div className="hidden md:flex space-x-8">
                <a href="/" className="text-[#D1D1E1] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] transition-colors">Home</a>
                  <a href="/about" className="text-[#D1D1E1] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] transition-colors">About</a>
                  <a href="/services" className="text-[#D1D1E1] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] transition-colors">Services</a>
                  <a href="/pricing" className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF]">Pricing</a>
                  <a href="/contact" className="text-[#D1D1E1] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] transition-colors">Contact</a>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 rounded-md">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </nav> */}

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable, Transparent, and Tailored AI Solutions
            </h1>
            <p className="text-[#B3B3C6] text-xl mb-12">
              Whether you're automating workflows or developing custom AI agents, our straightforward pricing ensures no surprises—just value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 text-lg px-8 py-6 rounded-md">
                Get a Free Quote
              </Button>
              <Button className="bg-transparent border-2 border-transparent bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 text-lg px-8 py-6 rounded-md relative">
                <span className="absolute inset-[2px] bg-[#1E0131] rounded-md flex items-center justify-center">
                  Explore Plans
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Custom AI Development",
                  description: "Tailored AI solutions designed specifically for your business needs and objectives."
                },
                {
                  icon: Zap,
                  title: "Process Automation",
                  description: "Streamline operations with intelligent automation workflows and systems."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security measures to protect your data and AI implementations."
                }
              ].map((feature, i) => (
                <Card key={i} className="p-8 bg-[#2A0148] border-none shadow-[0_0_30px_rgba(160,109,255,0.2)] hover:shadow-[0_0_40px_rgba(160,109,255,0.3)] transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-[#C2C2D2] text-center">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore Our Comprehensive AI Service Plans
              </h2>
              <p className="text-[#B3B3C6] text-xl max-w-3xl mx-auto">
                Select from a range of productized AI solutions, or request a customized package tailored to your business goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "$2,999",
                  description: "Perfect for small businesses starting with AI",
                  features: [
                    "Basic AI Implementation",
                    "1 Automation Workflow",
                    "5 Users Included",
                    "Basic Support",
                    "Monthly Updates"
                  ],
                  timeline: "2-4 weeks"
                },
                {
                  title: "Professional",
                  price: "$5,999",
                  description: "Ideal for growing businesses",
                  features: [
                    "Advanced AI Implementation",
                    "3 Automation Workflows",
                    "15 Users Included",
                    "Priority Support",
                    "Weekly Updates",
                    "Custom Integrations"
                  ],
                  timeline: "4-6 weeks",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  description: "For large-scale organizations",
                  features: [
                    "Full AI Suite Access",
                    "Unlimited Workflows",
                    "Unlimited Users",
                    "24/7 Premium Support",
                    "Daily Updates",
                    "Custom Development",
                    "Dedicated Account Manager"
                  ],
                  timeline: "6-8 weeks"
                }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 bg-[#3B015F] border-none shadow-[0_0_30px_rgba(160,109,255,0.2)] hover:shadow-[0_0_40px_rgba(160,109,255,0.3)] transition-all duration-300 relative ${plan.popular ? 'transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF]">
                    {plan.price}
                  </div>
                  <p className="text-[#C2C2D2] mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-[#C2C2D2]">
                        <Check className="w-5 h-5 text-[#FF5DB1] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center mb-6">
                    <Clock className="w-5 h-5 text-[#FF5DB1] mr-2" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF]">
                      {plan.timeline}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 rounded-lg">
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#180032]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#290044]">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Starter</th>
                    <th className="px-6 py-4 text-center">Professional</th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI Implementation", starter: true, pro: true, enterprise: true },
                    { feature: "Automation Workflows", starter: "1", pro: "3", enterprise: "Unlimited" },
                    { feature: "Users Included", starter: "5", pro: "15", enterprise: "Unlimited" },
                    { feature: "Custom Integrations", starter: false, pro: true, enterprise: true },
                    { feature: "24/7 Support", starter: false, pro: false, enterprise: true },
                    { feature: "Dedicated Manager", starter: false, pro: false, enterprise: true }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[#200036]" : "bg-[#15002A]"}>
                      <td className="px-6 py-4 text-[#C2C2D2]">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-[#C2C2D2]">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="w-5 h-5 text-[#58E17A] mx-auto" /> : <Minus className="w-5 h-5 text-[#8C8C99] mx-auto" />
                        ) : row.starter}
                      </td>
                      <td className="px-6 py-4 text-center text-[#C2C2D2]">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="w-5 h-5 text-[#58E17A] mx-auto" /> : <Minus className="w-5 h-5 text-[#8C8C99] mx-auto" />
                        ) : row.pro}
                      </td>
                      <td className="px-6 py-4 text-center text-[#C2C2D2]">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="w-5 h-5 text-[#58E17A] mx-auto" /> : <Minus className="w-5 h-5 text-[#8C8C99] mx-auto" />
                        ) : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long does implementation typically take?",
                  answer: "Implementation timelines vary based on the complexity of your needs. Starter packages typically take 2-4 weeks, while Enterprise solutions may take 6-8 weeks for full deployment."
                },
                {
                  question: "Can I customize the AI solutions to my specific needs?",
                  answer: "Yes, all our AI solutions can be customized to meet your specific business requirements. Our team works closely with you to understand your needs and tailor the solution accordingly."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We offer different levels of support based on your plan. This ranges from basic email support to 24/7 premium support with a dedicated account manager for Enterprise clients."
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer: "Yes, you can upgrade your plan at any time. We'll help you transition smoothly to your new plan and ensure all your existing implementations are preserved."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-[#3B015F] rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#2A0148] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-[#C2C2D2]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#26003F] to-[#15002A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-[#C2C2D2] text-xl mb-12">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 text-lg px-8 py-6 rounded-md">
                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-transparent border-2 border-transparent bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] hover:opacity-90 text-lg px-8 py-6 rounded-md relative">
                <span className="absolute inset-[2px] bg-[#26003F] rounded-md flex items-center justify-center">
                  Chat with Us <MessageSquare className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#1E0131]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-[#FF5DB1]" />
                  <span className="font-bold">AI Agency</span>
                </div>
                <p className="text-[#C2C2D2]">
                  Transforming businesses through intelligent automation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-[#C2C2D2]">contact@aiagency.com</p>
                <p className="text-[#C2C2D2]">+1 (555) 123-4567</p>
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
                      className="text-[#C2C2D2] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF5DB1] to-[#A06DFF] transition-all"
                    >
                      <item.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#3B015F] text-center text-[#C2C2D2]">
              © 2025 AI Agency. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}