import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import type { Language } from '@/types';

// Flag components
const FlagTR = () => (
  <span className="text-lg">🇹🇷</span>
);
const FlagEN = () => (
  <span className="text-lg">🇬🇧</span>
);
const FlagDE = () => (
  <span className="text-lg">🇩🇪</span>
);
const FlagES = () => (
  <span className="text-lg">🇪🇸</span>
);
const FlagIT = () => (
  <span className="text-lg">🇮🇹</span>
);

const flags: Record<Language, React.FC> = {
  tr: FlagTR,
  en: FlagEN,
  de: FlagDE,
  es: FlagES,
  it: FlagIT,
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLangName = (lang: string) => {
    const names: Record<string, string> = { tr: 'Türkçe', en: 'English', de: 'Deutsch', es: 'Español', it: 'Italiano' };
    return names[lang] || lang;
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const CurrentFlag = flags[language];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-gray-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Karbak Metal" className="h-20 md:h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.home}
            </Link>
            <Link to="/about" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.about}
            </Link>
            <Link to="/vision" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.vision}
            </Link>
            <Link to="/sustainability" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.sustainability}
            </Link>
            <Link to="/why-aluminium-foil" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.whyAluminiumFoil}
            </Link>
            <Link to="/products" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.products}
            </Link>
            <Link to="/kvkk" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              KVKK
            </Link>
            <Link to="/contact" className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-400'}`}>
              {t.nav.contact}
            </Link>
          </div>

          {/* Language Selector with Flags */}
          <div className="hidden lg:flex items-center gap-4" ref={langDropdownRef}>
            <div className="relative">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center gap-2 text-sm font-semibold transition-colors px-3 py-1.5 rounded-lg border ${isScrolled ? 'text-gray-800 border-gray-300 hover:border-amber-500 hover:text-amber-600' : 'text-white border-white/30 hover:border-amber-400 hover:text-amber-400'}`}
              >
                <CurrentFlag />
                <span className="hidden xl:inline">{getLangName(language)}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  {(['tr', 'en', 'de', 'es', 'it'] as Language[]).map((lang) => {
                    const Flag = flags[lang];
                    return (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-amber-50 ${
                          language === lang ? 'bg-amber-100 text-amber-700' : 'text-gray-700'
                        }`}
                      >
                        <Flag />
                        {getLangName(lang)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.home}
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.about}
            </Link>
            <Link to="/vision" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.vision}
            </Link>
            <Link to="/sustainability" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.sustainability}
            </Link>
            <Link to="/why-aluminium-foil" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.whyAluminiumFoil}
            </Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.products}
            </Link>
            <Link to="/kvkk" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              KVKK
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-600">
              {t.nav.contact}
            </Link>
            <div className="py-2 border-t pt-4">
              <p className="text-sm text-gray-500 mb-2">Dil / Language</p>
              <div className="grid grid-cols-2 gap-2">
                {(['tr', 'en', 'de', 'es', 'it'] as Language[]).map((lang) => {
                  const Flag = flags[lang];
                  return (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        language === lang ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Flag />
                      {getLangName(lang)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
