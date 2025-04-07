import { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';
import logo from './img/alsarw.png';
import "./mytest.css";

import { Analytics } from "@vercel/analytics/react"

export default function MarketingWebsite() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');



  const navItems = ["home", "services", "about"];

  return (
<div className="font-[Poppins] text-[#0e2431] relative overflow-x-hidden bg-white">
<Analytics />
{/* Header */}
<header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 transition-all duration-300">
  <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <a href="#" className="flex items-center gap-3 text-2xl font-black text-[#d9de22] tracking-wide hover:opacity-90 transition">
      <img src={logo} className="w-18 h-14" alt="Logo" />
    </a>

    {/* Mobile Menu Button */}
    <div className="md:hidden text-3xl text-[#d9de22] cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
      <HiMenu />
    </div>

    {/* Nav Links */}
    <ul className={`md:flex gap-10 font-medium text-sm tracking-wide items-center transition-all duration-300 ${navOpen ? 'block absolute top-full right-0 bg-[#0e2431] text-white w-4/5 p-6 rounded-bl-xl shadow-lg' : 'hidden md:flex'}`}>
      {navItems.map(item => (
        <li key={item} className="mb-4 md:mb-0">
          <a
            href={`#${item}`}
            className={`capitalize transition-colors duration-200 hover:text-[#c3d600] ${activeLink === item ? 'text-[#d9de22] font-semibold' : ''}`}
            onClick={() => {
              setActiveLink(item);
              setNavOpen(false);
            }}
          >
            {item}
          </a>
        </li>
      ))}
      <li className="hidden md:block">
        <a href="#contact" className="bg-[#d9de22] text-[#0e2431] px-5 py-2 rounded-full hover:bg-[#c3d600] transition font-semibold shadow">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</header>

  <main className="pt-20">
    {/* Hero Section */}
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8ff] to-[#e8f0ff]"
    >
      {/* Decorative Animated Blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] bg-[#d9de22]/30 rounded-full blur-3xl animate-blob animation-delay-2000 z-0" />
      <div className="absolute bottom-[-100px] right-[-60px] w-[300px] h-[300px] bg-[#00c6ff]/30 rounded-full blur-3xl animate-blob z-0" />
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-[#0000fc]/10 rounded-full blur-2xl animate-blob animation-delay-4000 z-0" />

      {/* Main Content */}
      <div className="z-10">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-[#0e2431]"
        >
          Empower Your Digital Success <br />
          <span className="text-[#0000fc]">with ALSARW</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-6 max-w-2xl text-lg md:text-xl text-[#1e3a5f] mx-auto"
        >
          Specialized digital solutions to elevate your business—from marketing and branding to strategic automation and performance analytics.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-[#d9de22] to-[#00c6ff] text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition duration-300"
        >
          Let's Talk 💬
        </motion.a>
      </div>


    {/* SVG Wave to transition into Services */}
    <svg
      className="absolute bottom-[-1px] left-0 w-full"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#f9f9f9"
        fillOpacity="1"
        d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,208C672,224,768,256,864,266.7C960,277,1056,267,1152,261.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </motion.section>

  {/* Services Section */}
  <section id="services" className="py-32 bg-[#f9f9f9] px-6 md:px-20 text-center relative">
    <h2 className="text-4xl font-bold text-[#0000fc] mb-12">Our E-Commerce Services</h2>

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {[
        {
          title: "Marketing",
          desc: "Boost visibility and engagement with precision-crafted marketing campaigns.",
          icon: "🛒",
        },
        {
          title: "business consulting",
          desc: "Optimize operations, elevate performance, and outpace the competition.",
          icon: "⚙️",
        },
        {
          title: "E-Eommerce",
          desc: "Maximize customer lifetime value through intuitive design and smart automation.",
          icon: "🚀",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-semibold text-[#0e2431] mb-3">{service.title}</h3>
          <p className="text-[#0e2431] leading-relaxed">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>



{/* About Section */}
<section id="about" className="py-20 px-6 md:px-20 bg-white text-center reveal">
  <h2 className="text-3xl font-bold text-[#0000fc] mb-10">Why ALSARW?</h2>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="max-w-3xl mx-auto"
  >
    <h3 className="text-2xl font-semibold mb-4 text-[#0e2431]">Experts in E-Commerce Growth</h3>
    <p className="text-[#0e2431] text-lg leading-relaxed">
      We specialize in scaling online shops through a strategic blend of design, automation, and performance marketing. 
      ALSARW is your dedicated growth partner in the digital world, helping you unlock potential and convert vision into sales.
    </p>
  </motion.div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-20 bg-[#f9f9f9] text-center">
          <h2 className="text-5xl font-bold text-[#0000fc] mb-10">Get in Touch</h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg text-[#0e2431] space-y-6"
          >            
            <p className="text-xl md:text-3xl mt-10 text-[#1e3a5f]">
             🕛 Founded in<span className="text-[#0000fc] font-semibold">  2024 </span>
             </p>
             <p className="text-xl md:text-3xl mt-10 text-[#1e3a5f]">
             📍 Based in<span className="text-[#0000fc] font-semibold"> Amman, Jordan</span>
            </p>
            <p className="text-2xl md:text-4xl">
              📞 <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+962795779911" className="text-[#0000fc] hover:underline">
                +962 7 9577 9911
              </a>
            </p>
            <p className="text-2xl md:text-4xl">
              📧 <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:alsarwllc@outlook.com" className="text-[#0000fc] hover:underline">
                alsarwllc@outlook.com
              </a>
            </p>

          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#0e2431] text-white text-center py-10">
        <h3 className="text-2xl font-bold mb-4">ALSARW</h3>

        {/* Optional Socials placeholder */}
        {/* <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="#" className="hover:text-[#d9de22]">Facebook</a>
          <a href="#" className="hover:text-[#d9de22]">Instagram</a>
            </div> */}

        <p className="text-sm">&copy; 2025 ALSARW. All rights reserved.</p>
      </footer>
    </div>
  );
}
