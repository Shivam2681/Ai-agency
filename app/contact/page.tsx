'use client';

import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Video,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0F2B] to-[#1A103D] text-white relative">
      {/* Particle Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(106,77,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle, rgba(255,107,218,0.05) 2px, transparent 2px)`,
          backgroundSize: '30px 30px, 50px 50px'
        }}
      ></div>

      <div className="relative z-10">
        {/* Navigation */}
        {/* <nav className="sticky top-0 z-50 bg-[#0D0F2B]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Brain className="w-8 h-8 text-[#FF6BDA]" />
                <div className="hidden md:flex space-x-8">
                  <a href="/" className="text-[#E4E4E4] hover:text-[#FF6BDA] transition-colors">Home</a>
                  <a href="/about" className="text-[#E4E4E4] hover:text-[#FF6BDA] transition-colors">About</a>
                  <a href="/services" className="text-[#E4E4E4] hover:text-[#FF6BDA] transition-colors">Services</a>
                  <a href="/pricing" className="text-[#E4E4E4] hover:text-[#FF6BDA] transition-colors">Pricing</a>
                  <a href="/contact" className="text-[#FF6BDA]">Contact</a>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#FF6BDA] to-[#6A4DFF] hover:opacity-90 shadow-[0_0_15px_rgba(255,107,218,0.3)]">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </nav> */}

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B47CFF]">
              Let's Build Your AI Future Together!
            </h1>
            <p className="text-[#E4E4E4] text-xl mb-12">
              Have a question, want to book a meeting, or need assistance? Our team is here to help. Reach out today, and let's explore how we can bring AI to your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#FF6BDA] to-[#6A4DFF] hover:opacity-90 text-lg px-8 py-6 shadow-[0_0_15px_rgba(255,107,218,0.3)]">
                Contact Us Now
              </Button>
              <Button className="bg-[#2C1C4B] hover:shadow-[0_0_15px_rgba(255,107,218,0.3)] text-lg px-8 py-6">
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 bg-[#1A103D]/85 border-none shadow-[0_0_30px_rgba(106,77,255,0.2)]">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Full Name"
                    className="bg-[#121212] border-[#6A4DFF] text-[#E4E4E4] placeholder:text-[#9F87FF]"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#121212] border-[#6A4DFF] text-[#E4E4E4] placeholder:text-[#9F87FF]"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone (Optional)"
                    className="bg-[#121212] border-[#6A4DFF] text-[#E4E4E4] placeholder:text-[#9F87FF]"
                  />
                  <Select>
                    <SelectTrigger className="bg-[#121212] border-[#6A4DFF] text-[#E4E4E4]">
                      <SelectValue placeholder="Service Interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#121212] border-[#6A4DFF]">
                      <SelectItem value="ai-development">AI Development</SelectItem>
                      <SelectItem value="automation">Process Automation</SelectItem>
                      <SelectItem value="consulting">AI Consulting</SelectItem>
                      <SelectItem value="integration">System Integration</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full bg-[#121212] border-[#6A4DFF] text-[#E4E4E4] justify-start text-left font-normal">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-[#121212] border-[#6A4DFF]">
                      <CalendarComponent
                        mode="single"
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-[#121212] border-[#6A4DFF] text-[#E4E4E4] placeholder:text-[#9F87FF] min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#6A4DFF] to-[#FF6BDA] hover:opacity-90 shadow-[0_0_15px_rgba(106,77,255,0.3)] text-lg py-6">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Meeting Scheduler */}
        <section className="py-20 bg-[#0D0F2B]/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Book a Meeting with Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-[#1A103D]/85 border-none shadow-[0_0_30px_rgba(106,77,255,0.2)]">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#FF6BDA]" />
                  Select Date & Time
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "9:00 AM", "10:00 AM", "11:00 AM",
                    "1:00 PM", "2:00 PM", "3:00 PM",
                    "4:00 PM", "5:00 PM", "6:00 PM"
                  ].map((time, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="bg-[#121212] border-[#6A4DFF] hover:border-[#FF6BDA] text-[#E4E4E4]"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </Card>
              <Card className="p-8 bg-[#1A103D]/85 border-none shadow-[0_0_30px_rgba(106,77,255,0.2)]">
                <h3 className="text-xl font-bold mb-6">Meeting Details</h3>
                <div className="space-y-4 mb-6">
                  <Button
                    variant="outline"
                    className="w-full bg-[#121212] border-[#6A4DFF] hover:border-[#FF6BDA] text-[#E4E4E4]"
                  >
                    <Video className="w-5 h-5 mr-2" /> Video Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#121212] border-[#6A4DFF] hover:border-[#FF6BDA] text-[#E4E4E4]"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Phone Call
                  </Button>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FF6BDA] to-[#6A4DFF] hover:opacity-90 shadow-[0_0_15px_rgba(255,107,218,0.3)]">
                  Schedule Meeting
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Direct Contact */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  info: "info@aiautomationagency.xyz",
                  color: "#FF6BDA"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "+1 020 8058 6160",
                  color: "#6A4DFF"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "71-75 Shelton Street, Covent Garden, London, UK",
                  color: "#FF6BDA"
                }
              ].map((contact, i) => (
                <Card key={i} className="p-6 bg-[#1A103D]/90 border-2 border-transparent hover:border-[#FF6BDA] shadow-[0_0_30px_rgba(106,77,255,0.2)] transition-all duration-300">
                  <contact.icon className="w-8 h-8 mb-4" style={{ color: contact.color }} />
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-[#E4E4E4]">{contact.info}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-[#0A0A0A] border-t border-[#1A103D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#E4E4E4] mb-4 md:mb-0">
                © 2025 AI Automation Agency. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-[#6A4DFF] hover:text-[#FF6BDA] transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}