"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-16" style={{ marginTop: '4rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-bold text-xl mb-4">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-white text-xs">
                            U
                        </div>
                        <span className="text-white">UMPSA<span className="text-blue-400">Market</span></span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                        {t.footer.desc}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">{t.footer.platform}</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="/all-services" className="hover:text-blue-400">{t.nav.services}</Link></li>
                        <li><Link href="/marketplace" className="hover:text-blue-400">{t.nav.notes}</Link></li>
                        <li><Link href="/freerider-board" className="hover:text-blue-400">{t.nav.freerider}</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">{t.footer.legal}</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="#" className="hover:text-blue-400">{t.disclaimer.title}</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">{t.footer.safety}</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">{t.footer.contact}</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm px-4" style={{ marginTop: '3rem', paddingTop: '2rem' }}>
                <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
            </div>
        </footer>
    );
}
