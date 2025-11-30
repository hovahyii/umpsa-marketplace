"use client";

import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        // Check if user has already acknowledged
        const hasAcknowledged = localStorage.getItem('disclaimer_acknowledged');
        if (!hasAcknowledged) {
            setIsOpen(true);
        }
    }, []);

    const handleAcknowledge = () => {
        localStorage.setItem('disclaimer_acknowledged', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-amber-500/30 rounded-xl max-w-md w-full p-8 shadow-2xl shadow-amber-900/20 relative animate-in fade-in zoom-in duration-300">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                        <AlertTriangle size={32} className="text-amber-500" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6">{t.disclaimer.title}</h2>

                    <div className="text-slate-300 text-sm space-y-6 mb-8 text-left bg-slate-950/50 p-10 rounded-xl border border-slate-800 mx-2">
                        <p>
                            <span className="text-amber-400 font-semibold">{t.disclaimer.important}</span> {t.disclaimer.intro}
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>{t.disclaimer.point1}</li>
                            <li>{t.disclaimer.point2}</li>
                            <li>{t.disclaimer.point3}</li>
                            <li>{t.disclaimer.point4}</li>
                        </ul>
                    </div>

                    <Button onClick={handleAcknowledge} variant="accent" className="w-full py-3 text-base">
                        {t.disclaimer.agree}
                    </Button>
                </div>
            </div>
        </div>
    );
}
