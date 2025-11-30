"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Mock Events Data
const events = [
    {
        id: 1,
        title: "UMPSA Career Fair 2025",
        date: "2025-12-15",
        time: "09:00 AM - 05:00 PM",
        location: "Dewan Astaka",
        category: "Career",
        description: "Meet top employers and explore internship opportunities."
    },
    {
        id: 2,
        title: "Codeathon: Hack the Campus",
        date: "2025-12-20",
        time: "08:00 AM - 08:00 PM",
        location: "Library Auditorium",
        category: "Competition",
        description: "24-hour coding challenge to solve campus problems."
    },
    {
        id: 3,
        title: "Cultural Night: Malam Citra Budaya",
        date: "2025-12-25",
        time: "08:00 PM - 11:00 PM",
        location: "Sports Complex",
        category: "Culture",
        description: "A night of traditional performances and food."
    },
    {
        id: 4,
        title: "Final Year Project Showcase",
        date: "2026-01-05",
        time: "10:00 AM - 04:00 PM",
        location: "Faculty of Computing",
        category: "Academic",
        description: "Showcase of innovative projects by final year students."
    }
];

export default function HappeningPage() {
    const { t } = useLanguage();
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Helper to get days in month
    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    const hasEvent = (day: number) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.some(e => e.date === dateStr);
    };

    const filteredEvents = selectedDate
        ? events.filter(e => e.date === selectedDate)
        : events;

    const handleDateClick = (day: number) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setSelectedDate(selectedDate === dateStr ? null : dateStr);
    };

    return (
        <div className="container py-12 px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.happening.title}</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    {t.happening.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Section */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">December {currentYear}</h2>
                            <CalendarIcon className="text-blue-500" />
                        </div>

                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-slate-500">
                            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {blanks.map(i => <div key={`blank-${i}`} />)}
                            {days.map(day => {
                                const isEventDay = hasEvent(day);
                                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                const isSelected = selectedDate === dateStr;

                                return (
                                    <button
                                        key={day}
                                        onClick={() => handleDateClick(day)}
                                        className={`
                      h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all relative
                      ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}
                      ${isEventDay && !isSelected ? 'font-bold text-white' : ''}
                    `}
                                    >
                                        {day}
                                        {isEventDay && !isSelected && (
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Events List */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold mb-4">
                        {selectedDate ? `Events on ${selectedDate}` : t.happening.upcoming}
                    </h2>

                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <div key={event.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 mb-2">
                                            {event.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {event.title}
                                        </h3>
                                    </div>
                                    <div className="text-center bg-slate-800 rounded-lg p-2 min-w-[80px]">
                                        <div className="text-xs text-slate-400 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                                        <div className="text-2xl font-bold text-white">{new Date(event.date).getDate()}</div>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 border-t border-slate-800 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} /> {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} /> {event.location}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-slate-500 bg-slate-900/30 rounded-xl border border-dashed border-slate-800">
                            <p>No events found for this date.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
