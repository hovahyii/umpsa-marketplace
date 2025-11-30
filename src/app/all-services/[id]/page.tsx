import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Star, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

// Mock Data (In a real app, fetch from DB)
const services = {
    '1': {
        id: '1',
        title: 'Perodua Axia for Rent (Auto)',
        provider: 'Ali Ahmad',
        price: 'RM 60 / day',
        category: 'Car Rental',
        whatsapp: '60123456789',
        rating: 4.8,
        description: 'Clean and well-maintained Perodua Axia available for rent. Automatic transmission. Fuel efficient. Perfect for students going to town or weekend trips. \n\nTerms:\n- Valid license required\n- Student ID required\n- Deposit RM 50',
        location: 'Kolej Kediaman 4',
        availability: 'Available Now'
    },
    '2': {
        id: '2',
        title: 'Cheap Printing Service (Color/BW)',
        provider: 'Print Master',
        price: 'RM 0.10 / page',
        category: 'Printing',
        whatsapp: '60198765432',
        rating: 5.0,
        description: 'Fast and cheap printing service. \nBlack & White: RM 0.10\nColor: RM 0.50\nBinding available upon request.',
        location: 'Library Foyer',
        availability: '9 AM - 10 PM'
    },
    '7': {
        id: '7',
        title: 'Programming Tutor (Java/Python)',
        provider: 'Code Guru',
        price: 'RM 25 / hour',
        category: 'Tutor',
        whatsapp: '60122233344',
        rating: 5.0,
        description: 'Personalized 1-on-1 programming tutoring. \nLanguages: Java, Python, C++, JavaScript.\nI can help with:\n- Understanding concepts\n- Debugging code\n- Project guidance\n\nAvailable for both online (Google Meet) and physical sessions (Library).',
        location: 'Library / Online',
        availability: 'Weekends & Evenings'
    }
};

export default async function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = services[id as keyof typeof services];

    if (!service) {
        // For demo purposes, fallback to a generic one if ID not found in mock
        if (id !== '1' && id !== '2') {
            return (
                <div className="container py-20 text-center">
                    <h1 className="text-2xl font-bold mb-4">Service Not Found (Demo)</h1>
                    <p className="text-slate-400 mb-8">This is a mock app. Try clicking on the first few items.</p>
                    <Link href="/services"><Button>Back to Services</Button></Link>
                </div>
            )
        }
    }

    return (
        <div className="container py-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={18} /> Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="relative h-[400px] w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                    <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900">
                        <span className="text-lg">Service Image Placeholder</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                    </div>
                </div>

                {/* Details Section */}
                <div>
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                        <Star fill="currentColor" size={18} />
                        <span className="font-bold text-lg">{service.rating}</span>
                        <span className="text-slate-500 text-sm">(124 reviews)</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
                    <p className="text-2xl font-bold text-blue-400 mb-6">{service.price}</p>

                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 mb-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">
                                {service.provider.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-white">{service.provider}</p>
                                <p className="text-xs text-slate-400">Verified Student</p>
                            </div>
                        </div>

                        <div className="h-px bg-slate-800" />

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-slate-300">
                                <MapPin size={16} className="text-slate-500" />
                                {service.location}
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <Clock size={16} className="text-slate-500" />
                                {service.availability}
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3">Description</h3>
                        <p className="text-slate-300 whitespace-pre-line leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href={`https://wa.me/${service.whatsapp}?text=Hi, I am interested in your service: ${service.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button size="lg" variant="accent" className="w-full gap-2 text-lg py-4">
                                <MessageCircle size={24} /> Chat on WhatsApp
                            </Button>
                        </a>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                            <ShieldCheck size={14} />
                            <span>Safety Tip: Never transfer large amounts before meeting.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
