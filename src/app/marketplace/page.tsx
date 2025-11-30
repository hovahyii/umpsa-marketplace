"use client";

import { useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/context/LanguageContext';

// Mock Data for Digital Products
const products = [
    {
        id: 'p1',
        title: 'Complete Calculus 1 Notes (A+)',
        provider: 'Sarah Lee',
        price: 'RM 10.00',
        category: 'Notes',
        whatsapp: '60111222333',
        rating: 5.0,
        imageUrl: ''
    },
    {
        id: 'p2',
        title: 'Final Year Project Report Sample (IoT)',
        provider: 'Tech Senior',
        price: 'RM 30.00',
        category: 'Project',
        whatsapp: '60144455566',
        rating: 4.8
    },
    {
        id: 'p3',
        title: 'Java Programming Lab Solutions',
        provider: 'Code Master',
        price: 'RM 15.00',
        category: 'Source Code',
        whatsapp: '60177788899',
        rating: 4.9
    },
    {
        id: 'p4',
        title: 'Engineering Mechanics Past Year Answers',
        provider: 'Mech Guy',
        price: 'RM 5.00',
        category: 'Past Year',
        whatsapp: '60199900011',
        rating: 4.5
    }
];

export default function MarketplacePage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="container py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.marketplace.title}</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    {t.marketplace.subtitle}
                </p>
            </div>

            {/* Filters */}
            <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-2">
                {['All', 'Notes', 'Project', 'Source Code'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === cat
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <ServiceCard key={product.id} {...product} />
                ))}
            </div>

            {/* Sell CTA */}
            <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-white/5 text-center">
                <h2 className="text-2xl font-bold mb-4">{t.marketplace.sellTitle}</h2>
                <p className="text-slate-400 mb-6">{t.marketplace.sellDesc}</p>
                <a href="/post-service" className="btn btn-primary">{t.marketplace.sellBtn}</a>
            </div>
        </div>
    );
}
