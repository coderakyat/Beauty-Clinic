"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials, Testimonial } from "@/features/testimonials";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? "text-primary" : "text-muted"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="testimonial-card group relative shrink-0 w-[320px] md:w-[400px] p-8 rounded-3xl bg-linear-to-br from-white to-muted/30 border border-primary/10 shadow-lg shadow-primary/5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
                "
            </div>

            {/* Star rating */}
            <div className="mb-5">
                <StarRating rating={testimonial.rating} />
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-foreground/90 leading-relaxed mb-8 relative z-10 min-h-[120px]">
                "{testimonial.quote}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                {/* Avatar placeholder with gradient */}
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                </div>
            </div>

            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const scrollSpeedRef = useRef(0.8); // pixels per frame

    const animate = useCallback(() => {
        if (!scrollRef.current || isPaused) {
            animationRef.current = requestAnimationFrame(animate);
            return;
        }

        const container = scrollRef.current;
        container.scrollLeft += scrollSpeedRef.current;

        // Reset scroll to create infinite loop effect
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

    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Testimoni
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Cerita Para <span className="text-primary">Pasien</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Dengarkan pengalaman mereka yang telah merasakan perbedaan di Contoh6.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Gradient fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Scrolling container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-hidden py-4 scroll-smooth"
                        onMouseEnter={handlePause}
                        onMouseLeave={handleResume}
                        onTouchStart={handlePause}
                        onTouchEnd={handleResume}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.id}-${index}`}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>

                {/* Pause indicator */}
                <div className="flex justify-center mt-8">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isPaused ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground'}`}>
                        {isPaused ? (
                            <>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Dijeda</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Memutar otomatis</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
