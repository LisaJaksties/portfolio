import Image from "next/image";
import { Section } from "@/types/section";
import {soligant} from "@/fonts/soligant";
import ReactMarkdown from "react-markdown";
import Link from "next/link";


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

                    {section.prototypes &&(
                        <div className="mx-auto">
                            {section.prototypes.map((prototypes, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {prototypes.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{prototypes.description}</p>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10 pb-20 ">

                                        {prototypes.images?.map((img, i) => (
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

                        {section.prototypes &&(
                            <div className="mx-auto">
                                {section.prototypes.map((prototypes, index) => (
                                    <div key={index} className={`pt-60 p-8`}>
                                        <h3 className="text-3xl md:text-5xl text-primary mb-20 "> {prototypes.name}</h3>
                                        <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{prototypes.description}</p>
                                        <div
                                            className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10 pb-20 ">

                                            {prototypes.images?.map((img, i) => (
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

        case "deliver":
            return (
                <section className="max-w-7xl mx-auto py-40">

                    {section.delivertitel && <h2 className={`${soligant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.delivertitel}</h2>}
                    <p className="max-w-4xl mx-auto font-light text-text/80 text-md md:text-xl px-4 mb:px-0 mb-20 text-justify leading-relaxed tracking-wide">{section.content}</p>

                    {section.usability &&(
                        <div className="mx-auto">
                            {section.usability.map((usability, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {usability.name}</h3>
                                    <div
                                        className="md:max-w-5xl pb-20  mx-auto">
                                        <p className="text-md md:text-lg text-text mb-20 font-light text-justify">{usability.description}</p>

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mb-3">{usability.testobjectivestitel}</h4>
                                        {usability.testobjectives && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {usability.testobjectives.map((objective, i) => (
                                                    <li key={i}>{objective}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.taskstitel}</h4>
                                        {usability.tasks && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {usability.tasks.map((task, i) => (
                                                    <li key={i}>{task}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.outcomestitel}</h4>
                                        <p className="text-md md:text-lg text-text font-light mb-14 text-justify tracking-wide">{usability.outcomes}</p>

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.insightstitel}</h4>
                                        {usability.insights && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {usability.insights.map((insight, i) => (
                                                    <li key={i}>{insight}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <div
                                            className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10 pb-20 pt-20 ">

                                            {usability.images?.map((img, i) => (
                                                <Image key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[600px] mx-auto block object-cover"/>
                                            ))}


                                        </div>


                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.iteration && (
                        <div className="mx-auto">
                            {section.iteration.map((iteration, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {iteration.name}</h3>

                                    <div className="md:max-w-5xl mx-auto">
                                        <p className="text-md md:text-lg text-text mb-20 font-light text-justify">{iteration.description}</p>
                                        {iteration.revisions && (
                                            <ul className="text-left list-none md:list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {iteration.revisions.map((revision, i) => (
                                                    <li key={i}>{revision}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10 pt-20 pb-20 ">

                                        {iteration.images?.map((img, i) => (
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

                    {section.finaldesign && (
                        <div className="mx-auto">
                            {section.finaldesign.map((finaldesign, index) => (
                                <div key={index} className={`pt-60 p-8`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-20 "> {finaldesign.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text mb-8 font-light text-justify">{finaldesign.description}</p>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 ">

                                        {finaldesign.images?.map((img, i) => (
                                            <Image key={i}
                                                   src={img.src}
                                                   alt={img.alt ?? ""}
                                                   width={1024}
                                                   height={600}
                                                   className="max-h-[600px] mx-auto block object-cover"/>
                                        ))}


                                    </div>

                                    <Link href={`${finaldesign.link}`} target="_blank" rel="noreferrer">
                                        <p className="pt-8 hover:underline text-sm md:text-xl text-center items-center font-light">view final design</p>
                                    </Link>
                                </div>

                            ))}

                        </div>
                    )}
                </section>


            );

        case "reflection":
            return (
                <section className="py-40 rounded-t-full bg-accent">
                    <div className="max-w-7xl mx-auto">
                        {section.name &&
                            <h2 className={`${soligant.className} text-primary px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.name}</h2>}
                        <p className="max-w-4xl mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-60 text-justify leading-relaxed tracking-wide">{section.description}</p>

                        <div className=" max-w-4xl grid grid-cols-2 mx-auto gap-20">
                            <div>
                                <h3 className="text-3xl md:text-5xl text-text mb-5 ">{section.learnings1}</h3>
                                <p className="text-text/80 text-md md:text-xl px-4 mb:px-0 mb-10 text-justify leading-relaxed tracking-wide">{section.learnings1_text}</p>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl text-text mb-5 ">{section.learnings2}</h3>
                                <p className=" mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-10 text-justify leading-relaxed tracking-wide">{section.learnings2_text}</p>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl text-text mb-5 ">{section.learnings3}</h3>
                                <p className=" mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-10 text-justify leading-relaxed tracking-wide">{section.learnings3_text}</p>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl text-text mb-5 ">{section.learnings4}</h3>
                                <p className=" mx-auto text-text/80 text-md md:text-xl px-4 mb:px-0 mb-10 text-justify leading-relaxed tracking-wide">{section.learnings4_text}</p>
                            </div>

                        </div>
                    </div>
                </section>
            );
    }
}
