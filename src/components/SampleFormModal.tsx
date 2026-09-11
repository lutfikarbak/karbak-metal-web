import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { products } from '@/lib/translations';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FlaskConical } from 'lucide-react';
import { toast } from 'sonner';

interface SampleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
}

export function SampleFormModal({ isOpen, onClose, selectedProduct = '' }: SampleFormModalProps) {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: selectedProduct,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjgjblvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          adSoyad: formData.name,
          firmaAdi: formData.company,
          email: formData.email,
          telefon: formData.phone,
          urunAdi: formData.product,
          mesaj: formData.message,
          talepTuru: 'numune',
          _subject: `Numune Talebi - ${formData.product || 'Genel'}`,
        }),
      });

      if (response.ok) {
        toast.success(
          language === 'tr' ? 'Numune talebiniz gönderildi!' :
          language === 'de' ? 'Ihre Musteranfrage wurde gesendet!' :
          language === 'es' ? '¡Su solicitud de muestra ha sido enviada!' :
          language === 'it' ? 'La tua richiesta di campione è stata inviata!' :
          'Your sample request has been sent!'
        );
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          product: '',
          message: '',
        });
        onClose();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error(
        language === 'tr' ? 'Form gönderilemedi. Lütfen tekrar deneyin.' :
        language === 'de' ? 'Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' :
        language === 'es' ? 'No se pudo enviar el formulario. Por favor, inténtelo de nuevo.' :
        language === 'it' ? 'Impossibile inviare il modulo. Per favore riprova.' :
        'Form could not be sent. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const productOptions = products.map(p => ({
    value: language === 'tr' ? p.title : p.titleEn,
    label: language === 'tr' ? p.title : p.titleEn,
  }));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900 text-white border-gray-700 p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-white">
              {language === 'tr' ? 'Numune Talep Et' : 
               language === 'de' ? 'Muster Anfordern' :
               language === 'es' ? 'Solicitar Muestra' :
               language === 'it' ? 'Richiedi Campione' :
               'Request Sample'}
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === 'tr' ? 'Ad Soyad' : 
                 language === 'de' ? 'Name' :
                 language === 'es' ? 'Nombre Completo' :
                 language === 'it' ? 'Nome e Cognome' :
                 'Full Name'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder={language === 'tr' ? 'Ad Soyad' : 'Full Name'}
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === 'tr' ? 'Firma Adı' : 
                 language === 'de' ? 'Firmenname' :
                 language === 'es' ? 'Nombre de la Empresa' :
                 language === 'it' ? 'Nome Azienda' :
                 'Company Name'}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder={language === 'tr' ? 'Firma Adı' : 'Company Name'}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === 'tr' ? 'E-posta' : 
                 language === 'de' ? 'E-Mail' :
                 language === 'es' ? 'Correo Electrónico' :
                 language === 'it' ? 'Email' :
                 'Email'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="email@firma.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === 'tr' ? 'Telefon' : 
                 language === 'de' ? 'Telefon' :
                 language === 'es' ? 'Teléfono' :
                 language === 'it' ? 'Telefono' :
                 'Phone'}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+90 5XX XXX XX XX"
              />
            </div>
          </div>

          {/* Product Selection - Full Width */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {language === 'tr' ? 'Ürün Seçimi' : 
               language === 'de' ? 'Produktauswahl' :
               language === 'es' ? 'Selección de Producto' :
               language === 'it' ? 'Selezione Prodotto' :
               'Product Selection'}
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
            >
              <option value="">
                {language === 'tr' ? 'Ürün seçin' : 
                 language === 'de' ? 'Produkt auswählen' :
                 language === 'es' ? 'Seleccionar producto' :
                 language === 'it' ? 'Seleziona prodotto' :
                 'Select product'}
              </option>
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {language === 'tr' ? 'Mesajınız' : 
               language === 'de' ? 'Ihre Nachricht' :
               language === 'es' ? 'Su Mensaje' :
               language === 'it' ? 'Il tuo Messaggio' :
               'Your Message'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              placeholder={language === 'tr' ? 'Talebiniz hakkında detaylı bilgi...' : 'Detailed information about your request...'}
            />
          </div>

          {/* KVKK Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="kvkk-sample"
              checked={kvkkAccepted}
              onChange={(e) => setKvkkAccepted(e.target.checked)}
              required
              className="mt-1 w-4 h-4 accent-amber-500 flex-shrink-0 cursor-pointer"
            />
            <label htmlFor="kvkk-sample" className="text-sm text-gray-400 cursor-pointer leading-relaxed">
              {language === 'tr' ? (
                <>
                  <Link to="/kvkk" target="_blank" className="text-amber-400 hover:text-amber-300 underline font-medium">
                    KVKK Aydınlatma Metni
                  </Link>
                  'ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
                </>
              ) : language === 'de' ? (
                <>
                  Ich habe die{' '}
                  <Link to="/kvkk" target="_blank" className="text-amber-400 hover:text-amber-300 underline font-medium">
                    Datenschutzerklärung
                  </Link>{' '}
                  gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zu.
                </>
              ) : language === 'es' ? (
                <>
                  He leído el{' '}
                  <Link to="/kvkk" target="_blank" className="text-amber-400 hover:text-amber-300 underline font-medium">
                    Aviso de Privacidad
                  </Link>{' '}
                  y acepto el tratamiento de mis datos personales.
                </>
              ) : language === 'it' ? (
                <>
                  Ho letto l'{' '}
                  <Link to="/kvkk" target="_blank" className="text-amber-400 hover:text-amber-300 underline font-medium">
                    Informativa sulla Privacy
                  </Link>{' '}
                  e accetto il trattamento dei miei dati personali.
                </>
              ) : (
                <>
                  I have read the{' '}
                  <Link to="/kvkk" target="_blank" className="text-amber-400 hover:text-amber-300 underline font-medium">
                    Privacy Notice (KVKK)
                  </Link>{' '}
                  and consent to the processing of my personal data.
                </>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !kvkkAccepted}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FlaskConical className="w-5 h-5 mr-2" />
            {isSubmitting ? 
              (language === 'tr' ? 'Gönderiliyor...' : 
               language === 'de' ? 'Wird gesendet...' :
               language === 'es' ? 'Enviando...' :
               language === 'it' ? 'Invio in corso...' :
               'Sending...') : 
              (language === 'tr' ? 'Numune Talep Et' : 
               language === 'de' ? 'Muster Anfordern' :
               language === 'es' ? 'Solicitar Muestra' :
               language === 'it' ? 'Richiedi Campione' :
               'Request Sample')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
