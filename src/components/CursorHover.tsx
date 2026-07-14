"use client";

import { useState, ReactNode, MouseEvent } from "react";

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

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
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