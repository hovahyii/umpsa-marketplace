"use client";

import { useState } from 'react';
import { ThumbsDown, AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

// Mock Data
const initialFreeriders = [
    { id: 1, name: 'Ahmad', faculty: 'Faculty of Engineering', votes: 24, reason: 'Always takes rides without paying' },
    { id: 2, name: 'Siti', faculty: 'Faculty of Science', votes: 18, reason: 'Promises to share petrol money but never does' },
    { id: 3, name: 'Ravi', faculty: 'Faculty of Business', votes: 15, reason: 'Frequent passenger, never contributes' },
    { id: 4, name: 'Melissa', faculty: 'Faculty of Medicine', votes: 12, reason: 'Takes rides daily but no payment' },
    { id: 5, name: 'Zainul', faculty: 'Faculty of Engineering', votes: 9, reason: 'Always makes excuses to avoid paying' },
];

export default function FreeriderPage() {
    const { t } = useLanguage();
    const [freeriders, setFreeriders] = useState(initialFreeriders);
    const [showReportForm, setShowReportForm] = useState(false);

    const handleVote = (index: number) => {
        setFreeriders(prev => {
            const updated = [...prev];
            updated[index].votes += 1;
            return updated.sort((a, b) => b.votes - a.votes);
        });
    };

    return (
        <div className="container py-12 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
                        <span className="text-red-500">Freerider</span> {t.freerider.hallOfShame}
                    </h1>
                    <p className="text-slate-400 max-w-xl text-center md:text-left">
                        {t.freerider.desc}
                    </p>
                </div>
                <Button
                    variant="accent"
                    className="bg-red-600 hover:bg-red-700 text-white border-none"
                    onClick={() => setShowReportForm(!showReportForm)}
                >
                    <AlertTriangle size={18} className="mr-2" />
                    {showReportForm ? t.freerider.cancelReport : t.freerider.reportBtn}
                </Button>
            </div>

            {/* Report Form */}
            {showReportForm && (
                <div className="mb-8 bg-red-950/20 border border-red-500/30 rounded-xl p-6 animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-lg font-bold text-red-400 mb-4">{t.freerider.reportTitle}</h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="Student Name"
                            className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-red-500 outline-none"
                        />
                        <input
                            placeholder="Faculty / Course"
                            className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-red-500 outline-none"
                        />
                        <textarea
                            placeholder="Reason (e.g. Missing meetings, no contribution)"
                            className="md:col-span-2 bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-red-500 outline-none"
                            rows={3}
                        />
                        <div className="md:col-span-2">
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">{t.freerider.submitReport}</Button>
                        </div>
                    </form>
                </div>
            )}

            {/* Leaderboard */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Top Reported Freeriders</h2>

                {freeriders.map((person, index) => (
                    <div key={person.id} className="bg-white/5 border border-slate-800 rounded-xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors">
                        <div className="flex items-start gap-6 flex-1">
                            {/* Rank */}
                            <div className="text-3xl font-bold text-blue-400">
                                #{index + 1}
                            </div>

                            {/* Name and Details */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-white">{person.name}</h3>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                                        {person.faculty}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm">{person.reason}</p>
                            </div>
                        </div>

                        {/* Vote Button */}
                        <button
                            onClick={() => handleVote(index)}
                            className="flex flex-col items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-red-600 transition-colors group"
                        >
                            <ThumbsDown size={24} className="text-slate-400 group-hover:text-white" />
                            <span className="text-lg font-bold text-white">{person.votes}</span>
                        </button>
                    </div>
                ))}
            </div>

            <p className="text-center text-slate-500 text-sm mt-8">
                {t.freerider.disclaimer}
            </p>
        </div>
    );
}
