import Image from "next/image";
import { Section } from "@/types/section";

export function SectionRenderer({ section }: { section: Section }) {
    switch (section.type) {
        case "design-system":
            return (
                <section className="max-w-4xl mx-auto py-16">
                    {section.designsystemname && <h1 className="text-3xl font-bold mb-8">{section.designsystemname}</h1>}
                    <p className="text-gray-700 mb-10" >{section.designsystemdescription}</p>
                    <Image
                        src={section.image ?? ""}
                        alt={section.image ?? ""}
                        width={896}
                        height={384}
                        className="max-w-4xl mx-auto block object-cover h-96"
                    />
                </section>
            );

        case "research":
            return (
                <section className="max-w-4xl mx-auto py-16">
                    {/*line*/}
                    <hr className="border-t border-gray-400 max-w-4xl mx-auto my-12"/>
                    {section.researchtitel && <h1 className="text-3xl font-bold mb-8">{section.researchtitel}</h1>}
                    <p className="text-gray-700 mb-10">{section.content}</p>
                </section>
            );


    }
}
