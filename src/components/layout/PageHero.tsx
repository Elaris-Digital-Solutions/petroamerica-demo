import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    className?: string;
    children?: ReactNode;
}

export function PageHero({ title, subtitle, image, className, children }: PageHeroProps) {
    // Preload hero image
    if (typeof window !== 'undefined' && image) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image;
        document.head.appendChild(link);
    }
    return (
        <div className={cn("relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-corporate-navy", className)}>
            {/* Background Image with Zoom Effect */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-slow-zoom"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy/90 via-corporate-navy/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative section-container w-full z-10">
                <div className="max-w-3xl animate-slide-up">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-6 font-light">
                            {subtitle}
                        </p>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
}
