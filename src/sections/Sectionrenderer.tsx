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
                        <h2 className={`${soligant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-7xl`}>{section.designsystemname}</h2>}
                    <p className="max-w-6xl mx-auto  text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide" >
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

        case "discover":
            return (
                <section className="py-40 bg-accent">
                    <div className="max-w-7xl mx-auto">
                    {section.discovertitel &&
                        <h2 className={`${soligant.className} text-primary px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.discovertitel}</h2>}
                    <p className="max-w-4xl mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-60 text-justify leading-relaxed tracking-wide">{section.content}</p>

                        {section.stakeholdertitel && <h3 className="text-3xl md:text-5xl text-text mb-20">{section.stakeholdertitel}</h3>}
                        {section.stakeholders && (
                            <div className={`grid gap-8 ${
                                section.stakeholders.length === 1
                                    ? "grid-cols-1 max-w-3xl mx-auto place-items-center" 
                                    : "grid-cols-1 md:grid-cols-2"
                            } place-items-center bg-background/60 shadow-xl rounded-3xl p-8`}>
                                {section.stakeholders.map((stakeholder, index) => (
                                    <div key={index} className={`p-8`}>

                                        <h4 className="text-2xl md:text-4xl text-primary font-semibold mb-3">
                                            {stakeholder.name}
                                        </h4>

                                        {stakeholder.role && (
                                            <p className="text-md md:text-lg text-text/80">
                                                {stakeholder.role}
                                            </p>
                                        )}
                                        <hr className="border-t border-primary mx-auto my-6"/>

                                        <p className="text-md md:text-lg text-text mb-8 text-justify">{stakeholder.description}</p>

                                        {stakeholder.goals && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 text-md md:text-lg text-text">
                                                {stakeholder.goals.map((goal, i) => (
                                                    <li key={i}>{goal}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.personas &&(
                            <div className="mx-auto">
                                {section.personas.map((personas, index) => (
                                    <div key={index} className={`pt-60 p-8`}>
                                        <h3 className="text-3xl md:text-5xl text-text mb-20"> {personas.name}</h3>
                                        <p className="text-md md:text-lg text-text mb-8 text-justify">{personas.description}</p>
                                        <div className="grid grid-cols-1 gap-30 py-20">
                                            {personas.images?.map((img, i) => (
                                                <Image key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[600px] mx-auto block object-cover"/>
                                            ))}
                                        </div>
                                    </div>

                                ))}

                            </div>
                        )}
                    </div>
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

        case "define":
            return (
                <section className="max-w-7xl mx-auto py-40">

                    {section.definetitel && <h2 className={`${soligant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-7xl`}>{section.definetitel}</h2>}
                    <p className="max-w-4xl mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide">{section.content}</p>
                    {section.site_map &&(
                        <div className="mx-auto">
                            {section.site_map.map((site_map, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {site_map.name}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-20 pb-20 justify-content-center mx-auto">
                                        <p className="text-md md:text-lg text-text mb-8 text-justify">{site_map.description}</p>

                                        <Image
                                            src={site_map.image.src}
                                            alt={site_map.image.alt ?? ""}
                                            width={1024}
                                            height={600}
                                            className="max-h-[600px] mx-auto block object-cover"
                                        />


                                    </div>
                                </div>

                            ))}

                        </div>
                    )}
                </section>
            );
    }
}
