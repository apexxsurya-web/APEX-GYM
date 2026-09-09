import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { TrainingSection } from './components/TrainingSection';
import { AboutSection } from './components/AboutSection';
import { MotivationalParallax } from './components/MotivationalParallax';
import { CoachesSection } from './components/CoachesSection';
import { MembershipSection } from './components/MembershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { VideoExperienceModal } from './components/VideoExperienceModal';
import { MembershipModal } from './components/MembershipModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';

// Types
import { TrainingProgram, Coach, PricingPlan } from './types/gym';

export default function App() {
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');
  const [selectedBilling, setSelectedBilling] = useState<'monthly' | 'annual'>('monthly');

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  const handleOpenMembershipModal = (planId: string = 'pro', billing: 'monthly' | 'annual' = 'monthly') => {
    setSelectedPlanId(planId);
    setSelectedBilling(billing);
    setMembershipModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, billingCycle: 'monthly' | 'annual') => {
    handleOpenMembershipModal(plan.id, billingCycle);
  };

  const handleConsultCoach = (coach: Coach) => {
    handleOpenMembershipModal('elite');
  };

  const handleEnrollProgram = (programTitle: string) => {
    handleOpenMembershipModal(programTitle.toLowerCase().includes('personal') ? 'elite' : 'pro');
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 font-sans antialiased selection:bg-[#ff1824] selection:text-white">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Fixed / Sticky Navigation Bar */}
      <Navbar onOpenMembershipModal={() => handleOpenMembershipModal('pro')} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenMembershipModal={() => handleOpenMembershipModal('pro')}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />

        {/* Marquee Moving Text Ticker */}
        <MarqueeTicker />

        {/* Training Section (Strength, Conditioning, Personal Training) */}
        <TrainingSection
          onSelectProgram={(program) => setSelectedProgram(program)}
          onOpenMembershipModal={() => handleOpenMembershipModal('pro')}
        />

        {/* About APEX ZYM Split Section with Animated Numbers */}
        <AboutSection
          onOpenMembershipModal={() => handleOpenMembershipModal('pro')}
        />

        {/* Full-Width Motivational Parallax Section */}
        <MotivationalParallax
          onOpenMembershipModal={() => handleOpenMembershipModal('pro')}
        />

        {/* Coaches Section */}
        <CoachesSection
          onConsultCoach={handleConsultCoach}
        />

        {/* Membership / Pricing Section (Easily editable data, Monthly / Annual) */}
        <MembershipSection
          onSelectPlan={handleSelectPlan}
        />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Gallery with Category Filters & Fullscreen Lightbox */}
        <GallerySection />

        {/* Full-Width Dramatic CTA Section */}
        <CtaSection
          onOpenMembershipModal={() => handleOpenMembershipModal('pro')}
        />

        {/* Contact Section with Validated Form & Direct Channels */}
        <ContactSection />
      </main>

      {/* Minimalist Premium Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoExperienceModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenMembership={() => {
          setVideoModalOpen(false);
          handleOpenMembershipModal('pro');
        }}
      />

      <MembershipModal
        isOpen={membershipModalOpen}
        initialPlanId={selectedPlanId}
        initialBilling={selectedBilling}
        onClose={() => setMembershipModalOpen(false)}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={handleEnrollProgram}
      />
    </div>
  );
}
