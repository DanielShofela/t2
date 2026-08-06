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

// Direct WhatsApp conversation link for CV Creation Service (+2250170561121)
export const WHATSAPP_CV_URL = "https://wa.me/2250170561121?text=Bonjour%202NG%20Groupe%20Entreprise%2C%20je%20souhaite%20commander%20un%20CV%20professionnel%20et%20b%C3%A9n%C3%A9ficier%20de%20votre%20service%20de%20cr%C3%A9ation%20de%20CV.";

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

