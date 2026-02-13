import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Lightbulb, PenTool, Layers, Send } from 'lucide-react';
import { DECK_IMAGES, PROCESS_STEPS } from './constants';
import { DeckImage } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff5c00] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-syne tracking-tighter uppercase font-extrabold">Massi</span>
            <div className="w-2 h-2 rounded-full bg-[#ff5c00]"></div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#shapes" className="hover:text-[#ff5c00] transition-colors">The Shapes</a>
            <a href="#process" className="hover:text-[#ff5c00] transition-colors">Process</a>
            <a href="#contact" className="hover:text-[#ff5c00] transition-colors">Start Project</a>
          </div>

          <button 
            className="md:hidden text-[#ff5c00]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-12 text-4xl font-syne uppercase tracking-tighter ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="#shapes" onClick={() => setIsMenuOpen(false)}>The Shapes</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Start Project</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={DECK_IMAGES[0].url} 
            alt="Signature Deck" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl">
          <h1 className="text-6xl md:text-[8rem] font-syne font-black leading-none tracking-tighter uppercase mb-6">
            Rafael Massi
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <span className="text-[#ff5c00] text-lg font-bold tracking-[0.3em] uppercase">Deck Art & Visual Culture</span>
            <div className="hidden md:block w-24 h-[1px] bg-white/20"></div>
            <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-md">
              Transforming skateboards into canvases for urban expression.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Gallery - "THE SHAPES" */}
      <section id="shapes" className="py-32 px-6 md:px-12 bg-white text-black scroll-mt-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
              <h2 className="text-6xl md:text-8xl font-syne font-black uppercase tracking-tighter mb-4">The Shapes</h2>
              <p className="text-zinc-500 uppercase font-bold tracking-widest text-sm">Portfolio Collection 2024</p>
            </div>
            <div className="hidden md:block">
              <span className="text-9xl font-syne font-black text-zinc-100 leading-none">01</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {DECK_IMAGES.map((deck) => (
              <div 
                key={deck.id}
                className={`group relative overflow-hidden bg-zinc-50 border border-zinc-200 aspect-[3/4] transition-all duration-700 ${
                  deck.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                } ${
                  deck.size === 'medium' ? 'md:col-span-2' : ''
                }`}
              >
                <img 
                  src={deck.url} 
                  alt={deck.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c00] mb-2">{deck.category}</span>
                  <h3 className="text-2xl font-syne font-bold uppercase">{deck.title}</h3>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-white bg-black/50 p-2 rounded-full backdrop-blur-sm" size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 md:px-12 bg-zinc-950 scroll-mt-24">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-syne font-black uppercase tracking-tighter mb-6">The Process</h2>
            <div className="w-24 h-1 bg-[#ff5c00] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon === 'Lightbulb' ? Lightbulb : step.icon === 'PenTool' ? PenTool : Layers;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#ff5c00] transition-colors duration-500">
                    <Icon className="text-zinc-400 group-hover:text-[#ff5c00] transition-colors" size={40} />
                  </div>
                  <h3 className="text-3xl font-syne font-bold uppercase mb-4 tracking-tighter">{step.title}</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#ff5c00] text-black scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-7xl md:text-9xl font-syne font-black uppercase tracking-tighter leading-none mb-8">
                Let's<br/>Shred.
              </h2>
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-12 opacity-80">
                Have a board in mind? Let's turn your vision into a physical masterpiece.
              </p>
              <div className="flex flex-col gap-6 text-xl font-bold uppercase">
                <a href="mailto:rafael@massi.skate" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-12 h-[1px] bg-black"></div>
                  hello@rafaelmassi.art
                </a>
                <a href="#" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-12 h-[1px] bg-black"></div>
                  @rafaelmassi_skate
                </a>
              </div>
            </div>

            <div className="bg-black text-white p-8 md:p-12 shadow-2xl">
              <h3 className="text-4xl font-syne font-black uppercase mb-8">Start a Project</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border-b border-white/10 focus:border-[#ff5c00] py-4 px-2 outline-none transition-colors"
                    placeholder="Wade Rozan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-900 border-b border-white/10 focus:border-[#ff5c00] py-4 px-2 outline-none transition-colors"
                    placeholder="wade@skateshop.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Project Brief</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-900 border-b border-white/10 focus:border-[#ff5c00] py-4 px-2 outline-none transition-colors resize-none"
                    placeholder="I want a custom deck for my brand's launch..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#ff5c00] text-black font-black uppercase py-6 flex items-center justify-center gap-4 hover:bg-white transition-colors duration-300">
                  Send Request <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="text-3xl font-syne font-black uppercase tracking-tighter">
              Rafael Massi <span className="text-[#ff5c00]">®</span>
            </div>
            <p className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-sm">
              © 2024 Visual Culture & Deck Art Studio
            </p>
            <div className="flex gap-8 text-zinc-400 font-bold uppercase text-xs tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;