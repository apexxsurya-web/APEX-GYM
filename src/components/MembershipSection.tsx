import React, { useState } from 'react';
import { Check, ArrowUpRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types/gym';

interface MembershipSectionProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'monthly' | 'annual') => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section
      id="memberships"
      className="relative w-full py-24 sm:py-32 bg-[#0d0d11] border-b border-white/10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff1824]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#ff1824]" />
            <span className="font-display font-black text-sm uppercase tracking-[0.25em] text-[#ff1824]">
              TRANSPARENT TIERS
            </span>
            <span className="w-6 h-[2px] bg-[#ff1824]" />
          </div>

          <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-4">
            CHOOSE YOUR <span className="text-[#ff1824] text-glow-red">MEMBERSHIP</span>
          </h2>

          <p className="text-zinc-300 font-sans text-base sm:text-lg mb-8">
            Simple plans. Serious commitment. Real results.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center bg-black/60 p-1.5 border border-white/15">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 font-display font-black text-xs sm:text-sm uppercase tracking-widest transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#ff1824] text-white red-glow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 font-display font-black text-xs sm:text-sm uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#ff1824] text-white red-glow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>ANNUAL</span>
              <span className="text-[10px] bg-white text-black px-1.5 py-0.2 font-black rounded-xs">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.popular;
            const currentPrice = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-[#121217] border-2 border-[#ff1824] lg:-translate-y-3 shadow-[0_15px_50px_rgba(255,24,36,0.3)]'
                    : 'bg-[#101014] border border-white/10 hover:border-white/20'
                } p-8 sm:p-9`}
              >
                {/* Most Popular Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff1824] text-white font-display font-black text-xs tracking-widest px-4 py-1 uppercase red-glow-sm">
                    {plan.badge || 'MOST POPULAR'}
                  </div>
                )}

                <div>
                  {/* Plan Number & Name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-zinc-500 tracking-widest">
                      PLAN {plan.number}
                    </span>
                    {isPro && <Zap className="w-4 h-4 text-[#ff1824]" />}
                  </div>

                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm font-sans mb-6 min-h-[38px]">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="py-6 border-y border-white/10 mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                        ₹{currentPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-zinc-400 uppercase tracking-wider">
                        / MONTH
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono mt-1">
                      {billingCycle === 'annual' ? 'Billed annually (₹' + (currentPrice * 12).toLocaleString('en-IN') + '/yr)' : 'Billed monthly • No long-term lock-in'}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-10">
                    <div className="text-xs font-display font-black uppercase tracking-wider text-zinc-400 mb-2">
                      INCLUDED WITH PLAN:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <div className="w-4 h-4 rounded-none bg-[#ff1824]/15 border border-[#ff1824]/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#ff1824]" />
                        </div>
                        <span className="font-sans leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan, billingCycle)}
                  className={`w-full py-4 font-display font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    isPro
                      ? 'bg-[#ff1824] hover:bg-[#e0141f] text-white red-glow hover:red-glow-lg'
                      : 'bg-white/5 hover:bg-[#ff1824] text-white border border-white/15 hover:border-[#ff1824]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-5 sm:p-6 bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#ff1824] shrink-0" />
            <div>
              <div className="font-display font-bold text-sm uppercase text-white tracking-wide">
                100% TRANSPARENCY & ZERO SNEAKY CANCELLATION FEES
              </div>
              <div className="text-zinc-400 text-xs mt-0.5">
                Pause your membership anytime if traveling or injured. All plans include full orientation.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="font-display font-bold text-xs text-white ml-1">4.98/5 RATING</span>
          </div>
        </div>
      </div>
    </section>
  );
};
