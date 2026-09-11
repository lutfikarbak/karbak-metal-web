import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations, products } from '@/lib/translations';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { QuoteFormModal } from '@/components/QuoteFormModal';
import { SampleFormModal } from '@/components/SampleFormModal';

export default function ProductsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleSampleRequest = (productName: string) => {
    setSelectedProduct(productName);
    setSampleModalOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/alvoral-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.products.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 mb-4">
              {t.products.subtitle}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Products Grid - All Products Single List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

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
