import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Star } from 'lucide-react';
import Button from './ui/Button';

interface ServiceCardProps {
    id: string;
    title: string;
    provider: string;
    price: string;
    category: string;
    imageUrl?: string;
    rating?: number;
    whatsapp: string;
}

export default function ServiceCard({
    id,
    title,
    provider,
    price,
    category,
    imageUrl,
    rating = 5.0,
    whatsapp
}: ServiceCardProps) {
    return (
        <div className="card group hover:border-blue-500/50 transition-colors">
            <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900">
                        No Image
                    </div>
                )}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white">
                    {category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 font-medium">{provider}</span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star size={12} fill="currentColor" />
                        <span>{rating}</span>
                    </div>
                </div>

                <Link href={`/all-services/${id}`}>
                    <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                        {title}
                    </h3>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-white font-bold">{price}</span>
                    <a
                        href={`https://wa.me/${whatsapp}?text=Hi, I am interested in your service: ${title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="sm" variant="accent" className="gap-2">
                            <MessageCircle size={14} /> Chat
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
