export type ServiceCategory = 
  | 'audiovisual'
  | 'design'
  | 'tech'
  | 'estrutural';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryName: string;
  shortDesc: string; // Max 2 lines persuasive description as demanded
  longDesc: string;
  deliverables: string[];
  toolsAndMethods: string[];
  targetAudience: string;
  customWhatsAppMessage: string;
  iconName: string;
  tag: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight: string;
}

export interface SEODossier {
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1Tag: string;
  h2Tags: string[];
  h3Tags: string[];
  searchIntents: {
    intent: string;
    description: string;
    addressedIn: string;
  }[];
  copyTriggers: {
    trigger: string;
    application: string;
  }[];
}
