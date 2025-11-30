"use client";

import Link from 'next/link';
import { Plus, ShoppingBag, Users, Home, Menu, Briefcase, UserX, X, Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Navbar() {
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
            <div className="container flex items-center justify-between h-16 px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">
                        U
                    </div>
                    <span className="text-white">UMPSA<span className="text-blue-400">Market</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Home size={16} /> Home
                    </Link>
                    <Link href="/all-services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Briefcase size={16} /> Services
                    </Link>
                    <Link href="/freerider-board" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <UserX size={16} /> Freerider
                    </Link>
                    <Link href="/marketplace" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <ShoppingBag size={16} /> Notes & Projects
                    </Link>
                    <Link href="/happening" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <CalendarIcon size={16} /> Happening
                    </Link>
                    <Link href="/study-group" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Users size={16} /> Study Group
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/post-service" className="hidden md:block">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold">
                            <Plus size={16} className="mr-1" /> Post Service
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-slate-950 p-4 flex flex-col gap-3">
                    <Link href="/" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <Home size={18} /> Home
                    </Link>
                    <Link href="/all-services" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <Briefcase size={18} /> Services
                    </Link>
                    <Link href="/freerider-board" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <UserX size={18} /> Freerider
                    </Link>
                    <Link href="/marketplace" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <ShoppingBag size={18} /> Notes & Projects
                    </Link>
                    <Link href="/happening" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <CalendarIcon size={18} /> Happening
                    </Link>
                    <Link href="/study-group" className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-slate-300">
                        <Users size={18} /> Study Group
                    </Link>
                    <Link href="/post-service" className="p-3 bg-blue-600 rounded-xl flex items-center gap-3 text-white justify-center font-bold mt-2">
                        <Plus size={18} /> Post Service
                    </Link>
                </div>
            )}
        </nav>
    );
}
