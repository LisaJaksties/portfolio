"use client";

import { useState, ReactNode, MouseEvent, TouchEvent } from "react";

interface CursorHoverProps {
    children: ReactNode;
    hoverText: string;
    className?: string;
}

export default function CursorHover({ children, hoverText, className }: CursorHoverProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
        setIsHovering(true);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
        setIsHovering(false);
    };

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            {children}

            {isHovering && (
                <div
                    className="fixed z-50 pointer-events-none px-3 py-1 text-xs text-text/70"
                    style={{ left: position.x + 16, top: position.y + 16 }}
                >
                    {hoverText}
                </div>
            )}
        </div>
    );
}