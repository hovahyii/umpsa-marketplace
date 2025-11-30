"use client";

import Link from 'next/link';
import { ArrowRight, Printer, Car, BookOpen, Coffee, Users, Calendar, Star, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerModal from '@/components/DisclaimerModal';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    // Updated spacing - reduced padding
    <div className="pb-16 pt-16">
      <DisclaimerModal />

      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden" style={{ paddingTop: '2rem' }}>
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] -z-10" />

        <div className="container relative z-10 text-center px-6" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md animate-float" style={{ marginBottom: '1rem', marginTop: '0' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            {t.hero.title} <br className="hidden md:block" />
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>

          <div className="flex justify-center" style={{ marginBottom: '2rem' }}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light text-center">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-4" style={{ gap: '2rem', marginTop: '1rem', marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '1rem' }}>
            <Link href="/all-services">
              <Button size="lg" className="w-full md:w-auto gap-2 px-8 py-3 text-base btn-primary rounded-full">
                {t.hero.explore} <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/post-service">
              <Button variant="outline" size="lg" className="w-full md:w-auto px-8 py-3 text-base rounded-full border-white/20 hover:bg-white/10">
                {t.hero.post}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="container mb-16 px-6 mt-24" style={{ paddingLeft: '2rem', paddingRight: '2rem', marginTop: '3rem', paddingBottom: '2rem', paddingTop: '1rem' }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Everything you need, <span className="text-slate-500">sorted.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Large Card - Car Rental */}
          <Link href="/all-services?category=Car Rental" className="group md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500">
              <Car size={180} />
            </div>
            <div className="z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Car size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">Car Rental</h3>
              <p className="text-slate-400">Find affordable rides for your weekend trips.</p>
            </div>
            <div className="z-10 mt-auto">
              <span className="text-sm font-bold text-blue-400 flex items-center gap-2 group-hover:gap-4 transition-all">
                Browse Cars <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Medium Card - Printing */}
          <Link href="/all-services?category=Printing" className="group md:col-span-1 md:row-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-purple-500/10 to-transparent">
            <div className="absolute -bottom-4 -right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <Printer size={120} />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Printer size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Printing</h3>
              <p className="text-slate-400 text-sm">Fast & cheap printing services.</p>
            </div>
          </Link>

          {/* Small Card - Food */}
          <Link href="/all-services?category=Food" className="group glass-card p-6 flex items-center gap-4 hover:bg-amber-500/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Coffee size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Food Delivery</h3>
              <p className="text-xs text-slate-400">Direct to hostel</p>
            </div>
          </Link>

          {/* Small Card - Assignment */}
          <Link href="/all-services?category=Assignment" className="group glass-card p-6 flex items-center gap-4 hover:bg-green-500/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Assignment Help</h3>
              <p className="text-xs text-slate-400">Tutors & Guides</p>
            </div>
          </Link>

          {/* Wide Card - Study Group */}
          <Link href="/study-group" className="group md:col-span-2 glass-card p-8 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-6 z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Study Groups</h3>
                <p className="text-slate-400">Find your academic squad.</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all z-10">
              <ArrowRight size={20} />
            </div>
          </Link>

          {/* Wide Card - Events */}
          <Link href="/happening" className="group md:col-span-2 glass-card p-8 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-6 z-10">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                <Calendar size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Happening</h3>
                <p className="text-slate-400">Don't miss out on campus events.</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all z-10">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
