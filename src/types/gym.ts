export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface TrainingProgram {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  focusAreas: string[];
  schedule: string;
}

export interface Coach {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  certifications: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface PricingPlan {
  id: string;
  number: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membership: string;
  rating: number;
  quote: string;
  result: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'EQUIPMENT' | 'WEIGHTLIFTING' | 'FUNCTIONAL' | 'COACHES';
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}
