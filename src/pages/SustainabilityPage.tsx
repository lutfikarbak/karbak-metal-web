import { useEffect } from 'react';
import { Leaf, Sun, Droplets, Wind, Recycle, TreePine, Zap, Award, TrendingUp, Shield, Beaker, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function SustainabilityPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initiatives = [
    {
      icon: Sun,
      title: language === 'tr' ? 'Güneş Enerjisi' : language === 'de' ? 'Solarenergie' : language === 'es' ? 'Energía Solar' : 'Solar Energy',
      value: '2.5 MW',
      description: language === 'tr'
        ? 'Fabrikamızda 2.5 MW kurulu güce sahip güneş enerjisi santrali ile temiz enerji üretiyoruz.'
        : language === 'de'
          ? 'Wir produzieren saubere Energie mit einer 2,5 MW Solarenergieanlage in unserer Fabrik.'
          : language === 'es'
            ? 'Producimos energía limpia con una planta de energía solar de 2,5 MW en nuestra fábrica.'
            : 'We produce clean energy with a 2.5 MW solar power plant at our factory.'
    },
    {
      icon: Recycle,
      title: language === 'tr' ? 'Geri Dönüşüm' : language === 'de' ? 'Recycling' : language === 'es' ? 'Reciclaje' : 'Recycling',
      value: '95%',
      description: language === 'tr'
        ? 'Üretim süreçlerimizde %95 geri dönüştürülebilir malzeme kullanımı hedefliyoruz.'
        : language === 'de'
          ? 'Wir streben eine Nutzung von 95% recycelbaren Materialien in unseren Produktionsprozessen an.'
          : language === 'es'
            ? 'Buscamos un uso del 95% de materiales reciclables en nuestros procesos de producción.'
            : 'We aim for 95% recyclable material usage in our production processes.'
    },
    {
      icon: Droplets,
      title: language === 'tr' ? 'Su Tasarrufu' : language === 'de' ? 'Wassereinsparung' : language === 'es' ? 'Ahorro de Agua' : 'Water Conservation',
      value: '40%',
      description: language === 'tr'
        ? 'Su geri kazanım sistemleri ile yıllık su tüketimimizi %40 azalttık.'
        : language === 'de'
          ? 'Wir haben unseren jährlichen Wasserverbrauch durch Wasserrückgewinnungssysteme um 40% reduziert.'
          : language === 'es'
            ? 'Hemos reducido nuestro consumo anual de agua en un 40% con sistemas de recuperación de agua.'
            : 'We have reduced our annual water consumption by 40% with water recovery systems.'
    },
    {
      icon: Wind,
      title: language === 'tr' ? 'Emisyon Azaltımı' : language === 'de' ? 'Emissionsreduzierung' : language === 'es' ? 'Reducción de Emisiones' : 'Emission Reduction',
      value: '3.200',
      description: language === 'tr'
        ? 'Yılda 3.200 ton CO₂ tasarrufu sağlıyoruz.'
        : language === 'de'
          ? 'Wir sparen jährlich 3.200 Tonnen CO₂.'
          : language === 'es'
            ? 'Ahorramos 3.200 toneladas de CO₂ al año.'
            : 'We save 3,200 tons of CO₂ annually.'
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001',
      description: language === 'tr'
        ? 'Kalite Yönetim Sistemi sertifikası ile uluslararası kalite standartlarına uygun üretim gerçekleştiriyoruz.'
        : language === 'de'
          ? 'Wir führen eine Produktion durch, die den internationalen Qualitätsstandards entspricht, mit der ISO 9001 Qualitätsmanagementsystem-Zertifizierung.'
          : language === 'es'
            ? 'Llevamos a cabo una producción conforme a los estándares internacionales de calidad con la certificación del Sistema de Gestión de Calidad ISO 9001.'
            : 'We carry out production in accordance with international quality standards with ISO 9001 Quality Management System certification.'
    },
    {
      icon: Shield,
      title: 'ISO 14001',
      description: language === 'tr'
        ? 'Çevre Yönetim Sistemi sertifikası ile çevresel etkilerimizi sistematik olarak yönetiyoruz.'
        : language === 'de'
          ? 'Wir managen unsere Umweltauswirkungen systematisch mit der ISO 14001 Umweltmanagementsystem-Zertifizierung.'
          : language === 'es'
            ? 'Gestionamos sistemáticamente nuestros impactos ambientales con la certificación del Sistema de Gestión Ambiental ISO 14001.'
            : 'We systematically manage our environmental impacts with ISO 14001 Environmental Management System certification.'
    },
    {
      icon: Leaf,
      title: 'ISO 45001',
      description: language === 'tr'
        ? 'İş Sağlığı ve Güvenliği Yönetim Sistemi ile çalışanlarımızın güvenliğini garanti altına alıyoruz.'
        : language === 'de'
          ? 'Wir garantieren die Sicherheit unserer Mitarbeiter mit dem Arbeitsschutzmanagementsystem.'
          : language === 'es'
            ? 'Garantizamos la seguridad de nuestros empleados con el Sistema de Gestión de Salud y Seguridad Ocupacional.'
            : 'We guarantee the safety of our employees with the Occupational Health and Safety Management System.'
    },
    {
      icon: Recycle,
      title: 'RoHS',
      description: language === 'tr'
        ? 'Zararlı maddelerin kısıtlanması direktifine tam uyumlu üretim yapıyoruz.'
        : language === 'de'
          ? 'Wir produzieren in voller Übereinstimmung mit der Richtlinie zur Beschränkung gefährlicher Stoffe.'
          : language === 'es'
            ? 'Producimos en total conformidad con la directiva de restricción de sustancias peligrosas.'
            : 'We produce in full compliance with the directive restricting hazardous substances.'
    },
    {
      icon: Beaker,
      title: 'REACH',
      description: language === 'tr'
        ? 'Kimyasalların kaydı, değerlendirilmesi ve izni yönetmeliğine uygun üretim.'
        : language === 'de'
          ? 'Produktion in Übereinstimmung mit der Verordnung über die Registrierung, Bewertung und Zulassung von Chemikalien.'
          : language === 'es'
            ? 'Producción conforme al reglamento sobre registro, evaluación y autorización de productos químicos.'
            : 'Production in compliance with the regulation on registration, evaluation and authorization of chemicals.'
    },
    {
      icon: Sun,
      title: 'ISO 50001',
      description: language === 'tr'
        ? 'Enerji Yönetim Sistemi ile enerji verimliliğini sürekli iyileştiriyoruz.'
        : language === 'de'
          ? 'Wir verbessern die Energieeffizienz kontinuierlich mit dem Energiemanagementsystem.'
          : language === 'es'
            ? 'Mejoramos continuamente la eficiencia energética con el Sistema de Gestión de Energía.'
            : 'We continuously improve energy efficiency with the Energy Management System.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/ges-factory.jpg" alt="Sustainability" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'tr' ? 'Sürdürülebilirlik' : language === 'de' ? 'Nachhaltigkeit' : language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
            </h1>
            <p className="text-2xl text-amber-400 mb-8">
              {language === 'tr' ? 'Gelecek İçin Üretiyoruz' : language === 'de' ? 'Wir Produzieren für die Zukunft' : language === 'es' ? 'Producimos para el Futuro' : 'Producing for the Future'}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* GES Section - Solar Power Plant - Left Text Right Image */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text and Stats */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.ges.title}</h2>
              <p className="text-xl text-gray-400 mb-6">{t.ges.subtitle}</p>
              
              {/* Stats Cards - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">2.5 MW</div>
                  <div className="text-gray-400">{t.ges.power}</div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">3.5 M</div>
                  <div className="text-gray-400">{t.ges.production}</div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">3.200</div>
                  <div className="text-gray-400">{t.ges.co2}</div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">1.200</div>
                  <div className="text-gray-400">{t.ges.households}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{t.ges.location}</span>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/ges-factory.jpg" alt="GES" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? 'Sürdürülebilirlik Yaklaşımımız' : language === 'de' ? 'Unser Nachhaltigkeitsansatz' : language === 'es' ? 'Nuestro Enfoque de Sostenibilidad' : 'Our Sustainability Approach'}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {language === 'tr'
                  ? 'Karbak Metal olarak, üretimin yalnızca ekonomik değer yaratmakla sınırlı olmadığına; çevresel, sosyal ve yönetişim odaklı sorumlulukları da kapsayan bütüncül bir süreç olduğuna inanıyoruz.'
                  : language === 'de'
                    ? 'Bei Karbak Metal glauben wir, dass Produktion nicht nur auf wirtschaftliche Wertschöpfung beschränkt ist; es ist ein ganzheitlicher Prozess, der Umwelt-, Sozial- und Governance-Verantwortung umfasst.'
                    : language === 'es'
                      ? 'En Karbak Metal, creemos que la producción no se limita a crear valor económico; es un proceso holístico que abarca responsabilidades ambientales, sociales y de gobernanza.'
                      : 'At Karbak Metal, we believe that production is not limited to creating economic value; it is a holistic process that encompasses environmental, social, and governance responsibilities.'}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {language === 'tr'
                  ? '1970\'ten bu yana sektörün köklü kuruluşlarından biri olarak, geleceğe bırakacağımız en önemli mirasın sürdürülebilir bir üretim anlayışı olduğunun bilincindeyiz.'
                  : language === 'de'
                    ? 'Als eines der etablierten Unternehmen der Branche seit 1970 sind wir uns bewusst, dass das wichtigste Erbe, das wir der Zukunft hinterlassen werden, ein nachhaltiger Produktionsansatz ist.'
                    : language === 'es'
                      ? 'Como una de las organizaciones establecidas del sector desde 1970, somos conscientes de que el legado más importante que dejaremos al futuro es un enfoque de producción sostenible.'
                      : 'As one of the established organizations in the sector since 1970, we are aware that the most important legacy we will leave to the future is a sustainable production approach.'}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/solar-panels.jpg" alt="Sustainability" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/factory-building.jpg" alt="Environment" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.sustainability.environmental}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.sustainability.environmentalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Çevresel Girişimlerimiz' : language === 'de' ? 'Unsere Umweltinitiativen' : language === 'es' ? 'Nuestras Iniciativas Ambientales' : 'Our Environmental Initiatives'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <initiative.icon className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-amber-600 mb-2">{initiative.value}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.sustainability.social}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t.sustainability.socialDesc}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/aluminum-coils-factory.jpg" alt="Technology" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/casting-furnace.jpg" alt="Social Responsibility" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.sustainability.production}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.sustainability.productionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Sertifikalarımız' : language === 'de' ? 'Unsere Zertifizierungen' : language === 'es' ? 'Nuestras Certificaciones' : 'Our Certifications'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <cert.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t.sustainability.futureVision}
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            {t.sustainability.futureVisionDesc}
          </p>
        </div>
      </section>
    </div>
  );
}
