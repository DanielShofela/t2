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

export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbCsxMFFXUuiSbrLBp0H";

export const BRAND_INFO = {
  name: "2NG Groupe Entreprise",
  tagline: "Nous connectons les talents aux opportunités.",
  logoUrl: "/src/assets/images/2ng_logo_1784256715680.jpg",
  heroImageUrl: "/src/assets/images/hero_career_whatsapp_1784256731893.jpg",
  socials: {
    facebook: "https://facebook.com",
    whatsapp: WHATSAPP_CHANNEL_URL,
    website: "https://www.2nggroupe.com", // Example website
  }
};

export const ADVANTAGES: BenefitCard[] = [
  {
    id: 1,
    title: "Offres d'emploi",
    description: "Recevez les nouvelles offres dès leur publication.",
    iconName: "Briefcase"
  },
  {
    id: 2,
    title: "Stages",
    description: "Découvrez les meilleures opportunités de stage.",
    iconName: "GraduationCap"
  },
  {
    id: 3,
    title: "Recrutements urgents",
    description: "Soyez informé immédiatement des recrutements.",
    iconName: "Zap"
  },
  {
    id: 4,
    title: "Conseils CV",
    description: "Apprenez à créer un CV professionnel.",
    iconName: "FileText"
  },
  {
    id: 5,
    title: "Conseils d'entretien",
    description: "Préparez-vous efficacement aux entretiens.",
    iconName: "Mic"
  },
  {
    id: 6,
    title: "Alertes quotidiennes",
    description: "Ne manquez plus aucune opportunité.",
    iconName: "Bell"
  }
];

export const STATISTICS: StatisticItem[] = [
  {
    id: 1,
    value: "1 250+",
    label: "Offres publiées"
  },
  {
    id: 2,
    value: "450+",
    label: "Entreprises partenaires"
  },
  {
    id: 3,
    value: "15 000+",
    label: "Candidats accompagnés"
  },
  {
    id: 4,
    value: "3 200+",
    label: "Opportunités partagées"
  }
];
