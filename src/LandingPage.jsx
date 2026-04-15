import React, { useState, useEffect } from 'react';
import jasurPhoto from './assets/jasur.jpg';
import avatar1 from './assets/u1.png';
import avatar2 from './assets/u2.png';
import avatar3 from './assets/u3.png';
import t1 from './assets/t1.png';
import t2 from './assets/t2.png';
import t3 from './assets/t3.png';
import t4 from './assets/t4.png';

import moneyImg from './assets/money.png';
import boxImg from './assets/box.png';
import warehouseImg from './assets/media3.jpg';
import baliImg from './assets/bali.jpg';
import carImg from './assets/media5.jpg';
import jasurNew from './assets/jasur_new.jpg';
import heroBgImg from './assets/heropngs.png';
import heroImg from './assets/hero.png';


// Reusable SVG Icons
const CheckIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-500 fill-current shrink-0" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

// Reusable Components
const CTAButton = ({ text, subtext, className = "" }) => (
  <a href="https://saidkulov.exode.biz/pay/2097/1786" className={`relative w-full overflow-hidden group bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white py-4 md:py-5 px-6 md:px-8 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl shadow-[0_12px_30px_-5px_rgba(255,65,108,0.4)] transition-all hover:scale-[1.03] transform duration-300 active:scale-95 flex flex-col items-center justify-center gap-1 cursor-pointer custom-pulse-btn no-underline ${className}`}>
    <div className="flex items-center gap-2">
      <span className="text-center">{text}</span>
      <span className="text-2xl custom-wiggle">🔥</span>
    </div>
    {subtext && <span className="text-[11px] md:text-sm font-semibold opacity-90 text-center">{subtext}</span>}
    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
  </a>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl md:rounded-[20px] mb-3 overflow-hidden bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-blue-100">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-5 md:p-6 font-bold flex justify-between items-center text-gray-900 border-none outline-none cursor-pointer">
        <span className="text-sm md:text-lg pr-4">{question}</span>
        <span className={`transform transition-transform duration-300 shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gray-50 text-blue-600 ${isOpen ? 'rotate-180 bg-blue-50' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`px-5 md:px-6 text-gray-600 text-sm md:text-base leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-5 md:pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
        {answer}
      </div>
    </div>
  );
};

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center mb-10 md:mb-16">
    {badge && (
      <div className="inline-block px-4 py-1.5 border border-blue-600 rounded-full bg-blue-50 mb-4 md:mb-6 animate-fade-in-up">
        <p className="text-blue-700 text-xs md:text-sm font-bold uppercase tracking-widest">{badge}</p>
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.15] md:leading-[1.1] tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-base md:text-xl font-medium max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {subtitle}
      </p>
    )}
  </div>
);

const PaymentModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (window.fbq) {
      window.fbq('track', 'Lead');
    }

    window.location.href = 'https://saidkulov.exode.biz/pay/2097/1786';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden animate-fade-in-up">
        <button onClick={onClose} type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✨</div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">Joyni band qilish</h3>
          <p className="text-gray-500 font-medium text-sm">Davom etish va to'lov sahifasiga o'tish uchun ismingizni kiriting</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Ismingiz</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masalan: Jasur"
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-900 font-medium focus:border-[#FF416C] focus:bg-white focus:outline-none transition-all placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white font-black py-4 px-6 rounded-xl shadow-[0_10px_20px_rgba(255,65,108,0.3)] hover:shadow-[0_10px_25px_rgba(255,65,108,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all custom-pulse-btn"
          >
            To'lovga o'tish
          </button>
        </form>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [scrollY, setScrollY] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href === 'https://saidkulov.exode.biz/pay/2097/1786') {
        e.preventDefault();
        setIsPaymentModalOpen(true);
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.scroll-animate-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex justify-center text-gray-900 selection:bg-blue-200">
      {/* Main Container */}
      <div className="w-full md:max-w-5xl lg:max-w-6xl bg-white min-h-screen md:min-h-0 md:my-10 md:rounded-[32px] md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">

        {/* =========================================
            BLOCK 1: HERO SECTION
        ========================================= */}
        <section className="relative w-full min-h-[100svh] flex flex-col pt-6 md:pt-12 pb-8 bg-white overflow-hidden scroll-animate-hidden opacity-0">

          {/* ── Vibrant Gradient Blobs Behind Speaker ── */}
          <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* High Intensity 50/50 Split Background */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[-15%] w-[65%] h-[90%] bg-[#ff0033]/90 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-15%] w-[65%] h-[90%] bg-[#0066ff]/90 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[20px]"></div>
          </div>

          {/* ── TOP BLOCK (Normal Flow, shrink-0) ── */}
          <div className="shrink-0 relative z-[30] flex flex-col items-center w-full px-4">
            {/* Top Badges */}
            <div className="flex flex-col whitespace-nowrap gap-2 sm:gap-3 items-center justify-center pb-4 animate-fade-in-up">
              <div className="bg-blue-600 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-extrabold uppercase text-[9px] sm:text-[11px] md:text-xs tracking-widest shadow-md">
                Shaxsiy tahlilli 6 kunlik praktikum
              </div>
              <div className="bg-white text-gray-800 border border-gray-200 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-extrabold uppercase text-[9px] sm:text-[11px] md:text-xs tracking-widest shadow-sm">
                To'lovdan so'ng darhol boshlash
              </div>
            </div>

            {/* Headline Block */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h1 className="text-[#001F3F] text-[3.2rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-[900] leading-[0.88] uppercase tracking-tight drop-shadow-sm">
                TOVAR BIZNESINI
              </h1>
              <p className="text-blue-600 text-[0.85rem] sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase mt-3 md:mt-4 tracking-tight drop-shadow-sm flex flex-col items-center gap-1 md:gap-2">
                <span>BILIM VA TAJRIBASIZ ATIGI</span>
                <span><span className="text-[#FF416C] font-black">💰 $20 BILAN</span> BOSHLANG</span>
              </p>
            </div>
          </div>

          {/* ── CENTER BLOCK (Image + Floating Cards) ── */}
          <div className="relative flex justify-center w-full max-w-[1000px] mx-auto z-[5] pointer-events-none mt-2 md:mt-6">
            <img
              src={heroBgImg}
              alt="Course Creator"
              className="w-[95%] max-h-[55vh] md:max-h-[65vh] object-contain object-bottom opacity-100 drop-shadow-2xl"
            />

            {/* Price Tag (Left relative to image container) */}
            <div className="absolute bottom-[18%] sm:bottom-[22%] md:bottom-[25%] left-[2%] sm:left-[5%] md:left-[10%] z-[20] transform -rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-300 animate-fade-in-up pointer-events-auto" style={{ animationDelay: '500ms' }}>
              <div className="bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-[0_20px_50px_rgba(255,65,108,0.4)] border border-white/30 backdrop-blur-md">
                <div className="flex flex-col items-center">
                  <span className="text-white text-xl sm:text-3xl md:text-3xl font-black leading-none mb-0.5 whitespace-nowrap">89 000 so'm</span>
                  <span className="text-white/80 text-[10px] sm:text-sm md:text-base font-bold line-through whitespace-nowrap">900 000 so'm</span>
                </div>
                <div className="mt-2 sm:mt-3 bg-black/25 backdrop-blur-md rounded-xl px-2 sm:px-3 py-1.5 flex items-center justify-center gap-1 sm:gap-2">
                  <ClockIcon className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-white text-[9px] sm:text-[10px] lg:text-xs font-bold whitespace-nowrap">Chegirma {formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* Info Box (Right relative to image container) */}
            <div className="absolute bottom-[35%] md:bottom-[40%] right-[2%] sm:right-[5%] md:right-[10%] z-[20] w-[150px] sm:w-[220px] md:w-[320px] transform rotate-[6deg] hover:rotate-0 transition-all duration-300 animate-fade-in-up pointer-events-auto" style={{ animationDelay: '700ms' }}>
              <div className="bg-white/95 backdrop-blur-xl border border-blue-100 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,100,255,0.2)] hover:scale-105 transition-transform duration-300">
                <p className="text-blue-600 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest mb-2 leading-tight">Bosqichma-bosqich:</p>
                <p className="text-gray-900 text-[13px] sm:text-base md:text-lg font-bold leading-tight md:leading-snug">
                  Loyihani <strong className="text-[#FF416C] font-[900]">15 mln soʻm</strong> daromadli tizimli biznesga aylantiramiz.
                </p>
              </div>
            </div>
          </div>

          {/* ── BOTTOM BLOCK (CTA + Social Proof, shrink-0) ── */}
          <div className="shrink-0 relative z-[30] w-full flex flex-col items-center px-4 -mt-10 sm:-mt-12 md:-mt-16 pb-4 mb-auto">
            <div className="w-full max-w-[420px] sm:max-w-[500px] pointer-events-auto animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <CTAButton
                text="Joyni band qilish"
                subtext="To'lovdan so'ng darhol ochiladi"
                className="!py-4 sm:!py-5 md:!py-6 !rounded-full shadow-[0_20px_40px_-8px_rgba(255,65,108,0.5)] !text-[1.1rem] sm:!text-lg md:!text-2xl scale-100 hover:scale-[1.03] flex flex-col items-center justify-center w-full"
              />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 pointer-events-auto">
              <div className="flex -space-x-2 shrink-0">
                <img src={avatar1} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white shadow-sm" />
                <img src={avatar2} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white shadow-sm" />
                <img src={avatar3} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white shadow-sm" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="flex gap-0.5 text-yellow-500">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 mt-0.5">
                  <span className="text-gray-900 font-[800]">2780 kishi</span> kursni tamomladi
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* =========================================
            BLOCK 2: PAIN POINTS
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-gray-50 scroll-animate-hidden opacity-0 relative overflow-hidden">
          {/* Box Decor moved here - Lower Opacity */}
          <div className="absolute top-20 left-[-5%] md:left-[2%] w-20 md:w-56 opacity-20 animate-float pointer-events-none z-0" style={{ animationDelay: '2s' }}>
            <img src={boxImg} alt="Box" className="w-full h-auto drop-shadow-xl" />
          </div>
          <SectionHeader
            badge="Muammolar"
            title="Siz ham shunday qilyapsizmi? 🧐"
            subtitle="Odatda O‘zbekistonda tovar biznesini boshlash quyidagicha ko‘rinadi: pul topish → tavakkal qilish → tovar sotib olish → uni kimdir sotib olishiga umid qilish."
          />

          <div className="flex flex-col lg:flex-row gap-10 md:gap-14">
            {/* Left: Pain Points List */}
            <div className="flex-1 bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">❓</span>
                O‘zingizni ushbu vaziyatlarda taniysizmi?
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Boshlamoqchisiz, lekin hamma narsa pulga borib taqaladi. Tovar sotib olishga ortiqcha millioningiz yo‘q.",
                  "Uyingizni oylar davomida chang bosib yotadigan qutilar omboriga aylantirishdan qo‘rqasiz.",
                  "Minusga kirmaslik uchun foydani qanday hisoblashni tushunmaysiz.",
                  "Instagram’da reklama yoqib, shunchaki pulni havoga uchirishdan qo‘rqasiz.",
                  "Ma’lumot ko‘p, lekin aynan nima qilish kerakligi tushunarsiz."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <XIcon />
                    <span className="text-[15px] font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solution Box */}
            <div className="flex-1 bg-blue-600 text-white p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden shadow-xl">
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-[60px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-6">Yechim bor!</h3>
                <p className="text-blue-50 text-base md:text-lg font-medium leading-relaxed mb-8 opacity-95">
                  Haqiqat shundaki, "sotib ol va sot" kabi eski usullar allaqachon ishlamay qo‘ygan. Men boshqa yo‘lni taklif qilaman: avval mijozni topamiz, so‘ng buyurtmani yetkazib beruvchiga topshiramiz.
                  <br /><br />
                  Siz pulingizni xavf ostiga qo‘ymaysiz, uyingizda tovar saqlamaysiz va yetkazib berish bilan shug‘ullanmaysiz.
                </p>
                <div className="bg-white/10 p-1 rounded-2xl">
                  <a href="https://saidkulov.exode.biz/pay/2097/1786" className="block text-center w-full bg-white text-blue-700 py-4 px-6 rounded-xl font-black text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-lg no-underline">
                    Bu men haqimda — menga 89 000 so‘mlik sxemani ko‘rsating
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 3: HOW IT WORKS
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-white">
          <SectionHeader
            badge="Ishlash sxemasi"
            title="Hammasi qanday ishlaydi?"
            subtitle="Hamkorlik tarmog‘i — bu sizning yetkazib beruvchingiz. Ularda sizning savdolaringiz uchun hamma narsa tayyor: tovarlar, tayyor saytlar va reklama roliklari."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10">
            {/* Supplier Tasks */}
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 relative group transition-all hover:bg-gray-100/80">
              <div className="absolute top-6 right-8 opacity-10 text-6xl font-black">🏢</div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6">Tarmoq nima qiladi? (Yetkazib beruvchi)</h3>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex gap-4 items-start"><span className="bg-white shadow-sm w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-500 shrink-0">1</span><p className="text-gray-700 font-medium"><strong>Tovarni sotib oladi:</strong> O‘z pulingizni tikishingiz shart emas.</p></div>
                <div className="flex gap-4 items-start"><span className="bg-white shadow-sm w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-500 shrink-0">2</span><p className="text-gray-700 font-medium"><strong>Omborni boshqaradi:</strong> Saqlash uchun joy kerak emas.</p></div>
                <div className="flex gap-4 items-start"><span className="bg-white shadow-sm w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-500 shrink-0">3</span><p className="text-gray-700 font-medium"><strong>Materiallarni beradi:</strong> Ishga tushirish uchun tayyor saytlar va kreativlar.</p></div>
                <div className="flex gap-4 items-start"><span className="bg-white shadow-sm w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-500 shrink-0">4</span><p className="text-gray-700 font-medium"><strong>Qo‘ng‘iroq qiladi va yetkazadi:</strong> Operatorlar va kuryerlar siz uchun ishlaydi.</p></div>
              </div>
            </div>

            {/* User Tasks */}
            <div className="bg-blue-50/50 rounded-[2rem] p-8 md:p-10 border border-blue-100 relative group transition-all hover:bg-blue-50">
              <div className="absolute top-6 right-8 opacity-10 text-6xl font-black text-blue-600">💻</div>
              <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-6">Siz nima qilasiz?</h3>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex gap-4 items-start"><span className="bg-blue-600 shadow-sm w-8 h-8 flex items-center justify-center text-white rounded-lg font-bold shrink-0">1</span><p className="text-gray-800 font-medium"><strong className="text-blue-900">Tovarni tanlaysiz:</strong> Sotuvga tayyor ro‘yxatdan.</p></div>
                <div className="flex gap-4 items-start"><span className="bg-blue-600 shadow-sm w-8 h-8 flex items-center justify-center text-white rounded-lg font-bold shrink-0">2</span><p className="text-gray-800 font-medium"><strong className="text-blue-900">Testni yoqasiz:</strong> Ishchi metodologiya bo‘yicha reklama ko‘rsatasiz.</p></div>
                <div className="flex gap-4 items-start"><span className="bg-blue-600 shadow-sm w-8 h-8 flex items-center justify-center text-white rounded-lg font-bold shrink-0">3</span><p className="text-gray-800 font-medium"><strong className="text-blue-900">Foyda olasiz:</strong> Har bir sotilgan tovardan o‘z foizingizni olasiz.</p></div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-900 rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/20 opacity-50 blur-3xl"></div>
            <p className="relative z-10 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              <span className="font-black text-blue-400">Natija:</span> Siz dunyoning istalgan nuqtasidan faqat reklama bilan ishlaysiz. Qolgan hamma narsa yetkazib beruvchi zimmasida.
            </p>
          </div>

          <div className="mt-8 max-w-md mx-auto">
            <CTAButton text="89 000 so‘mga bosqichma-bosqich rejani xohlayman" />
          </div>
        </section>

        {/* =========================================
            BLOCK 4: POTENTIAL EARNINGS
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-blue-600 text-white relative overflow-hidden scroll-animate-hidden opacity-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/40 via-blue-600 to-blue-800 opacity-60 pointer-events-none"></div>

          {/* Floating Image Decor - High Visual Context */}
          <div className="absolute -top-10 -right-20 md:-right-10 w-48 md:w-80 opacity-20 animate-float pointer-events-none z-0" style={{ animationDelay: '1s' }}>
            <img src={moneyImg} alt="Money" className="w-full h-auto drop-shadow-2xl" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-32 md:w-56 opacity-15 animate-float pointer-events-none z-0" style={{ animationDelay: '3s' }}>
            <img src={boxImg} alt="Box" className="w-full h-auto drop-shadow-2xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-[1.1] text-white">Bu yerda real ravishda qancha pul ishlash mumkin? 💰</h2>

            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20 mb-8 shadow-2xl relative">
              <div className="inline-block px-5 py-2 bg-white/20 rounded-full font-bold text-sm md:text-base uppercase tracking-widest">Maqsad</div>
              <div className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100 drop-shadow-lg">
                Oyiga $1000
              </div>

              <p className="text-lg md:text-2xl font-medium mb-8 opacity-95">
                O‘rtacha hamkorlik tarmog‘i bitta tasdiqlangan buyurtma uchun sizga <span className="font-black bg-white/20 px-2 py-1 rounded">3$</span> to‘laydi.
              </p>

              <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-xl transform rotate-1 md:rotate-0 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <p className="text-gray-500 font-bold uppercase text-xs md:text-sm tracking-widest mb-1">Oylik hajm</p>
                  <p className="text-3xl md:text-4xl font-black text-gray-900">300 ta sotuv</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-gray-500 font-bold uppercase text-xs md:text-sm tracking-widest mb-1">Kunlik norma</p>
                  <p className="text-4xl md:text-5xl font-black text-blue-600">10 ta sotuv</p>
                </div>
              </div>
            </div>

            <p className="text-base md:text-xl font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
              O‘zbekiston bozori uchun kuniga 10 ta sotuv — bu <strong className="font-black text-white">juda kichik raqam</strong>. Bunday hajmni olish uchun bitta normal reklama roligini yoqish kifoya.
            </p>

            <div className="max-w-md mx-auto">
              <CTAButton text="Kuniga 10 ta sotuv qilishni xohlayman" className="!bg-gradient-to-r !from-white !to-gray-100 !text-blue-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 5: ABOUT THE AUTHOR
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-white relative overflow-hidden">
          {/* Subtle Background assets */}
          <div className="absolute top-40 right-[-5%] w-48 opacity-15 animate-float pointer-events-none">
            <img src={moneyImg} alt="Money" />
          </div>
          <div className="absolute bottom-20 left-[-5%] w-40 opacity-15 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
            <img src={boxImg} alt="Box" />
          </div>

          <SectionHeader
            badge="Muallif haqida"
            title="Kurs muallifi kim? 🔥"
          />

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto mb-16 scroll-animate-hidden opacity-0">
            {/* Image Section - Main Portrait (Bali/Road Photo) */}
            <div className="w-full lg:w-[450px] h-[500px] md:h-[650px] bg-gray-100 rounded-[3rem] shrink-0 border border-gray-200 shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/50"></div>

              {/* Main Portrait updated to high-quality Bali/Road photo */}
              <img
                src={jasurNew}
                alt="Jasur Saidqulov"
                className="absolute inset-0 w-full h-full object-cover object-center z-20 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-25 opacity-80"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl z-30 shadow-2xl text-center transform translate-y-2 group-hover:translate-y-0 opacity-95 group-hover:opacity-100 transition-all border border-white/50">
                <p className="font-black text-3xl text-gray-900 tracking-tight">Jasur Saidqulov</p>
                <p className="font-bold text-blue-600 text-sm tracking-widest uppercase mt-1">E-commerce mutaxassisi 🚀</p>
              </div>
            </div>

            {/* Author Summary Intro */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-blue-50/50 p-8 md:p-10 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
                <p className="text-gray-700 text-lg md:text-2xl font-semibold leading-relaxed italic relative z-10">
                  "Men cho‘ntagimda millionlar bilan boshlamaganman. Ilk budjetim bor-yo‘g‘i <strong className="font-black text-blue-600">$100</strong> bo‘lgan. Men O‘zbekistonda nima ishlashini o‘z tajribamda tekshirdim. Endi esa sizga tayyor tizimni topshirishga tayyorman."
                </p>
              </div>

              {/* Author Highlight Cards - RECONSTRUCTED Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Visual Result (Malibu) */}
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 scale-100 hover:scale-[1.02] transform scroll-animate-hidden opacity-0" style={{ animationDelay: '100ms' }}>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={carImg} alt="Malibu 2 Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6 bg-white border-t border-gray-50">
                    <h4 className="text-2xl font-black text-gray-900 mb-1">18 yosh 🚗</h4>
                    <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">Ilk avtomobil xaridi (Malibu 2)</p>
                  </div>
                </div>

                {/* Card 2: Lifestyle Result (Bali) */}
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 scale-100 hover:scale-[1.02] transform scroll-animate-hidden opacity-0" style={{ animationDelay: '200ms' }}>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={baliImg} alt="Bali Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6 bg-white border-t border-gray-50">
                    <h4 className="text-2xl font-black text-gray-900 mb-1">Bali 🌴</h4>
                    <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">Orolida yashaydi, onlayn ishlaydi</p>
                  </div>
                </div>

                {/* Card 3: Expertise (Premium Gradient) */}
                <div className="rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-xl group hover:shadow-blue-500/20 transition-all duration-500 scroll-animate-hidden opacity-0" style={{ animationDelay: '300ms' }}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-md group-hover:scale-110 transition-transform">⏳</div>
                  <h4 className="text-3xl font-black mb-2 tracking-tight">6 yil tajriba</h4>
                  <p className="text-blue-100 font-bold text-sm uppercase tracking-widest opacity-80">Tovar biznesida professional</p>
                </div>

                {/* Card 4: Scale (Vibrant Gradient) */}
                <div className="rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#FF4E50] to-[#F9D423] text-white shadow-xl group hover:shadow-orange-500/20 transition-all duration-500 scroll-animate-hidden opacity-0" style={{ animationDelay: '400ms' }}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-md group-hover:scale-110 transition-transform">📦</div>
                  <h4 className="text-4xl font-black mb-2 tracking-tighter">10 000+</h4>
                  <p className="text-white/90 font-bold text-sm uppercase tracking-widest">Oylik tovar jo‘natmalari</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 3 (Warehouse/Work) - Enhanced with Entrance Animation */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-10 bg-gray-900 rounded-[3rem] p-8 md:p-12 overflow-hidden relative shadow-2xl max-w-6xl mx-auto scroll-animate-hidden opacity-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent pointer-events-none"></div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shrink-0 relative z-10 shadow-3xl border border-gray-700/50 group">
              <img src={warehouseImg} alt="Warehouse operations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-block px-5 py-2 bg-blue-500/20 text-blue-400 rounded-full font-bold text-xs uppercase tracking-[0.2em] mb-6">Tayyor infratuzilma</div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Biznesni <span className="text-blue-400">omborlarsiz</span> quring 📈</h3>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">Barcha saqlash, qadoqlash va yetkazib berish ishlarini partner-tarmoqqa topshiring. Siz faqat daromad bilan shug‘ullanasiz!</p>
              <div className="max-w-md mx-auto md:mx-0">
                <CTAButton text="Joyni band qilish 🔥" subtext="To‘lovdan keyin darhol ochiladi" className="!w-full shadow-[0_20px_40px_-10px_rgba(255,65,108,0.4)]" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 6: WHY BEGINNERS FAIL
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-gray-900 text-white relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.15] mb-6">Nima uchun 10 tadan 9 ta yangi boshlovchi to‘xtab qoladi?</h2>
            <div className="inline-block px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full font-bold text-red-400">
              Ko‘pchilik birinchi oydayoq kuyib ketadi. Chunki ular tavakkaliga harakat qilishadi.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-gray-200 font-medium">Bozorga kerakli emas, <strong className="text-white">o‘zlariga yoqqan tovarni</strong> tanlashadi.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">📉</div>
              <p className="text-gray-200 font-medium"><strong className="text-white">Jalb qilmaydigan reklama:</strong> Reklama aylanadi, lekin buyurtma nol.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">🛑</div>
              <p className="text-gray-200 font-medium">Test qachon muvaffaqiyatsiz bo‘lganini va <strong className="text-white">qachon to‘xtatish kerakligini</strong> tushunishmaydi.</p>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-300">
              Xato narxi — kamida <span className="text-red-400 font-black">610 000 so‘m</span> (test budjeti) va o‘ziga bo‘lgan ishonchni butkul yo‘qotish.
            </p>
            <p className="text-base md:text-xl font-medium mb-10 text-gray-400 max-w-2xl mx-auto">
              Men sizga o‘zimning tekshirilgan metodologiyamni atigi <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">89 000 so‘mga</span> olishni taklif qilaman. <strong className="text-green-400 block mt-2">Bu bitta omadsiz testingizdan 7 barobar arzonroq.</strong>
            </p>
            <div className="max-w-md mx-auto">
              <CTAButton text="Muvaffaqiyatsizlarsiz 89 000 so‘mga boshlashni xohlayman" />
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 7: MARKET POTENTIAL
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-[#F8F9FA] relative scroll-animate-hidden opacity-0">
          {/* Floating Image Decor - User's Clean PNG */}
          <div className="absolute top-20 right-[2%] md:right-[5%] w-32 md:w-56 opacity-15 animate-float pointer-events-none z-0" style={{ animationDelay: '1.5s' }}>
            <img src={moneyImg} alt="Money" className="w-full h-auto drop-shadow-xl" />
          </div>
          <div className="absolute bottom-20 left-[2%] md:left-[5%] w-24 md:w-40 opacity-15 animate-float pointer-events-none z-0">
            <img src={boxImg} alt="Box" className="w-full h-auto drop-shadow-xl" />
          </div>

          <SectionHeader
            badge="O‘zbekiston bozori"
            title="Nima uchun hozir boshlash uchun ideal vaqt? 🚀"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">🎯</div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Chanqoq bozor</h3>
              <p className="text-gray-600 font-medium text-[15px] leading-relaxed">Instagram’da millionlab xaridorlar bor, professional sotuvchilar esa juda kam.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center scale-100 lg:scale-105 z-10 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform rotate-1 opacity-5 mix-blend-multiply"></div>
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner relative z-10">💸</div>
              <h3 className="text-xl font-black text-gray-900 mb-4 relative z-10">Past kirish chegarasi</h3>
              <p className="text-gray-600 font-medium text-[15px] leading-relaxed relative z-10">Bugun atigi 20$ bilan boshlash mumkin. Bir yildan keyin kirish narxi bir necha barobar qimmatlashadi.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">🚀</div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Bo‘sh nisha</h3>
              <p className="text-gray-600 font-medium text-[15px] leading-relaxed">Yirik o‘yinchilar endigina logistikani sozlayotgan bir paytda, siz allaqachon foydani yig‘ib olyapsiz.</p>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-transparent opacity-60"></div>
            <h3 className="text-xl md:text-3xl font-black mb-6 relative z-10">Sizning tanlovingiz:</h3>
            <p className="text-base md:text-xl font-medium leading-relaxed opacity-95 relative z-10">
              Bugun boshlash va bir yildan keyin <strong className="font-black text-white px-1">kuchli, daromadli biznesga</strong> ega bo‘lish... <br className="hidden md:block" />yoki bir yildan keyin kuchli raqobat sharoitida omon qolishga harakat qilish.
            </p>
          </div>
        </section>

        {/* =========================================
            BLOCK 8: ROADMAP
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-white">
          <SectionHeader
            badge="Dastur yo‘li"
            title="Sizni qanday yo‘l kutmoqda?"
          />

          <div className="max-w-4xl mx-auto relative mt-10">
            {/* Desktop Line */}
            <div className="hidden md:block absolute left-[50%] top-10 bottom-10 w-1 bg-gray-100 transform -translate-x-1/2"></div>

            <div className="flex flex-col gap-8 md:gap-12">
              {[
                { step: "1", title: "Product selection", text: "Tayyor ro‘yxatdan ommabop tovarni tanlaymiz." },
                { step: "2", title: "Ad launch", text: "Tayyor yo‘riqnoma bo‘yicha birinchi test reklamasini yoqamiz." },
                { step: "3", title: "First leads", text: "Real mijozlardan birinchi arizalarni qabul qilamiz." },
                { step: "4", title: "Profit & Scale", text: "Sof foydani hisoblaymiz va savdoni kengaytiramiz." }
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm ${idx % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-medium">{item.text}</p>
                  </div>
                  <div className="w-16 h-16 shrink-0 bg-blue-600 text-white font-black text-2xl flex items-center justify-center rounded-2xl shadow-lg border-4 border-white z-10 relative">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 9: CURRICULUM & BONUSES
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-gray-50">
          <SectionHeader
            badge="Kurs dasturi"
            title="Mini-kursda nimalarni o‘rganasiz?"
          />

          <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
              <div className="w-16 h-16 shrink-0 bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center rounded-2xl">01</div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">Hozir sotib olishni xohlaydigan tovarni tanlaymiz</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base"><span className="text-green-600 font-bold">Natija:</span> 3–5 ta ishonchli tovar ro‘yxati.</p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
              <div className="w-16 h-16 shrink-0 bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center rounded-2xl">02</div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">Reklamani bosqichma-bosqich yoqish</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base"><span className="text-green-600 font-bold">Natija:</span> Birinchi ishga tushirilgan reklama kompaniyasi.</p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
              <div className="w-16 h-16 shrink-0 bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center rounded-2xl">03</div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">Analitika va raqamlar nazorati</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base"><span className="text-green-600 font-bold">Natija:</span> Ma’lumotlar asosida boshqaruv (emotsiyalarsiz).</p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
              <div className="w-16 h-16 shrink-0 bg-blue-50 text-blue-600 font-black text-2xl flex items-center justify-center rounded-2xl">04</div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">Masshtablash: testdan daromadga</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base"><span className="text-green-600 font-bold">Natija:</span> Barqaror daromad strategiyasi.</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[60px] opacity-50"></div>

            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-6 border-2 border-yellow-300">Sovg‘alar</div>
              <h3 className="text-2xl md:text-4xl font-black mb-4">4 ta Maxsus Bonus!</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Tovar tanlash chek-listi (PDF)",
                "Foydani hisoblash jadvali (Template)",
                "Yangi boshlovchilarning xatolari ro‘yxati",
                "Bitta tovar misolida muvaffaqiyatli keys tahlili"
              ].map((bonus, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                  <div className="text-2xl">🎁</div>
                  <p className="font-semibold text-sm md:text-base text-blue-50">{bonus}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <CTAButton text="Kurs + Bonuslarga ega bo‘lish" className="!bg-gradient-to-r !from-yellow-400 !to-yellow-500 !text-gray-900 !shadow-[0_10px_30px_-5px_rgba(250,204,21,0.5)]" />
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCK 10: TESTIMONIALS
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-white">
          <SectionHeader
            badge="Keyslar"
            title="Tizim orqali ishlayotganlar qanday natija qilyapti?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sardor", age: "18 yosh", photo: t1, text: "Pulim faqat tushlikka yetardi. Hozir barqaror kuniga 10–15 ta sotuv qilyapman." },
              { name: "Gulnora", age: "34 yosh", photo: t2, text: "Hamma ishni uydan turib qilsa bo‘larkan. O‘tgan haftadagi sof foydam 1 800 000 so‘m." },
              { name: "Jahongir", age: "29 yosh", photo: t3, text: "Jasurning kursida oddiy yo‘riqnomani topdim. Nihoyat qo‘lim bilan emas, aqlim bilan ishlayapman." },
              { name: "Rustam", age: "27 yosh", photo: t4, text: "Kursdan keyin 2 kunda ishga tushdim, hozir kuniga 30 tadan ortiq jo‘natma qilyapman." }
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-3xl flex flex-col gap-4 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p className="text-gray-700 italic font-medium leading-relaxed flex-1">"{review.text}"</p>
                <div className="pt-4 border-t border-gray-200 mt-2 flex items-center gap-4">
                  <img src={review.photo} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" alt={review.name} />
                  <div>
                    <p className="font-black text-gray-900">{review.name}</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">{review.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            BLOCK 11: FAQ
        ========================================= */}
        <section className="px-6 py-14 md:px-16 md:py-20 bg-[#F8F9FA] relative scroll-animate-hidden opacity-0">
          {/* Subtle decoration */}
          <div className="absolute top-20 right-0 w-32 opacity-15 blur-xl">
            <img src={moneyImg} alt="" />
          </div>
          <SectionHeader
            badge="FAQ"
            title="Ko‘p beriladigan savollar ❓"
          />

          <div className="max-w-3xl mx-auto">
            <FAQItem question="Tajribam yo‘q, uddalay olamanmi?" answer="Ha. Kurs maxsus yangi boshlovchilar uchun yozilgan. Hamma narsa A dan Z gacha ko‘rsatilgan." />
            <FAQItem question="Boshlash uchun real qancha pul kerak?" answer="Instagram’da birinchi test uchun 20$ yetarli hisoblanadi." />
            <FAQItem question="Bunga qancha vaqt ketadi?" answer="Kuniga 1,5–2 soat ishlasangiz kifoya qiladi." />
            <FAQItem question="Yetkazib berish va qo‘ng‘iroqlar bilan kim shug‘ullanadi?" answer="Buni to‘liq hamkorlik tarmog‘i (yetkazib beruvchi partneringiz) amalga oshiradi." />
            <FAQItem question="Agar o‘xshamasa-chi?" answer="89 000 so‘mga siz tizim bo'yicha kuchli bilimlarni sotib olasiz, bu risk qilish uchun eng minimal to'lov hisoblanadi." />
            <FAQItem question="Kursga qanday kiraman?" answer="To‘lovdan so‘ng yopiq Telegram kanaliga darhol havola keladi." />
          </div>

          <div className="mt-16 text-center pb-10">
            <p className="text-gray-500 font-bold mb-6">Savollaringiz qolmadimi?</p>
            <div className="max-w-md mx-auto">
              <CTAButton text="89 000 so‘mga kirish huquqini olish" subtext="To‘lovdan so‘ng darhol ochiladi" />
            </div>
          </div>
        </section>

      </div >

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pulse-btn {
          0% { box-shadow: 0 0 0 0 rgba(255, 65, 108, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 0 30px rgba(255, 65, 108, 0); transform: scale(1.05); }
          100% { box-shadow: 0 0 0 0 rgba(255, 65, 108, 0); transform: scale(1); }
        }
        .custom-pulse-btn {
          animation: pulse-btn 2s infinite ease-in-out;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg) scale(1.15); }
        }
        .custom-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 2.5s ease-in-out infinite;
        }
      `}} />
    </div >
  );
};

export default LandingPage;
