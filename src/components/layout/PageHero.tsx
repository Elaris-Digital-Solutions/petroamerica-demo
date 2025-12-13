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
    return (
        <div className={cn("relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-corporate-navy", className)}>
            {/* Background Image with Zoom Effect */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-slow-zoom"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-corporate-navy/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative section-container w-full z-10">
                <div className="max-w-3xl animate-slide-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-6 font-light">
                            {subtitle}
                        </p>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
}
