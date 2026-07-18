import Image from "next/image";

export default function Blobframe() {
    return (
        <div className="relative md:w-full w-[300px] md:h-[500px] h-[300px] group">
            <div className="absolute inset-0 animate-blob opacity-70 group-hover:opacity-100 group-active:opacity-100
            transition"/>

            <div className="relative w-full h-full animate-blob overflow-hidden">
                <Image
                    src="/profile.png"
                    alt="lisachoi"
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 "
                />

                {/* Hover image */}
                <Image
                    src="/profile2.png"
                    alt="lisachoi hover"
                    fill
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                />
            </div>
        </div>
    );
}