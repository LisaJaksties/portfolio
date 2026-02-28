import Image from "next/image";
import { Section } from "@/types/section";
import {soligant} from "@/fonts/soligant";
import ReactMarkdown from "react-markdown";

export function SectionRenderer({ section }: { section: Section }) {
    switch (section.type) {
        case "design-system":
            return (
                <section className="max-w-7xl mx-auto py-40">
                    {section.designsystemname &&
                        <h2 className={`${soligant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.designsystemname}</h2>}
                    <p className="text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify" >
                        {section.designsystemdescription}
                    </p>
                    <Image
                        src={section.image ?? ""}
                        alt={section.image ?? ""}
                        width={1024}
                        height={384}
                        className="w-full max-h-[600px] mx-auto block object-cover"
                    />
                </section>
            );

        case "research":
            return (
                <section className="max-w-5xl mx-auto py-16">
                    {/*line*/}
                    <hr className="border-t border-gray-400 max-w-7xl mx-auto my-12"/>
                    {section.researchtitel && <h1 className="text-3xl font-bold mb-8">{section.researchtitel}</h1>}
                    <p className="text-gray-700 mb-10">{section.content}</p>
                </section>
            );

        case "inspiration":
            return (
              <section className="max-w-5xl mx-auto py-16">
                  {/*line*/}
                  <hr className="border-t border-gray-400 max-w-7xl mx-auto my-12"/>
                  {section.inspirationtitel && <h1 className="text-3xl font-bold mb-8">{section.inspirationtitel}</h1>}
                  <p className="text-gray-700 mb-10">{section.content}</p>
                  <div className="grid grid-cols-1 gap-10 py-16">
                      {section.images?.map((img, i) => (
                          <Image key={i}
                                 src={img.src}
                                 alt={img.alt ?? ""}
                                 width={1024}
                                 height={600}
                                 className="max-h-[600px] mx-auto block object-cover"/>
                      ))}
                  </div>
              </section>
            );

        case "ideate":
            return (
                <section className="max-w-5xl mx-auto py-16">
                    {/*line*/}
                    <hr className="border-t border-gray-400 max-w-7xl mx-auto my-12"/>
                    {section.ideatetitel && <h1 className="text-3xl font-bold mb-8">{section.ideatetitel}</h1>}
                    <p className="text-gray-700 mb-10">{section.content}</p>
                    <div className="grid grid-cols-1 gap-10 py-16">
                        {section.images?.map((img, i) => (
                            <Image key={i}
                                   src={img.src}
                                   alt={img.alt ?? ""}
                                   width={1024}
                                   height={600}
                                   className="max-h-[600px] mx-auto block object-cover"/>
                        ))}
                    </div>
                </section>
            );
    }
}
