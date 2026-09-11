import { useEffect } from 'react';
import { Award, Factory, TrendingUp, Globe, Shield, Leaf, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Factory, value: '50+', label: language === 'tr' ? 'Yıllık Deneyim' : language === 'de' ? 'Jahre Erfahrung' : language === 'es' ? 'Años de Experiencia' : 'Years of Experience' },
    { icon: TrendingUp, value: '24.000', label: language === 'tr' ? 'Ton/Yıl Kapasite' : language === 'de' ? 'Tonnen/Jahr Kapazität' : language === 'es' ? 'Toneladas/Año Capacidad' : 'Tons/Year Capacity' },
    { icon: Globe, value: '30+', label: language === 'tr' ? 'Ülke' : language === 'de' ? 'Länder' : language === 'es' ? 'Países' : 'Countries' },
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'tr' ? 'Kalite Garantisi' : language === 'de' ? 'Qualitätsgarantie' : language === 'es' ? 'Garantía de Calidad' : 'Quality Guarantee',
      description: language === 'tr' 
        ? 'ISO 9001, ISO 14001 ve ISO 45001 sertifikaları ile uluslararası standartlarda üretim yapıyoruz.' 
        : language === 'de' 
          ? 'Wir produzieren nach internationalen Standards mit ISO 9001, ISO 14001 und ISO 45001 Zertifikaten.'
          : language === 'es'
            ? 'Producimos según estándares internacionales con certificaciones ISO 9001, ISO 14001 e ISO 45001.'
            : 'We produce according to international standards with ISO 9001, ISO 14001 and ISO 45001 certifications.'
    },
    {
      icon: Leaf,
      title: language === 'tr' ? 'Çevre Dostu' : language === 'de' ? 'Umweltfreundlich' : language === 'es' ? 'Respetuoso con el Medio Ambiente' : 'Eco-Friendly',
      description: language === 'tr'
        ? '2.5 MW güneş enerjisi santralimiz ile sürdürülebilir üretim yapıyoruz.'
        : language === 'de'
          ? 'Mit unserer 2,5 MW Solarenergieanlage produzieren wir nachhaltig.'
          : language === 'es'
            ? 'Con nuestra planta de energía solar de 2,5 MW, producimos de manera sostenible.'
            : 'With our 2.5 MW solar power plant, we produce sustainably.'
    },
    {
      icon: Zap,
      title: language === 'tr' ? 'Yüksek Verimlilik' : language === 'de' ? 'Hohe Effizienz' : language === 'es' ? 'Alta Eficiencia' : 'High Efficiency',
      description: language === 'tr'
        ? 'Modern üretim hatlarımız ile yüksek verimlilik ve düşük enerji tüketimi sağlıyoruz.'
        : language === 'de'
          ? 'Mit unseren modernen Produktionslinien gewährleisten wir hohe Effizienz und niedrigen Energieverbrauch.'
          : language === 'es'
            ? 'Con nuestras líneas de producción modernas, garantizamos alta eficiencia y bajo consumo de energía.'
            : 'With our modern production lines, we ensure high efficiency and low energy consumption.'
    },
    {
      icon: Award,
      title: language === 'tr' ? 'Sertifikalı Üretim' : language === 'de' ? 'Zertifizierte Produktion' : language === 'es' ? 'Producción Certificada' : 'Certified Production',
      description: language === 'tr'
        ? 'RoHS ve REACH direktiflerine tam uyumlu, insan sağlığına duyarlı üretim.'
        : language === 'de'
          ? 'Vollständig konform mit RoHS- und REACH-Richtlinien, gesundheitsbewusste Produktion.'
          : language === 'es'
            ? 'Totalmente conforme con las directivas RoHS y REACH, producción consciente de la salud.'
            : 'Fully compliant with RoHS and REACH directives, health-conscious production.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img src="/images/factory-building.jpg" alt="Factory" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t.about.title}</h1>
            <p className="text-2xl text-amber-400 mb-8">{t.about.companyName}</p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? '1970\'den Beri Güvenilirlik' : language === 'de' ? 'Verlässlichkeit seit 1970' : language === 'es' ? 'Confiabilidad desde 1970' : 'Reliability Since 1970'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{t.about.description1}</p>
              <p className="text-gray-600 leading-relaxed text-lg">{t.about.description2}</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/aluminum-coils-factory.jpg" alt="Production" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/casting-furnace.jpg" alt="Technology" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{t.about.description3}</p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{t.about.description4}</p>
              <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-500">
                <p className="text-amber-800 font-medium">
                  {language === 'tr' 
                    ? '6 mikron - 500 mikron arası kalınlık | 1xxx, 3xxx, 8xxx serisi alaşımlar'
                    : language === 'de'
                      ? 'Dicke 6-500 Mikron | Legierungen der Serien 1xxx, 3xxx, 8xxx'
                      : language === 'es'
                        ? 'Espesor 6-500 micrones | Aleaciones de series 1xxx, 3xxx, 8xxx'
                        : 'Thickness 6-500 microns | 1xxx, 3xxx, 8xxx series alloys'}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg text-center">{t.about.description5}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Neden Karbak Metal?' : language === 'de' ? 'Warum Karbak Metal?' : language === 'es' ? '¿Por qué Karbak Metal?' : 'Why Karbak Metal?'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
