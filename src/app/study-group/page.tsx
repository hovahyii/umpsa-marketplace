"use client";

import { useState } from 'react';
import { BookOpen, Users, Clock, MapPin, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

// Mock Data
const studyGroups = [
    {
        id: 1,
        subject: "Calculus 1 (BUM1123)",
        topic: "Derivatives & Integrals",
        location: "Library Level 2 (Discussion Room)",
        time: "Wed, 8:00 PM",
        members: 3,
        maxMembers: 5,
        host: "Aiman",
        level: "Beginner Friendly"
    },
    {
        id: 2,
        subject: "Programming Techniques",
        topic: "Pointer & Struct in C",
        location: "F-Block Foyer",
        time: "Thu, 2:00 PM",
        members: 2,
        maxMembers: 4,
        host: "Sarah",
        level: "Intermediate"
    },
    {
        id: 3,
        subject: "Discrete Structure",
        topic: "Graph Theory Revision",
        location: "Online (Discord)",
        time: "Fri, 9:00 PM",
        members: 4,
        maxMembers: 6,
        host: "David",
        level: "Advanced"
    }
];

export default function StudyGroupPage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    return (
        <div className="container py-12 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 flex items-center gap-3 justify-center md:justify-start">
                        <Users className="text-blue-500" size={40} />
                        {t.studyGroup.title}
                    </h1>
                    <p className="text-slate-400 max-w-xl text-lg">
                        {t.studyGroup.subtitle}
                    </p>
                </div>
                <Button size="lg" className="gap-2 shadow-lg shadow-blue-500/20">
                    <Plus size={20} /> {t.studyGroup.createBtn}
                </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                {['All', 'Mathematics', 'Programming', 'Engineering', 'Language'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${filter === cat
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {studyGroups.map(group => (
                    <div key={group.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group">
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                {group.level}
                            </span>
                            <div className="flex items-center gap-1 text-slate-400 text-sm bg-slate-800 px-2 py-1 rounded-md">
                                <Users size={14} />
                                <span>{group.members}/{group.maxMembers}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {group.subject}
                        </h3>
                        <p className="text-slate-400 mb-8 font-medium">
                            {group.topic}
                        </p>

                        <div className="space-y-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-amber-400" />
                                {group.time}
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-green-400" />
                                {group.location}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                                    {group.host[0]}
                                </div>
                                Hosted by <span className="text-white font-medium">{group.host}</span>
                            </div>
                        </div>

                        <Button className="w-full mt-8 bg-slate-800 hover:bg-blue-600 text-white transition-colors">
                            {t.studyGroup.joinBtn}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
