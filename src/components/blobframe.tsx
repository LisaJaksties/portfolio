import Image from "next/image";

export default function Blobframe() {
    return (
        <div className="relative md:w-full w-[300px] md:h-[500px] h-[300px] group">
            <div className="absolute inset-0 animate-blob opacity-70 group-hover:opacity-100
            transition"/>

            <div className="relative w-full h-full animate-blob overflow-hidden">
                <Image
                    src="/example.jpg"
                    alt="lisachoi"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}