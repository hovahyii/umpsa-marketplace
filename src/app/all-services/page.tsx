"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/context/LanguageContext';

// Mock Data
const allServices = [
    {
        id: '1',
        title: 'Perodua Axia for Rent (Auto)',
        provider: 'Ali Ahmad',
        price: 'RM 60 / day',
        category: 'Car Rental',
        whatsapp: '60123456789',
        rating: 4.8
    },
    {
        id: '2',
        title: 'Cheap Printing Service (Color/BW)',
        provider: 'Print Master',
        price: 'RM 0.10 / page',
        category: 'Printing',
        whatsapp: '60198765432',
        rating: 5.0
    },
    {
        id: '3',
        title: 'Calculus Assignment Help',
        provider: 'Math Wizard',
        price: 'Negotiable',
        category: 'Assignment',
        whatsapp: '601122334455',
        rating: 4.9
    },
    {
        id: '4',
        title: 'Nasi Lemak Delivery to Kolej',
        provider: 'Chef Kampus',
        price: 'RM 5.00',
        category: 'Food',
        whatsapp: '601555666777',
        rating: 4.7
    },
    {
        id: '5',
        title: 'Graphic Design for Posters',
        provider: 'Creative Studio',
        price: 'RM 30 / design',
        category: 'Design',
        whatsapp: '60133344455',
        rating: 4.6
    },
    {
        id: '6',
        title: 'Laptop Repair & Formatting',
        provider: 'Tech Fix',
        price: 'RM 40',
        category: 'Repair',
        whatsapp: '60177788899',
        rating: 4.9
    },
    {
        id: '7',
        title: 'Programming Tutor (Java/Python)',
        provider: 'Code Guru',
        price: 'RM 25 / hour',
        category: 'Tutor',
        whatsapp: '60122233344',
        rating: 5.0
    }
];

export default function ServicesPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Car Rental', 'Printing', 'Assignment', 'Food', 'Design', 'Repair', 'Tutor'];

    const filteredServices = allServices.filter(service => {
        const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.provider.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container py-12 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                <h1 className="text-3xl font-bold text-center md:text-left">{t.services.title}</h1>

                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder={t.services.searchPlaceholder}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-slate-500">
                    <p>{t.services.noResults}</p>
                </div>
            )}
        </div>
    );
}
