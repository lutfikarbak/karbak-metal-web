import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe, Send, ExternalLink, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjgjblvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'İletişim Formu - Karbak Metal',
          talepTuru: 'iletisim',
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
        setFormData({ name: '', email: '', message: '' });
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    address: 'Karbak Metal Sanayi ve Ticaret A.Ş.\nKahramanmaraş, Türkiye',
    phone: '+90 344 225 15 00',
    email: 'info@karbakmetal.com.tr',
    mapsUrl: 'https://maps.google.com/?q=Karbak+Metal+Kahramanmaras',
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {language === 'tr' ? 'Bizimle İletişime Geçin' : 
               language === 'de' ? 'Kontaktieren Sie Uns' :
               language === 'es' ? 'Contáctenos' :
               language === 'it' ? 'Contattaci' :
               'Get in Touch With Us'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {language === 'tr' ? 'Size özel çözümler için hemen iletişime geçin' :
               language === 'de' ? 'Kontaktieren Sie uns für maßgeschneiderte Lösungen' :
               language === 'es' ? 'Póngase en contacto para soluciones personalizadas' :
               language === 'it' ? 'Mettiti in contatto per soluzioni personalizzate' :
               'Contact us for customized solutions'}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t.contact.infoTitle}
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t.contact.address}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.address}
                    </p>
                    <a 
                      href={contactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mt-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.contact.viewOnMaps}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t.contact.phone}
                    </h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t.contact.email}
                    </h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Web
                    </h3>
                    <a 
                      href="https://www.karbakmetal.com.tr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      www.karbakmetal.com.tr
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">Sosyal</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {language === 'tr' ? 'Bizi Takip Edin' : 
                       language === 'de' ? 'Folgen Sie Uns' :
                       language === 'es' ? 'Síganos' :
                       language === 'it' ? 'Seguici' :
                       'Follow Us'}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.linkedin.com/company/karbakmetal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-gray-600"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/karbakmetal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-gray-600"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://x.com/karbakmetal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-gray-600"
                        aria-label="X (Twitter)"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.facebook.com/karbakmetal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-gray-600"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? 'Bize Ulaşın' : 
                 language === 'de' ? 'Kontaktieren Sie uns' :
                 language === 'es' ? 'Contáctenos' :
                 language === 'it' ? 'Contattaci' :
                 'Get in Touch'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t.contact.form.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder={t.contact.form.message}
                  />
                </div>

                {/* KVKK Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="kvkk-contact"
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 accent-amber-500 flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="kvkk-contact" className="text-sm text-gray-500 cursor-pointer leading-relaxed">
                    {language === 'tr' ? (
                      <>
                        <Link to="/kvkk" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-medium">
                          KVKK Aydınlatma Metni
                        </Link>
                        'ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
                      </>
                    ) : language === 'de' ? (
                      <>
                        Ich habe die{' '}
                        <Link to="/kvkk" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-medium">
                          Datenschutzerklärung
                        </Link>{' '}
                        gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zu.
                      </>
                    ) : language === 'es' ? (
                      <>
                        He leído el{' '}
                        <Link to="/kvkk" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-medium">
                          Aviso de Privacidad
                        </Link>{' '}
                        y acepto el tratamiento de mis datos personales.
                      </>
                    ) : language === 'it' ? (
                      <>
                        Ho letto l'{' '}
                        <Link to="/kvkk" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-medium">
                          Informativa sulla Privacy
                        </Link>{' '}
                        e accetto il trattamento dei miei dati personali.
                      </>
                    ) : (
                      <>
                        I have read the{' '}
                        <Link to="/kvkk" target="_blank" className="text-amber-600 hover:text-amber-700 underline font-medium">
                          Privacy Notice (KVKK)
                        </Link>{' '}
                        and consent to the processing of my personal data.
                      </>
                    )}
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !kvkkAccepted}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 
                    (language === 'tr' ? 'Gönderiliyor...' : 
                     language === 'de' ? 'Wird gesendet...' :
                     language === 'es' ? 'Enviando...' :
                     language === 'it' ? 'Invio in corso...' :
                     'Sending...') : 
                    t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.1234567890123!2d36.9!3d37.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzAwLjAiTiAzNsKwNTQnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karbak Metal Location"
          />
        </div>
      </section>
    </div>
  );
}
