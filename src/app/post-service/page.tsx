"use client";

import { useState } from 'react';
import { Upload, Info } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function PostServicePage() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Service posted successfully! (This is a demo)");
        }, 1500);
    };

    return (
        <div className="container py-12 px-4 max-w-2xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{t.postService.title}</h1>
                <p className="text-slate-400">{t.postService.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.title}</label>
                        <input
                            type="text"
                            required
                            placeholder="e.g., Professional Resume Writing"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.category}</label>
                            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500">
                                <option>Car Rental</option>
                                <option>Printing</option>
                                <option>Assignment Help</option>
                                <option>Food Delivery</option>
                                <option>Design</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.price}</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g., 50.00"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.desc}</label>
                        <textarea
                            rows={5}
                            required
                            placeholder="Describe your service in detail..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.whatsapp}</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">+60</span>
                            <input
                                type="tel"
                                required
                                placeholder="123456789"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 pl-12 text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                            <Info size={12} /> {t.postService.form.info}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">{t.postService.form.images}</label>
                        <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer bg-slate-900/50">
                            <Upload className="mx-auto text-slate-500 mb-2" size={24} />
                            <p className="text-sm text-slate-400">{t.postService.form.upload}</p>
                            <p className="text-xs text-slate-600 mt-1">JPG, PNG up to 5MB</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                    <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                        {t.postService.form.submit}
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        {t.postService.form.agree}
                    </p>
                </div>
            </form>
        </div>
    );
}
