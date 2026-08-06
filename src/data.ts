export interface BenefitCard {
  id: number;
  title: string;
  description: string;
  iconName: 'Briefcase' | 'GraduationCap' | 'Zap' | 'FileText' | 'Mic' | 'Bell';
}

export interface StatisticItem {
  id: number;
  value: string;
  label: string;
}

// WhatsApp channel URL (Secondary)
export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbCsxMFFXUuiSbrLBp0H";

// Direct WhatsApp links for specific packages (+2250170561121)
export const WHATSAPP_CV_URL = "https://wa.me/2250170561121?text=Bonjour%202NG%20Groupe%20Entreprise%2C%20je%20souhaite%20commander%20un%20CV%20professionnel%20(3%20000%20FCFA).";
export const WHATSAPP_LETTRE_URL = "https://wa.me/2250170561121?text=Bonjour%202NG%20Groupe%20Entreprise%2C%20je%20souhaite%20commander%20une%20Lettre%20de%20Motivation%20(2%20000%20FCFA).";
export const WHATSAPP_PACK_URL = "https://wa.me/2250170561121?text=Bonjour%202NG%20Groupe%20Entreprise%2C%20je%20souhaite%20commander%20le%20Pack%20Complet%20CV%20%2B%20Lettre%20de%20Motivation%20(4%20500%20FCFA).";

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  whatsappUrl: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "cv-pro",
    name: "CV Professionnel",
    tagline: "Un CV moderne et percutant pour valoriser votre parcours.",
    price: "3 000 FCFA",
    features: [
      "Mise en page professionnelle & moderne",
      "Structure optimisée pour recuteurs & ATS",
      "Mise en valeur de vos réalisations",
      "Format PDF + Word réutilisable",
      "Livraison rapide en 24h à 48h sur WhatsApp"
    ],
    ctaText: "Commander mon CV (3 000 F)",
    whatsappUrl: WHATSAPP_CV_URL
  },
  {
    id: "pack-complet",
    name: "Pack Complet CV + Lettre",
    tagline: "La formule gagnante pour maximiser vos chances d'entretien.",
    price: "4 500 FCFA",
    originalPrice: "5 000 FCFA",
    badge: "RECOMMANDÉ - ÉCONOMISEZ 500 F",
    isPopular: true,
    features: [
      "CV Professionnel complet & percutant",
      "Lettre de Motivation ciblée & personnalisée",
      "Harmonie graphique & rédactionnelle parfaite",
      "Modèles modifiables et prêts à envoyer",
      "Accompagnement & révisions incluses",
      "Traitement prioritaire"
    ],
    ctaText: "Commander le Pack (4 500 F)",
    whatsappUrl: WHATSAPP_PACK_URL
  },
  {
    id: "lettre-motivation",
    name: "Lettre de Motivation",
    tagline: "Une lettre captivante rédigée pour le poste que vous visiez.",
    price: "2 000 FCFA",
    features: [
      "Rédaction personnalisée selon le secteur",
      "Argumentaire convaincant & accrocheur",
      "Soin de l'orthographe et du style",
      "Format adaptable à plusieurs candidatures",
      "Livraison directe sur WhatsApp"
    ],
    ctaText: "Commander la Lettre (2 000 F)",
    whatsappUrl: WHATSAPP_LETTRE_URL
  }
];

export const BRAND_INFO = {
  name: "2NG Groupe Entreprise",
  tagline: "Service de création & d'optimisation de CV professionnels sur-mesure.",
  logoUrl: "/src/assets/images/2ng_logo_1784256715680.jpg",
  heroImageUrl: "/src/assets/images/hero_career_whatsapp_1784256731893.jpg",
  socials: {
    facebook: "https://facebook.com",
    whatsapp: WHATSAPP_CHANNEL_URL,
    whatsappCv: WHATSAPP_CV_URL,
    website: "https://www.2nggroupe.com",
  }
};

export const ADVANTAGES: BenefitCard[] = [
  {
    id: 1,
    title: "CV Pro & Moderne",
    description: "Design percutant adapté aux exigences actuelles des recuteurs.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Format Compatibilité ATS",
    description: "Structure optimisée pour franchir les logiciels de filtrage de CV.",
    iconName: "Zap"
  },
  {
    id: 3,
    title: "Mise en valeur des compétences",
    description: "Mise en lumière de vos réalisations et compétences clés.",
    iconName: "Briefcase"
  },
  {
    id: 4,
    title: "Livraison Rapide 24h/48h",
    description: "Recevez votre CV prêt à l'emploi directement sur WhatsApp.",
    iconName: "GraduationCap"
  },
  {
    id: 5,
    title: "Accompagnement Sur-Mesure",
    description: "Échange direct avec un conseiller pour ajuster chaque détail.",
    iconName: "Mic"
  },
  {
    id: 6,
    title: "Chaîne d'Alertes Offres",
    description: "Inclus : accès gratuit à notre chaîne WhatsApp d'offres d'emploi.",
    iconName: "Bell"
  }
];

export const STATISTICS: StatisticItem[] = [
  {
    id: 1,
    value: "15 000+",
    label: "CVs créés & optimisés"
  },
  {
    id: 2,
    value: "98%",
    label: "Taux de satisfaction"
  },
  {
    id: 3,
    value: "24h - 48h",
    label: "Délai de conception"
  },
  {
    id: 4,
    value: "+300%",
    label: "Chances d'entretien"
  }
];

