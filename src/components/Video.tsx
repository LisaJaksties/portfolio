"use client";

interface VideoProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
}

export default function Video({
                                  src,
                                  alt = "",
                                  width,
                                  height,
                                  className,
                                  autoPlay = true,
                                  loop = true,
                                  muted = true,
                                  controls = false,
                                  poster,
                              }: VideoProps) {
    return (
        <video
            src={src}
            width={width}
            height={height}
            className={className}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            controls={controls}
            poster={poster}
            playsInline
            preload="metadata"
            aria-label={alt}
        >
            Your browser does not support the video tag.
        </video>
    );
}