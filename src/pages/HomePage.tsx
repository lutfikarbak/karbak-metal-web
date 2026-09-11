import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, Send, MapPin, Zap, Sun, Leaf, Home, ChevronLeft, ChevronRight, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { translations, products } from '@/lib/translations';
import { toast } from 'sonner';
import { QuoteFormModal } from '@/components/QuoteFormModal';
import { SampleFormModal } from '@/components/SampleFormModal';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal, getRevealClasses } from '@/hooks/useScrollReveal';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    '/images/hero-1.jpg',
    '/images/hero-2.png',
    '/images/hero-3.png',
    '/images/hero-4.png',
    '/images/hero-5.png',
    '/images/hero-6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mjgjblvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          adSoyad: contactForm.name,
          email: contactForm.email,
          mesaj: contactForm.message,
          talepTuru: 'iletisim',
          _subject: 'İletişim Formu - Karbak Metal',
        }),
      });

      if (response.ok) {
        toast.success(
          language === 'tr' ? 'Mesajınız gönderildi!' :
          language === 'de' ? 'Ihre Nachricht wurde gesendet!' :
          language === 'es' ? '¡Su mensaje ha sido enviado!' :
          language === 'it' ? 'Il tuo messaggio è stato inviato!' :
          'Your message has been sent!'
        );
        setContactForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error(
        language === 'tr' ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' :
        language === 'de' ? 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' :
        language === 'es' ? 'No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.' :
        language === 'it' ? 'Impossibile inviare il messaggio. Per favore riprova.' :
        'Message could not be sent. Please try again.'
      );
    }
  };

  const handleQuoteRequest = (productName?: string) => {
    setSelectedProduct(productName || '');
    setQuoteModalOpen(true);
  };

  const handleSampleRequest = (productName?: string) => {
    setSelectedProduct(productName || '');
    setSampleModalOpen(true);
  };

  const handleCatalogView = () => {
    window.open('https://idycard.s3.eu-central-1.amazonaws.com/e9185471-55a3-405e-adc8-941729cccef492cbca9e-1547-492e-bcc7-fb522bfaccf7.pdf', '_blank');
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        
        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-amber-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Creative Logo Title */}
          <div className="mb-10">
            {/* Decorative Top Element */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-500" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Since 1970</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            
            {/* Main Title with Glow Effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight" style={{ textShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.3)' }}>
              KARBAK <span className="text-amber-400">METAL</span>
            </h1>
            
            {/* Tagline */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-6 h-px bg-amber-500/50" />
              <span className="text-amber-300/90 text-xs md:text-sm tracking-[0.2em] uppercase font-light">
                {language === 'tr' ? 'Alüminyum Folyo Üreticisi' : 
                 language === 'de' ? 'Aluminiumfolienhersteller' :
                 language === 'es' ? 'Fabricante de Lámina de Aluminio' :
                 language === 'it' ? 'Produttore di Fogli di Alluminio' :
                 'Aluminium Foil Manufacturer'}
              </span>
              <div className="w-6 h-px bg-amber-500/50" />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 italic mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.slogan}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/products')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-lg shadow-amber-500/30"
            >
              {t.hero.ctaExplore} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => handleQuoteRequest()}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold shadow-lg"
            >
              {t.hero.ctaQuote}
            </Button>
            <Button 
              onClick={handleCatalogView}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-lg shadow-amber-600/30"
            >
              <ExternalLink className="mr-2 w-5 h-5" /> {t.hero.ctaCatalog}
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* GES Section - Full Width Background with Stats Cards */}
      <GESection t={t} />

      {/* Products Section - Single List without Tabs */}
      <RevealSection id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6" />
          </div>
          
          {/* All Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={language === 'tr' ? product.title : product.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.micron}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {language === 'tr' ? product.title : product.titleEn}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {language === 'tr' ? product.description : product.descriptionEn}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                
                {/* Product Detail Modal - Full Screen Horizontal */}
                <DialogContent className="!max-w-[95vw] !w-[95vw] !h-[90vh] !max-h-[90vh] overflow-hidden p-0 border-0">
                  <div className="flex flex-col lg:flex-row h-full w-full">
                    {/* Left Side - Image */}
                    <div className="lg:w-1/2 relative bg-white flex items-center justify-center p-8">
                      <img 
                        src={product.image} 
                        alt={language === 'tr' ? product.title : product.titleEn} 
                        className="max-w-full max-h-full object-contain" 
                      />
                      <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {product.micron}
                      </div>
                    </div>
                    {/* Right Side - Info */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <DialogHeader className="mb-8">
                        <DialogTitle className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {language === 'tr' ? product.title : product.titleEn}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-8">
                        <div className="flex gap-6">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              {language === 'tr' ? 'Alaşım' : language === 'de' ? 'Legierung' : language === 'es' ? 'Aleación' : language === 'it' ? 'Lega' : 'Alloy'}
                            </h4>
                            <div className="bg-gray-100 text-gray-800 px-5 py-3 rounded-xl text-lg font-medium">
                              {product.alloy}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              {language === 'tr' ? 'Kalınlık' : language === 'de' ? 'Dicke' : language === 'es' ? 'Espesor' : language === 'it' ? 'Spessore' : 'Thickness'}
                            </h4>
                            <div className="bg-amber-100 text-amber-700 px-5 py-3 rounded-xl text-lg font-medium">
                              {product.micron}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {language === 'tr' ? 'Açıklama' : language === 'de' ? 'Beschreibung' : language === 'es' ? 'Descripción' : language === 'it' ? 'Descrizione' : 'Description'}
                          </h4>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {language === 'tr' ? product.description : product.descriptionEn}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 mt-10 pt-6 border-t border-gray-200">
                        <Button 
                          onClick={() => handleQuoteRequest(language === 'tr' ? product.title : product.titleEn)}
                          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-5 text-lg rounded-xl"
                        >
                          {t.products.requestQuote}
                        </Button>
                        <Button 
                          onClick={() => handleSampleRequest(language === 'tr' ? product.title : product.titleEn)}
                          variant="outline"
                          className="flex-1 py-5 text-lg border-2 rounded-xl"
                        >
                          {t.products.requestSample}
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ALVORAL Section */}
      <RevealSection className="relative py-24 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/alvoral-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ALVORAL Header - Elegant Design */}
          <div className="text-center mb-16">
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400" />
              <div className="w-1.5 h-1.5 rotate-45 bg-emerald-400" />
              <span className="text-emerald-400 text-xs tracking-[0.4em] uppercase font-medium">{t.alvoral.by}</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-emerald-400" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
            </div>
            
            {/* Main ALVORAL Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight" style={{ textShadow: '0 0 25px rgba(16,185,129,0.5), 0 0 50px rgba(16,185,129,0.3)' }}>
              ALVORAL
            </h2>
            
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
              <p className="text-lg md:text-xl text-emerald-300 font-light tracking-wide">
                {t.alvoral.tagline}
              </p>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-white/80 mb-8 font-light">
                {t.alvoral.features}
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                {t.alvoral.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {t.alvoral.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* ALVORAL Acronym - Horizontal Layout */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { letter: 'A', text: t.alvoral.acronym.a },
                  { letter: 'L', text: t.alvoral.acronym.l },
                  { letter: 'V', text: t.alvoral.acronym.v },
                  { letter: 'O', text: t.alvoral.acronym.o },
                  { letter: 'R', text: t.alvoral.acronym.r },
                  { letter: 'A', text: t.alvoral.acronym.a2 },
                  { letter: 'L', text: t.alvoral.acronym.l2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-2 shadow-lg shadow-amber-500/30">
                      {item.letter}
                    </span>
                    <span className="text-white/90 text-xs font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/images/alvoral-hero.jpg" alt="ALVORAL" className="rounded-3xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Contact Section - Like Contact Page */}
      <RevealSection id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Bizimle İletişime Geçin' : 
               language === 'de' ? 'Kontaktieren Sie Uns' :
               language === 'es' ? 'Contáctenos' :
               language === 'it' ? 'Contattaci' :
               'Get in Touch With Us'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 mb-4">
              {language === 'tr' ? 'Size özel çözümler için hemen iletişime geçin' :
               language === 'de' ? 'Kontaktieren Sie uns für maßgeschneiderte Lösungen' :
               language === 'es' ? 'Póngase en contacto para soluciones personalizadas' :
               language === 'it' ? 'Mettiti in contatto per soluzioni personalizzate' :
               'Contact us for customized solutions'}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.title}</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{t.contact.location}</h4>
                    <p className="text-gray-600">Karbak Metal Sanayi ve Ticaret A.Ş.</p>
                    <p className="text-gray-600">Kahramanmaraş, Türkiye</p>
                    <a href="https://maps.google.com/?q=Karbak+Metal+Kahramanmaras" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm mt-1 inline-flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Haritada Gör
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <a href="tel:+903442579050" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Phone className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{t.contact.phone}</h4>
                    <p className="text-amber-600 group-hover:text-amber-700 transition-colors">+90 344 257 90 50</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@karbakmetal.com.tr" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Mail className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">E-posta</h4>
                    <p className="text-amber-600 group-hover:text-amber-700 transition-colors">info@karbakmetal.com.tr</p>
                  </div>
                </a>

                {/* Web */}
                <a href="https://www.karbakmetal.com.tr" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Globe className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Web</h4>
                    <p className="text-amber-600 group-hover:text-amber-700 transition-colors flex items-center gap-1">
                      www.karbakmetal.com.tr <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.infoTitle}</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 text-lg">
                  <Send className="mr-2 w-5 h-5" /> {t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Quote Form Modal */}
      <QuoteFormModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        selectedProduct={selectedProduct}
      />

      {/* Sample Form Modal */}
      <SampleFormModal 
        isOpen={sampleModalOpen} 
        onClose={() => setSampleModalOpen(false)} 
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

// Reveal Section Component
function RevealSection({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className={`${className} ${getRevealClasses(isVisible, 'up')}`}>
      {children}
    </section>
  );
}

// GES Section Component
function GESection({ t }: { t: typeof translations.tr }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  
  return (
    <section ref={ref} className={`relative py-24 overflow-hidden ${getRevealClasses(isVisible, 'up')}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/images/ges-factory.jpg" alt="GES" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.ges.title}</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-3">{t.ges.subtitle}</p>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{t.ges.location}</span>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">2.5 MW</div>
            <div className="text-gray-300 text-base">{t.ges.power}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sun className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">3.500 MWh</div>
            <div className="text-gray-300 text-base">{t.ges.production}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">1.800</div>
            <div className="text-gray-300 text-base">{t.ges.co2}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">750</div>
            <div className="text-gray-300 text-base">{t.ges.households}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
