import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.vision, path: '/vision' },
    { name: t.nav.sustainability, path: '/sustainability' },
    { name: t.nav.whyAluminiumFoil, path: '/why-aluminium-foil' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/images/logo.png" alt="Karbak Metal" className="h-24 w-auto mb-4" />
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Organize San. Böl. 3. Cad No: 4/1<br />Onikişubat / Kahramanmaraş / Türkiye</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-amber-500">+90 344 257 90 50</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-amber-500">info@karbakmetal.com.tr</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.alvoral}</h4>
            <p className="text-gray-400 mb-4">{t.footer.alvoralDesc}</p>
            <Link 
              to="/"
              className="text-amber-500 hover:text-amber-400 flex items-center gap-2"
            >
              {language === 'tr' ? 'Ürünleri İncele' : language === 'de' ? 'Produkte Ansehen' : language === 'es' ? 'Ver Productos' : 'View Products'} 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-10 mb-10">
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.footer.followUs}</h4>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/company/karbakmetal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Linkedin className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://www.instagram.com/karbakmetal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://x.com/karbakmetal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Twitter className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://www.facebook.com/karbakmetal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Karbak Metal San. Tic. A.Ş. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/kvkk" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <img src="/images/logo.png" alt="Karbak" className="h-8 w-auto opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
