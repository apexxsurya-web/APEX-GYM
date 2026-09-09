import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, ArrowUpRight, Zap, QrCode } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types/gym';

interface MembershipModalProps {
  isOpen: boolean;
  initialPlanId?: string;
  initialBilling?: 'monthly' | 'annual';
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  initialPlanId = 'pro',
  initialBilling = 'monthly',
  onClose,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(initialBilling);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  useEffect(() => {
    if (initialPlanId) setSelectedPlanId(initialPlanId);
  }, [initialPlanId]);

  useEffect(() => {
    if (initialBilling) setBillingCycle(initialBilling);
  }, [initialBilling]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];
  const price = billingCycle === 'annual' ? currentPlan.priceAnnual : currentPlan.priceMonthly;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Generate simulated pass ID
    const randomCode = 'APX-' + Math.floor(100000 + Math.random() * 900000);
    setPassNumber(randomCode);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e0e13] border border-white/20 p-6 sm:p-10 shadow-[0_0_60px_rgba(255,24,36,0.35)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen with Pass Card */
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-[#ff1824] text-white rounded-full flex items-center justify-center mx-auto red-glow">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <div className="font-mono text-xs uppercase text-[#ff1824] tracking-widest font-bold">
                REGISTRATION CONFIRMED
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
                WELCOME TO APEX ZYM
              </h3>
              <p className="text-zinc-300 text-sm font-sans max-w-md mx-auto mt-2">
                Your athletic membership is active. Present this digital pass or mention your pass code at the front desk.
              </p>
            </div>

            {/* Athletic Member Pass Card */}
            <div className="p-6 bg-black border-2 border-[#ff1824] text-left relative overflow-hidden red-glow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff1824]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                <div>
                  <div className="font-display font-black text-2xl text-white uppercase tracking-wider">
                    APEX <span className="text-[#ff1824]">ZYM</span>
                  </div>
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                    OFFICIAL ATHLETE PASS
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-[#ff1824] text-white font-display font-black text-xs uppercase tracking-wider">
                    {currentPlan.name} PLAN
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-zinc-500 uppercase">ATHLETE NAME</div>
                  <div className="text-white font-bold text-sm uppercase">{name}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase">PASS CODE</div>
                  <div className="text-[#ff1824] font-bold text-sm tracking-wider">{passNumber}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase">START DATE</div>
                  <div className="text-zinc-200">{startDate}</div>
                </div>
                <div>
                  <div className="text-zinc-500 uppercase">BILLING</div>
                  <div className="text-zinc-200 uppercase">₹{price.toLocaleString('en-IN')} / {billingCycle === 'annual' ? 'YR' : 'MO'}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#ff1824]" />
                  <span>Access granted at 42 Ironworks Blvd center</span>
                </div>
                <QrCode className="w-8 h-8 text-white" />
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-sm uppercase tracking-widest red-glow"
            >
              DONE & RETURN TO SITE
            </button>
          </div>
        ) : (
          /* Enrollment Form */
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-1 bg-[#ff1824]" />
              <span className="font-display font-black text-xs uppercase tracking-widest text-[#ff1824]">
                ATHLETE ONBOARDING
              </span>
            </div>

            <h3 className="font-display font-black uppercase text-3xl sm:text-4xl tracking-tight text-white mb-6">
              SECURE YOUR <span className="text-[#ff1824] text-glow-red">MEMBERSHIP</span>
            </h3>

            {/* Plan Selector Radio Tiles */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {PRICING_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-3 text-left border transition-all ${
                    selectedPlanId === plan.id
                      ? 'bg-[#ff1824]/10 border-[#ff1824] red-glow-sm'
                      : 'bg-black/40 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">PLAN {plan.number}</div>
                  <div className="font-display font-black text-lg text-white uppercase">{plan.name}</div>
                  <div className="font-display font-bold text-sm text-[#ff1824]">
                    ₹{(billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly).toLocaleString('en-IN')}
                    <span className="text-[10px] text-zinc-400">/mo</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Billing Toggle in modal */}
            <div className="flex items-center justify-between p-3 bg-black/60 border border-white/10 mb-6 text-xs">
              <span className="text-zinc-400 uppercase font-display font-bold">CHOOSE BILLING CADENCE:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 font-display font-bold uppercase tracking-wider text-xs ${
                    billingCycle === 'monthly' ? 'bg-[#ff1824] text-white' : 'text-zinc-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 font-display font-bold uppercase tracking-wider text-xs flex items-center gap-1 ${
                    billingCycle === 'annual' ? 'bg-[#ff1824] text-white' : 'text-zinc-400'
                  }`}
                >
                  <span>Annual (-20%)</span>
                </button>
              </div>
            </div>

            {/* Registration Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1">
                  FULL LEGAL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Liam Vance"
                  className="w-full bg-black/70 border border-white/15 focus:border-[#ff1824] px-4 py-3 text-white text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="liam@example.com"
                    className="w-full bg-black/70 border border-white/15 focus:border-[#ff1824] px-4 py-3 text-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/70 border border-white/15 focus:border-[#ff1824] px-4 py-3 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-wider text-zinc-300 mb-1">
                  DESIRED FIRST SESSION START DATE
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-black/70 border border-white/15 focus:border-[#ff1824] px-4 py-3 text-white text-sm outline-none"
                />
              </div>

              {/* Total Summary */}
              <div className="p-4 bg-white/[0.03] border border-white/10 flex items-center justify-between mt-2">
                <div>
                  <div className="font-display font-bold text-sm uppercase text-white">
                    {currentPlan.name} MEMBERSHIP
                  </div>
                  <div className="text-zinc-500 text-xs font-mono">
                    Zero initiation fee • Instant facility pass
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-black text-2xl text-[#ff1824]">
                    ₹{price.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">
                    {billingCycle === 'annual' ? 'Per Month (Billed Annually)' : 'Per Month'}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#ff1824] hover:bg-[#e0141f] text-white font-display font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 red-glow hover:red-glow-lg transition-all"
              >
                <span>CONFIRM & ACTIVATE PASS</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
