export type Language = 'tr' | 'en' | 'de' | 'es' | 'it';

export interface Translation {
  nav: {
    home: string;
    about: string;
    vision: string;
    sustainability: string;
    products: string;
    contact: string;
    whyAluminiumFoil: string;
  };
  hero: {
    title: string;
    subtitle: string;
    slogan: string;
    ctaExplore: string;
    ctaQuote: string;
    ctaCatalog: string;
  };
  alvoral: {
    title: string;
    by: string;
    tagline: string;
    features: string;
    description: string;
    tags: string[];
    cta: string;
    acronym: {
      a: string;
      l: string;
      v: string;
      o: string;
      r: string;
      a2: string;
      l2: string;
    };
  };
  products: {
    title: string;
    subtitle: string;
    industrial: string;
    packaging: string;
    automotive: string;
    micron: string;
    details: string;
    requestQuote: string;
    requestSample: string;
    viewCatalog: string;
  };
  whyAluminiumFoil: {
    title: string;
    subtitle: string;
    characteristics: string;
    whyTitle: string;
    advantages: string;
    resourceEfficiency: string;
    resourceEfficiencyDesc: string;
    barrierProtection: string;
    barrierProtectionDesc: string;
    strengthDurability: string;
    strengthDurabilityDesc: string;
    formability: string;
    formabilityDesc: string;
    lightweight: string;
    lightweightDesc: string;
    structuralStability: string;
    structuralStabilityDesc: string;
    recyclability: string;
    recyclabilityDesc: string;
    energyRecovery: string;
    energyRecoveryDesc: string;
    thermalPerformance: string;
    thermalPerformanceDesc: string;
    insulationEfficiency: string;
    insulationEfficiencyDesc: string;
    electricalConductivity: string;
    electricalConductivityDesc: string;
    reflectiveProperties: string;
    reflectivePropertiesDesc: string;
    surfaceFlexibility: string;
    surfaceFlexibilityDesc: string;
    hygieneSafety: string;
    hygieneSafetyDesc: string;
    productSecurity: string;
    productSecurityDesc: string;
    technicalSpecs: string;
    property: string;
    value: string;
  };
  ges: {
    title: string;
    subtitle: string;
    power: string;
    production: string;
    co2: string;
    households: string;
    location: string;
  };
  sustainability: {
    title: string;
    subtitle: string;
    approach: string;
    approachDesc: string;
    environmental: string;
    environmentalDesc: string;
    social: string;
    socialDesc: string;
    production: string;
    productionDesc: string;
    futureVision: string;
    futureVisionDesc: string;
  };
  about: {
    title: string;
    companyName: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    capacity: {
      title: string;
      desc: string;
    };
    quality: {
      title: string;
      desc: string;
    };
  };
  certifications: {
    title: string;
    iso9001: string;
    iso14001: string;
    iso45001: string;
    rohs: string;
    reach: string;
    iso9001Desc: string;
    iso14001Desc: string;
    iso45001Desc: string;
    rohsDesc: string;
    reachDesc: string;
  };
  vision: {
    title: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    valuesTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    address: string;
    phone: string;
    email: string;
    location: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    downloadCatalog: string;
    requestSample: string;
    viewOnMaps: string;
  };
  footer: {
    quickLinks: string;
    contact: string;
    alvoral: string;
    alvoralDesc: string;
    followUs: string;
    rights: string;
  };
}
