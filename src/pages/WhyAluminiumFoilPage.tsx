import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import { 
  Leaf, 
  Shield, 
  Zap, 
  Layers, 
  Box, 
  Thermometer, 
  RefreshCw, 
  Flame,
  Wind,
  Sun,
  Droplets,
  Sparkles,
  CheckCircle,
  Lock,
  Beaker
} from 'lucide-react';

export default function WhyAluminiumFoilPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    {
      icon: Leaf,
      title: t.whyAluminiumFoil.resourceEfficiency,
      description: t.whyAluminiumFoil.resourceEfficiencyDesc,
    },
    {
      icon: Shield,
      title: t.whyAluminiumFoil.barrierProtection,
      description: t.whyAluminiumFoil.barrierProtectionDesc,
    },
    {
      icon: Zap,
      title: t.whyAluminiumFoil.strengthDurability,
      description: t.whyAluminiumFoil.strengthDurabilityDesc,
    },
    {
      icon: Layers,
      title: t.whyAluminiumFoil.formability,
      description: t.whyAluminiumFoil.formabilityDesc,
    },
    {
      icon: Box,
      title: t.whyAluminiumFoil.lightweight,
      description: t.whyAluminiumFoil.lightweightDesc,
    },
    {
      icon: CheckCircle,
      title: t.whyAluminiumFoil.structuralStability,
      description: t.whyAluminiumFoil.structuralStabilityDesc,
    },
    {
      icon: RefreshCw,
      title: t.whyAluminiumFoil.recyclability,
      description: t.whyAluminiumFoil.recyclabilityDesc,
    },
    {
      icon: Flame,
      title: t.whyAluminiumFoil.energyRecovery,
      description: t.whyAluminiumFoil.energyRecoveryDesc,
    },
    {
      icon: Thermometer,
      title: t.whyAluminiumFoil.thermalPerformance,
      description: t.whyAluminiumFoil.thermalPerformanceDesc,
    },
    {
      icon: Wind,
      title: t.whyAluminiumFoil.insulationEfficiency,
      description: t.whyAluminiumFoil.insulationEfficiencyDesc,
    },
    {
      icon: Droplets,
      title: t.whyAluminiumFoil.electricalConductivity,
      description: t.whyAluminiumFoil.electricalConductivityDesc,
    },
    {
      icon: Sun,
      title: t.whyAluminiumFoil.reflectiveProperties,
      description: t.whyAluminiumFoil.reflectivePropertiesDesc,
    },
    {
      icon: Sparkles,
      title: t.whyAluminiumFoil.surfaceFlexibility,
      description: t.whyAluminiumFoil.surfaceFlexibilityDesc,
    },
    {
      icon: Beaker,
      title: t.whyAluminiumFoil.hygieneSafety,
      description: t.whyAluminiumFoil.hygieneSafetyDesc,
    },
    {
      icon: Lock,
      title: t.whyAluminiumFoil.productSecurity,
      description: t.whyAluminiumFoil.productSecurityDesc,
    },
  ];

  const getTechnicalSpecs = () => {
    const specs = {
      tr: [
        { property: 'Yoğunluk', value: '2.7 g/cm³' },
        { property: 'Özgül Ağırlık', value: '6.35 µm folyo ≈ 17.2 g/m²' },
        { property: 'Erime Noktası', value: '660°C' },
        { property: 'Elektriksel İletkenlik', value: '64.94% IACS' },
        { property: 'Elektriksel Direnç', value: '26.5 nΩ·m' },
        { property: 'Termal İletkenlik', value: '235 W/m·K' },
        { property: 'Kalınlık', value: '< 0.2 mm (< 200 µm)' },
      ],
      de: [
        { property: 'Dichte', value: '2.7 g/cm³' },
        { property: 'Spezifisches Gewicht', value: '6.35 µm Folie ≈ 17.2 g/m²' },
        { property: 'Schmelzpunkt', value: '660°C' },
        { property: 'Elektrische Leitfähigkeit', value: '64.94% IACS' },
        { property: 'Elektrischer Widerstand', value: '26.5 nΩ·m' },
        { property: 'Thermische Leitfähigkeit', value: '235 W/m·K' },
        { property: 'Dicke', value: '< 0.2 mm (< 200 µm)' },
      ],
      es: [
        { property: 'Densidad', value: '2.7 g/cm³' },
        { property: 'Peso Específico', value: '6.35 µm lámina ≈ 17.2 g/m²' },
        { property: 'Punto de Fusión', value: '660°C' },
        { property: 'Conductividad Eléctrica', value: '64.94% IACS' },
        { property: 'Resistividad Eléctrica', value: '26.5 nΩ·m' },
        { property: 'Conductividad Térmica', value: '235 W/m·K' },
        { property: 'Espesor', value: '< 0.2 mm (< 200 µm)' },
      ],
      it: [
        { property: 'Densità', value: '2.7 g/cm³' },
        { property: 'Peso Specifico', value: '6.35 µm foglio ≈ 17.2 g/m²' },
        { property: 'Punto di Fusione', value: '660°C' },
        { property: 'Conduttività Elettrica', value: '64.94% IACS' },
        { property: 'Resistività Elettrica', value: '26.5 nΩ·m' },
        { property: 'Conduttività Termica', value: '235 W/m·K' },
        { property: 'Spessore', value: '< 0.2 mm (< 200 µm)' },
      ],
      en: [
        { property: 'Density', value: '2.7 g/cm³' },
        { property: 'Specific Weight', value: '6.35 µm foil ≈ 17.2 g/m²' },
        { property: 'Melting Point', value: '660°C' },
        { property: 'Electrical Conductivity', value: '64.94% IACS' },
        { property: 'Electrical Resistivity', value: '26.5 nΩ·m' },
        { property: 'Thermal Conductivity', value: '235 W/m·K' },
        { property: 'Thickness', value: '< 0.2 mm (< 200 µm)' },
      ],
    };
    return specs[language];
  };

  const technicalSpecs = getTechnicalSpecs();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/alvoral-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.whyAluminiumFoil.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 mb-4">
              {t.whyAluminiumFoil.subtitle}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.whyAluminiumFoil.characteristics}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'tr' 
                ? 'Alüminyum folyo, ambalaj, endüstriyel ve teknik uygulamalarda yaygın olarak kullanılan yüksek performanslı, çok yönlü bir malzemedir. Koruyucu, mekanik ve fonksiyonel özelliklerinin benzersiz kombinasyonu, kaliteyi koruma, verimliliği artırma ve birden fazla sektörde sürdürülebilirliği destekleme konusunda temel bir çözüm haline getirmektedir.'
                : language === 'de'
                  ? 'Aluminiumfolie ist ein leistungsstarkes, vielseitiges Material, das in der Verpackungs-, Industrie- und Technikbranche weit verbreitet ist. Die einzigartige Kombination aus schützenden, mechanischen und funktionellen Eigenschaften macht sie zu einer wesentlichen Lösung zur Qualitätserhaltung, Effizienzsteigerung und Unterstützung der Nachhaltigkeit in verschiedenen Branchen.'
                  : language === 'es'
                    ? 'La lámina de aluminio es un material versátil y de alto rendimiento ampliamente utilizado en aplicaciones de embalaje, industriales y técnicas. Su combinación única de propiedades protectoras, mecánicas y funcionales lo convierte en una solución esencial para preservar la calidad, mejorar la eficiencia y apoyar la sostenibilidad en múltiples industrias.'
                    : language === 'it'
                      ? 'Il foglio di alluminio è un materiale versatile e ad alte prestazioni ampiamente utilizzato nelle applicazioni di imballaggio, industriali e tecniche. La sua combinazione unica di proprietà protettive, meccaniche e funzionali lo rende una soluzione essenziale per preservare la qualità, migliorare l\'efficienza e supportare la sostenibilità in diversi settori.'
                      : 'Aluminium foil is a high-performance, versatile material widely used across packaging, industrial, and technical applications. Its unique combination of protective, mechanical, and functional properties makes it an essential solution for preserving quality, improving efficiency, and supporting sustainability across multiple industries.'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Aluminium Foil Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.whyAluminiumFoil.whyTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'tr'
                ? 'Alüminyum folyo, mukavemet, esneklik, bariyer koruması ve sürdürülebilirlik dengeli bir kombinasyon sunar. Kaynak kullanımını optimize ederken çevresel etkiyi en aza indirmek ve modern performans gereksinimlerini karşılamak için tasarlanmıştır.'
                : language === 'de'
                  ? 'Aluminiumfolie bietet eine ausgewogene Kombination aus Festigkeit, Flexibilität, Barrierschutz und Nachhaltigkeit. Sie ist darauf ausgelegt, moderne Leistungsanforderungen zu erfüllen, während der Ressourcenverbrauch optimiert und die Umweltauswirkungen minimiert werden.'
                  : language === 'es'
                    ? 'La lámina de aluminio ofrece una combinación equilibrada de resistencia, flexibilidad, protección de barrera y sostenibilidad. Está diseñada para cumplir con los requisitos de rendimiento modernos mientras optimiza el uso de recursos y minimiza el impacto ambiental.'
                    : language === 'it'
                      ? 'Il foglio di alluminio offre una combinazione equilibrata di resistenza, flessibilità, protezione barriera e sostenibilità. È progettato per soddisfare i requisiti prestazionali moderni ottimizzando l\'uso delle risorse e minimizzando l\'impatto ambientale.'
                      : 'Aluminium foil delivers a balanced combination of strength, flexibility, barrier protection, and sustainability. It is designed to meet modern performance requirements while optimizing resource use and minimizing environmental impact.'}
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyAluminiumFoil.advantages}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.whyAluminiumFoil.technicalSpecs}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-500">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    {t.whyAluminiumFoil.property}
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    {t.whyAluminiumFoil.value}
                  </th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
                  >
                    <td className="px-6 py-4 text-gray-300">{spec.property}</td>
                    <td className="px-6 py-4 text-white font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'tr' ? 'Alüminyum Folyo Çözümlerimizi Keşfedin' : 
             language === 'de' ? 'Entdecken Sie unsere Aluminiumfolien-Lösungen' :
             language === 'es' ? 'Descubra nuestras soluciones de lámina de aluminio' :
             language === 'it' ? 'Scopri le nostre soluzioni in foglio di alluminio' :
             'Discover Our Aluminium Foil Solutions'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {language === 'tr' ? 'Endüstriyel ve ambalaj uygulamalarınız için özelleştirilmiş çözümler sunuyoruz.' :
             language === 'de' ? 'Wir bieten maßgeschneiderte Lösungen für Ihre industriellen und Verpackungsanwendungen.' :
             language === 'es' ? 'Ofrecemos soluciones personalizadas para sus aplicaciones industriales y de embalaje.' :
             language === 'it' ? 'Offriamo soluzioni personalizzate per le vostre applicazioni industriali e di imballaggio.' :
             'We offer customized solutions for your industrial and packaging applications.'}
          </p>
          <a 
            href="/products"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {t.products.title}
          </a>
        </div>
      </section>
    </div>
  );
}
