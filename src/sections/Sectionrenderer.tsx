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
                    <p className="max-w-6xl mx-auto  font-light text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide" >
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
                <section className="py-40 rounded-t-full bg-accent">
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

                                        <p className="text-md md:text-lg font-light text-text mb-8 text-justify">{stakeholder.description}</p>

                                        {stakeholder.goals && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
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
                                        <p className="md:max-w-5xl font-light mx-auto text-md md:text-lg text-text mb-8 text-justify">{personas.description}</p>
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
                  <p className="text-gray-700 font-light mb-10">{section.content}</p>
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
                    <p className="text-gray-700 font-light mb-10">{section.content}</p>
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

                    {section.definetitel && <h2 className={`${soligant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.definetitel}</h2>}
                    <p className="max-w-4xl mx-auto font-light text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide">{section.content}</p>

                    {section.site_map &&(
                        <div className="mx-auto">
                            {section.site_map.map((site_map, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {site_map.name}</h3>
                                    <div className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 space-x-10 pb-20 justify-content-center mx-auto">
                                        <p className="text-md md:text-lg text-text mb-8 font-light text-justify">{site_map.description}</p>

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

                    {section.task_flow &&(
                        <div className="mx-auto">
                            {section.task_flow.map((task_flow, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {task_flow.name}</h3>

                                    <div className="md:max-w-5xl mx-auto">
                                    <p className="text-md md:text-lg text-text font-light mb-14 text-justify tracking-wide">{task_flow.description}</p>
                                    <p className="text-md md:text-lg text-text/70 font-semibold mb-8 text-justify tracking-wide">{task_flow.task_flow_titel}</p>
                                    </div>
                                    <Image
                                        src={task_flow.image.src}
                                        alt={task_flow.image.alt ?? ""}
                                        width={1024}
                                        height={600}
                                        className="max-h-[600px] mx-auto block object-cover"
                                    />
                                </div>

                            ))}

                        </div>
                    )}

                    {section.lofi_wireframes &&(
                        <div className="mx-auto">
                            {section.lofi_wireframes.map((lofi_wireframes, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {lofi_wireframes.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{lofi_wireframes.description}</p>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 ">

                                        {lofi_wireframes.images?.map((img, i) => (
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
                </section>


            );

        case "develop":
            return (
                <section className="bg-accent rounded-t-full py-40">
                    <div className="max-w-7xl mx-auto">
                    {section.developtitel && <h2 className={`${soligant.className} text-primary px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.developtitel}</h2>}
                    <p className="max-w-4xl mx-auto font-light text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide">{section.content}</p>

                    {section.inspiration &&(
                        <div className="mx-auto">
                            {section.inspiration.map((inspiration, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {inspiration.name}</h3>
                                    <div className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 space-x-10 pb-20 justify-content-center mx-auto">
                                        <p className="text-md md:text-lg text-text mb-8 font-light text-justify">{inspiration.description}</p>

                                        <Image
                                            src={inspiration.image.src}
                                            alt={inspiration.image.alt ?? ""}
                                            width={1024}
                                            height={600}
                                            className="max-h-[600px] mx-auto block object-cover"
                                        />


                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.style_tile &&(
                        <div className="mx-auto">
                            {section.style_tile.map((style_tile, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {style_tile.name}</h3>

                                    <div className="md:max-w-5xl mx-auto">
                                        <p className="text-md md:text-lg text-text font-light mb-14 text-justify tracking-wide">{style_tile.description}</p>
                                    </div>
                                    <Image
                                        src={style_tile.image.src}
                                        alt={style_tile.image.alt ?? ""}
                                        width={1024}
                                        height={600}
                                        className="max-h-[600px] mx-auto block object-cover"
                                    />
                                </div>

                            ))}

                        </div>
                    )}

                    {section.ui_kit &&(
                        <div className="mx-auto">
                            {section.ui_kit.map((ui_kit, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {ui_kit.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{ui_kit.description}</p>
                                    <Image
                                        src={ui_kit.image.src}
                                        alt={ui_kit.image.alt ?? ""}
                                        width={1024}
                                        height={600}
                                        className="max-h-[600px] mx-auto block object-cover"
                                    />
                                </div>

                            ))}

                        </div>
                    )}

                    {section.final_design &&(
                        <div className="mx-auto">
                            {section.final_design.map((final_design, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {final_design.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{final_design.description}</p>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10 pb-20 ">

                                        {final_design.images?.map((img, i) => (
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
    }
}
