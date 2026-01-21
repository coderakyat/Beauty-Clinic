"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials, Testimonial } from "@/features/testimonials";
import { Star, RefreshCw, Pause } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-primary fill-primary" : "text-text-muted-dark"}`}
                />
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
    return (
        <div
            className={`
                relative p-8 transition-all duration-500
                ${featured
                    ? "bg-surface-alt-dark/80 backdrop-blur-md border border-primary/30 transform md:-translate-y-4 shadow-glow"
                    : "bg-surface-alt-dark/40 backdrop-blur-sm border border-white/5"
                }
            `}
        >
            {/* Decorative Quote Mark */}
            <span className="absolute top-4 right-4 text-primary text-4xl font-display opacity-20">"</span>

            {/* Star Rating */}
            <div className="mb-4">
                <StarRating rating={testimonial.rating} />
            </div>

            {/* Quote */}
            <p className={`mb-6 leading-relaxed italic ${featured ? "text-white text-base" : "text-gray-300 text-sm"}`}>
                "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center">
                <div
                    className={`
                        w-10 h-10 flex items-center justify-center font-bold mr-3
                        ${featured
                            ? "bg-primary text-background"
                            : "bg-primary/20 text-primary"
                        }
                    `}
                >
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <p className="text-white text-sm font-bold">{testimonial.name}</p>
                    <p className={`text-xs ${featured ? "text-primary/80" : "text-gray-400"}`}>
                        {testimonial.treatment}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const scrollSpeedRef = useRef(0.8);

    const animate = useCallback(() => {
        if (!scrollRef.current || isPaused) {
            animationRef.current = requestAnimationFrame(animate);
            return;
        }

        const container = scrollRef.current;
        container.scrollLeft += scrollSpeedRef.current;

        const scrollWidth = container.scrollWidth;
        const halfScroll = scrollWidth / 2;

        if (container.scrollLeft >= halfScroll) {
            container.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(animate);
    }, [isPaused]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate]);

    const handlePause = () => setIsPaused(true);
    const handleResume = () => setIsPaused(false);

    // Grid display testimonials (first 3)
    const displayTestimonials = testimonials.slice(0, 3);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Background Blur Circles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-900 rounded-full filter blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-primary border border-primary/40 px-3 py-1 uppercase tracking-widest mb-4 inline-block">
                        Testimoni
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
                        Cerita Para <span className="text-primary">Pasien</span>
                    </h2>
                    <p className="text-text-muted-dark mt-4">
                        Dengarkan pengalaman mereka yang telah merasakan perbedaan di Contoh6.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            featured={index === 1}
                        />
                    ))}
                </div>

                {/* Auto-rotate Indicator */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="text-xs text-gray-500 hover:text-white flex items-center justify-center mx-auto transition-colors"
                    >
                        {isPaused ? (
                            <>
                                <Pause className="w-4 h-4 mr-1" />
                                Dijeda
                            </>
                        ) : (
                            <>
                                <RefreshCw className="w-4 h-4 mr-1" />
                                Memutar otomatis
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
