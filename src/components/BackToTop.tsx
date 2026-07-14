"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={scrollToTop}
                className="bg-primary text-md text-white p-3 rounded-full shadow-xl transition-transform duration-300
                hover:scale-105 hover:-translate-y-0.5"
                aria-label="Back to top"
            >
                <ArrowUp />
            </button>
        </div>
    );
}