import { TrainingProgram, Coach, PricingPlan, Testimonial, GalleryItem, HeroStat } from '../types/gym';

export const GYM_INFO = {
  name: 'APEX ZYM',
  tagline: 'BUILD YOUR STRONGEST SELF.',
  subTagline: 'DISCIPLINE TODAY. POWER TOMORROW.',
  dominateText: 'DISCIPLINE TODAY. DOMINATE TOMORROW.',
  phone: '+91 98765 43210',
  displayPhone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'contact@apexzym.com',
  address: 'Apex Zym Performance Center, 42 Ironworks Boulevard, Sector 5, Bangalore, Karnataka 560034',
  openingHours: {
    weekdays: 'MON — SAT: 05:30 AM — 10:00 PM',
    sunday: 'SUNDAY: 07:00 AM — 02:00 PM',
  },
  socials: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/919876543210',
    youtube: 'https://youtube.com',
  }
};

export const HERO_STATS: HeroStat[] = [
  { id: '1', value: '500+', label: 'ACTIVE MEMBERS' },
  { id: '2', value: '15+', label: 'EXPERT COACHES' },
  { id: '3', value: '10K+', label: 'TRAINING SESSIONS' },
  { id: '4', value: '100%', label: 'DEDICATION' },
];

export const ABOUT_STATS = [
  { value: 8, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 500, suffix: '+', label: 'ACTIVE MEMBERS' },
  { value: 15, suffix: '+', label: 'EXPERT TRAINERS' },
  { value: 10, suffix: 'K+', label: 'SESSIONS COMPLETED' },
];

export const MARQUEE_ITEMS = [
  'APEX ZYM',
  'TRAIN HARD',
  'STAY DISCIPLINED',
  'GET STRONGER',
  'NEVER SETTLE',
  'RAW POWER',
  'PURE DISCIPLINE',
  'RELENTLESS PROGRESS'
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'strength',
    number: '01',
    title: 'STRENGTH',
    tagline: 'Build strength. Build muscle. Build confidence.',
    description: 'Heavy compound barbell protocols, progressive overload tracking, power racks, and hypertrophy mechanics designed for raw strength and structural density.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
    focusAreas: ['Compound Lifts', 'Hypertrophy Cycles', 'Barbell Mastery', 'Powerlifting Racks'],
    schedule: 'Mon, Wed, Fri • 60-75 min'
  },
  {
    id: 'conditioning',
    number: '02',
    title: 'CONDITIONING',
    tagline: 'Increase endurance, power and performance.',
    description: 'High-intensity athletic conditioning, prowler sled pushes, assault bikes, rowing ergometers, and functional circuit intervals to forge unmatched stamina.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop',
    focusAreas: ['VO2 Max Intervals', 'Sled & Turf Drills', 'Aerobic Engine', 'Metabolic Conditioning'],
    schedule: 'Tue, Thu, Sat • 50 min'
  },
  {
    id: 'personal-training',
    number: '03',
    title: 'PERSONAL TRAINING',
    tagline: 'One-on-one coaching focused completely on your goals.',
    description: 'Elite personalized periodization, biomechanical movement assessment, tailor-made nutrition plans, and 1-on-1 accountability directly on the gym floor.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1400&auto=format&fit=crop',
    focusAreas: ['Custom Periodization', 'Form Correction', 'Precision Nutrition', 'Weekly Check-ins'],
    schedule: 'Flexible 1-on-1 Booking'
  }
];

export const COACHES: Coach[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    specialty: 'STRENGTH & CONDITIONING',
    experience: '9+ Years Experience',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    bio: 'Former collegiate powerlifting champion specializing in raw strength output, nervous system adaptation, and kinetic chain mechanics.',
    certifications: ['CSCS Certified', 'USAW Level 2', 'Biomechanics Specialist'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    specialty: 'FAT LOSS & METABOLIC TRAINING',
    experience: '7+ Years Experience',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    bio: 'Master coach focused on aggressive body recomposition, metabolic circuit optimization, and sustainable nutritional frameworks.',
    certifications: ['NASM-CPT', 'Precision Nutrition L2', 'Kettlebell Athletics'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'david-kane',
    name: 'David Kane',
    specialty: 'ATHLETIC PERFORMANCE',
    experience: '8+ Years Experience',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop',
    bio: 'High-performance specialist developing explosive power, sprint deceleration, and tactical physical resilience for athletes.',
    certifications: ['EXOS Performance Specialist', 'FMS Level 2', 'Olympic Weightlifting'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'vikram-sharma',
    name: 'Vikram Sharma',
    specialty: 'PERSONAL TRAINING & HYPERTROPHY',
    experience: '6+ Years Experience',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialized in individualized hypertrophy periodization, injury rehabilitation protocols, and elite mind-muscle engagement.',
    certifications: ['ACE-CPT', 'CrossFit Level 1', 'Sports Nutritionist'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

// EDITABLE PRICING SECTION (All prices easily modified here)
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    number: '01',
    name: 'BASIC',
    priceMonthly: 999,
    priceAnnual: 799,
    description: 'Essential access for disciplined self-starters ready to lift.',
    features: [
      'Full Gym Floor Access',
      'Dedicated Cardio & Turf Area',
      'Locker & Shower Access',
      'Basic Training Guidance',
      'Apex Mobile Check-In'
    ],
    ctaText: 'JOIN NOW ↗'
  },
  {
    id: 'pro',
    number: '02',
    name: 'PRO',
    priceMonthly: 1499,
    priceAnnual: 1199,
    popular: true,
    badge: 'MOST POPULAR',
    description: 'Our flagship athletic program combining group performance and tailored guidance.',
    features: [
      'Full Gym & Free Weights Access',
      'Strength & Conditioning Classes',
      '2 Monthly Personal Training Sessions',
      'Comprehensive Diet Guidance',
      'Bi-Weekly InBody Progress Tracking',
      'Priority Locker & Recovery Area'
    ],
    ctaText: 'START TRAINING ↗'
  },
  {
    id: 'elite',
    number: '03',
    name: 'ELITE',
    priceMonthly: 2499,
    priceAnnual: 1999,
    description: 'Complete athletic transformation with designated 1-on-1 coach supervision.',
    features: [
      'Unlimited 24/7 Gym Access',
      'Dedicated Personal Coach',
      'Customized Training Periodization',
      'Precision Nutrition Guidance & Macros',
      'Monthly Progress & Biomechanics Review',
      'VIP Locker & Recovery Suite Access',
      '24/7 Coach WhatsApp Priority Support'
    ],
    ctaText: 'GO ELITE ↗'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aryan Mehta',
    role: 'Tech Lead & Powerlifter',
    membership: 'PRO MEMBER',
    rating: 5,
    quote: 'APEX ZYM completely transformed my mindset. In 6 months, my deadlift jumped from 140kg to 210kg. The atmosphere here is pure grit—no gimmicks, just raw hard work.',
    result: '+70kg Deadlift PR',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Rohan Deshmukh',
    role: 'Corporate Executive',
    membership: 'ELITE MEMBER',
    rating: 5,
    quote: 'I had plateaued for 3 years at commercial chain gyms. Working with Marcus at Apex dialed in my biomechanics and nutrition. Dropped 11kg of fat and built serious lean muscle.',
    result: '-11kg Fat / +5kg Muscle',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Sanya Kapoor',
    role: 'Triathlete & Cross-trainer',
    membership: 'PRO MEMBER',
    rating: 5,
    quote: 'The conditioning turf and equipment standards are unlike anything else. Top tier barbells, heavy dumbbells, and coaches who actually care about your form and progress.',
    result: 'Sub-3hr Marathon Prep',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Karan Singhal',
    role: 'MMA Practitioner',
    membership: 'ELITE MEMBER',
    rating: 5,
    quote: 'When you step through the doors of APEX ZYM, the red lighting and heavy iron make you lock in instantly. Best facility in the city hands down.',
    result: 'Peak Conditioning',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Olympic Free Weight Arena',
    category: 'WEIGHTLIFTING',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait'
  },
  {
    id: 'g2',
    title: 'Heavy Barbell Deadlift Zone',
    category: 'WEIGHTLIFTING',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    aspect: 'landscape'
  },
  {
    id: 'g3',
    title: 'High-Impact Turf & Prowler Track',
    category: 'FUNCTIONAL',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    aspect: 'landscape'
  },
  {
    id: 'g4',
    title: '1-on-1 Elite Coaching Session',
    category: 'COACHES',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    title: 'Custom Cast Iron Dumbbell Set (up to 70kg)',
    category: 'EQUIPMENT',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'g6',
    title: 'Functional Sprint & Sled Lanes',
    category: 'FUNCTIONAL',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait'
  },
  {
    id: 'g7',
    title: 'Heavy Duty Power Racks & Platforms',
    category: 'EQUIPMENT',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000&auto=format&fit=crop',
    aspect: 'landscape'
  },
  {
    id: 'g8',
    title: 'Endurance Ergometers & Air Bikes',
    category: 'EQUIPMENT',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square'
  }
];
