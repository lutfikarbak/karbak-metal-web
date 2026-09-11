import { useEffect } from 'react';
import { Eye, Target, Lightbulb, Heart, Shield, Globe, Zap, Users, Award, TrendingUp, Leaf } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function VisionPage() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: language === 'tr' ? 'Güvenilirlik' : language === 'de' ? 'Zuverlässigkeit' : language === 'es' ? 'Confiabilidad' : 'Reliability',
      description: language === 'tr' 
        ? '50 yılı aşkın tecrübemizle müşterilerimize güvenilir çözümler sunuyoruz.'
        : language === 'de'
          ? 'Mit über 50 Jahren Erfahrung bieten wir unseren Kunden zuverlässige Lösungen.'
          : language === 'es'
            ? 'Con más de 50 años de experiencia, ofrecemos soluciones confiables a nuestros clientes.'
            : 'With over 50 years of experience, we provide reliable solutions to our customers.'
    },
    {
      icon: Lightbulb,
      title: language === 'tr' ? 'İnovasyon' : language === 'de' ? 'Innovation' : language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'tr'
        ? 'Sürekli gelişim ve teknolojik yeniliklerle sektörün öncüsüyüz.'
        : language === 'de'
          ? 'Wir sind Vorreiter in der Branche durch kontinuierliche Entwicklung und technologische Innovationen.'
          : language === 'es'
            ? 'Somos líderes en el sector con desarrollo continuo e innovaciones tecnológicas.'
            : 'We are industry leaders through continuous development and technological innovations.'
    },
    {
      icon: Heart,
      title: language === 'tr' ? 'Müşteri Odaklılık' : language === 'de' ? 'Kundenorientierung' : language === 'es' ? 'Orientación al Cliente' : 'Customer Focus',
      description: language === 'tr'
        ? 'Müşteri memnuniyeti bizim için her zaman önceliklidir.'
        : language === 'de'
          ? 'Kundenzufriedenheit hat für uns immer Priorität.'
          : language === 'es'
            ? 'La satisfacción del cliente siempre es prioritaria para nosotros.'
            : 'Customer satisfaction is always a priority for us.'
    },
    {
      icon: Globe,
      title: language === 'tr' ? 'Sürdürülebilirlik' : language === 'de' ? 'Nachhaltigkeit' : language === 'es' ? 'Sostenibilidad' : 'Sustainability',
      description: language === 'tr'
        ? 'Çevreye duyarlı üretim ve sürdürülebilir büyüme ilkeleriyle çalışıyoruz.'
        : language === 'de'
          ? 'Wir arbeiten nach Prinzipien der umweltbewussten Produktion und des nachhaltigen Wachstums.'
          : language === 'es'
            ? 'Trabajamos con principios de producción consciente del medio ambiente y crecimiento sostenible.'
            : 'We work with principles of environmentally conscious production and sustainable growth.'
    },
    {
      icon: Award,
      title: language === 'tr' ? 'Kalite' : language === 'de' ? 'Qualität' : language === 'es' ? 'Calidad' : 'Quality',
      description: language === 'tr'
        ? 'En yüksek kalite standartlarında üretim yaparak müşterilerimize değer katıyoruz.'
        : language === 'de'
          ? 'Wir schaffen Mehrwert für unsere Kunden durch Produktion nach höchsten Qualitätsstandards.'
          : language === 'es'
            ? 'Agregamos valor a nuestros clientes mediante la producción según los más altos estándares de calidad.'
            : 'We add value to our customers by producing to the highest quality standards.'
    },
    {
      icon: Users,
      title: language === 'tr' ? 'İnsana Değer' : language === 'de' ? 'Menschlicher Wert' : language === 'es' ? 'Valor Humano' : 'Human Value',
      description: language === 'tr'
        ? 'Çalışanlarımızın gelişimi ve refahı için sürekli yatırım yapıyoruz.'
        : language === 'de'
          ? 'Wir investieren kontinuierlich in die Entwicklung und das Wohlbefinden unserer Mitarbeiter.'
          : language === 'es'
            ? 'Invertimos continuamente en el desarrollo y bienestar de nuestros empleados.'
            : 'We continuously invest in the development and well-being of our employees.'
    },
  ];

  const goals = [
    {
      icon: TrendingUp,
      title: language === 'tr' ? 'Küresel Büyüme' : language === 'de' ? 'Globales Wachstum' : language === 'es' ? 'Crecimiento Global' : 'Global Growth',
      description: language === 'tr'
        ? '30+ ülkeye ihracat yaparak küresel pazarlarda güçlü bir varlık oluşturmak.'
        : language === 'de'
          ? 'Eine starke Präsenz in globalen Märkten durch Exporte in über 30 Länder aufbauen.'
          : language === 'es'
            ? 'Construir una fuerte presencia en mercados globales mediante exportaciones a más de 30 países.'
            : 'Build a strong presence in global markets through exports to 30+ countries.'
    },
    {
      icon: Zap,
      title: language === 'tr' ? 'Teknolojik Liderlik' : language === 'de' ? 'Technologische Führung' : language === 'es' ? 'Liderazgo Tecnológico' : 'Technological Leadership',
      description: language === 'tr'
        ? 'Modern üretim teknolojileri ve sürekli Ar-Ge yatırımlarıyla sektörün öncüsü olmak.'
        : language === 'de'
          ? 'Durch moderne Produktionstechnologien und kontinuierliche F&E-Investitionen führend in der Branche sein.'
          : language === 'es'
            ? 'Ser líder en el sector a través de tecnologías de producción modernas e inversiones continuas en I+D.'
            : 'Be industry-leading through modern production technologies and continuous R&D investments.'
    },
    {
      icon: Leaf,
      title: language === 'tr' ? 'Yeşil Üretim' : language === 'de' ? 'Grüne Produktion' : language === 'es' ? 'Producción Verde' : 'Green Production',
      description: language === 'tr'
        ? '2.5 MW güneş enerjisi santrali ile karbon ayak izini minimize etmek.'
        : language === 'de'
          ? 'Den CO₂-Fußabdruck mit der 2,5 MW Solarenergieanlage minimieren.'
          : language === 'es'
            ? 'Minimizar la huella de carbono con la planta de energía solar de 2,5 MW.'
            : 'Minimize carbon footprint with the 2.5 MW solar power plant.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img src="/images/alvoral-bg.jpg" alt="Vision" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'tr' ? 'Vizyon & Misyon' : language === 'de' ? 'Vision & Mission' : language === 'es' ? 'Visión y Misión' : 'Vision & Mission'}
            </h1>
            <p className="text-2xl text-amber-400 mb-8">
              {language === 'tr' ? 'Geleceği Şekillendiriyoruz' : language === 'de' ? 'Wir Gestalten die Zukunft' : language === 'es' ? 'Damos Forma al Futuro' : 'Shaping the Future'}
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? 'Vizyonumuz' : language === 'de' ? 'Unsere Vision' : language === 'es' ? 'Nuestra Visión' : 'Our Vision'}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {language === 'tr'
                  ? 'Karbak Metal\'in vizyonu; teknolojiye uyum sağlayan, çevreye duyarlı, sürdürülebilir üretim prensipleri ile küresel pazarlarda rekabet gücünü sürekli artıran kurumsal bir yapı oluşturmaktır.'
                  : language === 'de'
                    ? 'Die Vision von Karbak Metal ist es, eine Unternehmensstruktur zu schaffen, die sich an Technologie anpasst, umweltbewusst ist und mit nachhaltigen Produktionsprinzipien ihre Wettbewerbsfähigkeit auf globalen Märkten kontinuierlich steigert.'
                    : language === 'es'
                      ? 'La visión de Karbak Metal es crear una estructura corporativa que se adapte a la tecnología, sea sensible al medio ambiente y aumente continuamente su competitividad en los mercados globales con principios de producción sostenible.'
                      : 'Karbak Metal\'s vision is to create a corporate structure that adapts to technology, is environmentally sensitive, and continuously increases its competitiveness in global markets with sustainable production principles.'}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {language === 'tr'
                  ? 'Alüminyum sektöründe yenilikçi çözümlerle öncü bir marka olmayı, müşterilerimize en yüksek kalitede ürünler sunmayı ve sürdürülebilir bir gelecek için çalışmayı hedefliyoruz.'
                  : language === 'de'
                    ? 'Wir streben danach, mit innovativen Lösungen eine führende Marke in der Aluminiumindustrie zu sein, unseren Kunden Produkte höchster Qualität anzubieten und für eine nachhaltige Zukunft zu arbeiten.'
                    : language === 'es'
                      ? 'Nuestro objetivo es ser una marca líder en la industria del aluminio con soluciones innovadoras, ofrecer productos de la más alta calidad a nuestros clientes y trabajar por un futuro sostenible.'
                      : 'We aim to be a leading brand in the aluminum industry with innovative solutions, offer the highest quality products to our customers, and work for a sustainable future.'}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/aluminum-coils-factory.jpg" alt="Vision" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/casting-furnace.jpg" alt="Mission" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? 'Misyonumuz' : language === 'de' ? 'Unsere Mission' : language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {language === 'tr'
                  ? 'Misyonumuz, müşteri beklentilerine uygun, yüksek kalite, güvenilirlik ve yenilikçi üretim anlayışıyla değer yaratan çözümler sunmaktır.'
                  : language === 'de'
                    ? 'Unsere Mission ist es, Lösungen anzubieten, die mit einem innovativen, hochwertigen und zuverlässigen Produktionsansatz, der die Kundenerwartungen erfüllt, Wert schaffen.'
                    : language === 'es'
                      ? 'Nuestra misión es ofrecer soluciones que creen valor con un enfoque de producción innovador, de alta calidad y confiable que cumpla con las expectativas de los clientes.'
                      : 'Our mission is to offer solutions that create value with an innovative, high-quality, and reliable production approach that meets customer expectations.'}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {language === 'tr'
                  ? 'Sürekli gelişimi ve operasyonel mükemmelliği temel ilke haline getirerek, sektörde fark yaratacak projelere imza atmak ve müşterilerimizin başarısına katkıda bulunmak için çalışıyoruz.'
                  : language === 'de'
                    ? 'Wir arbeiten daran, kontinuierliche Verbesserung und operationelle Exzellenz zu einem Grundprinzip zu machen, Projekte zu unterzeichnen, die einen Unterschied in der Branche machen, und zum Erfolg unserer Kunden beizutragen.'
                    : language === 'es'
                      ? 'Trabajamos para hacer de la mejora continua y la excelencia operativa un principio fundamental, firmar proyectos que marquen la diferencia en la industria y contribuir al éxito de nuestros clientes.'
                      : 'We work to make continuous improvement and operational excellence a fundamental principle, sign projects that make a difference in the industry, and contribute to the success of our customers.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Değerlerimiz' : language === 'de' ? 'Unsere Werte' : language === 'es' ? 'Nuestros Valores' : 'Our Values'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {language === 'tr' ? 'Stratejik Hedeflerimiz' : language === 'de' ? 'Unsere Strategischen Ziele' : language === 'es' ? 'Nuestros Objetivos Estratégicos' : 'Our Strategic Goals'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <goal.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                <p className="text-gray-400">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-white/30 mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
            {language === 'tr'
              ? 'Başarı, kaliteli ürünler üretmekten değil, kaliteli ilişkiler kurmaktan gelir.'
              : language === 'de'
                ? 'Erfolg kommt nicht von der Herstellung qualitativ hochwertiger Produkte, sondern vom Aufbau qualitativ hochwertiger Beziehungen.'
                : language === 'es'
                  ? 'El éxito no viene de fabricar productos de calidad, sino de construir relaciones de calidad.'
                  : 'Success does not come from manufacturing quality products, but from building quality relationships.'}
          </blockquote>
          <p className="text-white/80 text-lg">
            — Karbak Metal {language === 'tr' ? 'Yönetim Kurulu' : language === 'de' ? 'Vorstand' : language === 'es' ? 'Junta Directiva' : 'Board of Directors'}
          </p>
        </div>
      </section>
    </div>
  );
}
