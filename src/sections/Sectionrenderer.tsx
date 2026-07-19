
import Image from "next/image";
import { Section } from "@/types/section";
import FadeIn from "../components/FadeIn";
import SlideUp from "../components/SlideUp";
import Link from "next/link";
import Imageview from "@/components/Imageview";
import {Oooh_Baby} from "next/font/google";
import { cormorant } from "@/fonts/cormorant";
import Video from "@/components/Video";

const ooohBaby = Oooh_Baby({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});


export function SectionRenderer({ section }: { section: Section }) {

    switch (section.type) {
        case "design-system":
            return (
                <section id={section.type} className="max-w-7xl mx-auto px-6 md:px-0 py-10">

                    <FadeIn>
                    {section.designsystemname &&
                        <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-7xl`}>{section.designsystemname}</h2>}
                    </FadeIn>
                    <FadeIn>
                        <p className="max-w-6xl mx-auto  font-light text-text/80 text-md md:text-xl mb-10 text-justify leading-relaxed tracking-wide" >
                        {section.designsystemdescription}
                    </p>
                    </FadeIn>
                    <SlideUp>
                    <Imageview
                        src={section.image ?? ""}
                        alt={section.image ?? ""}
                        width={1024}
                        height={384}
                        className="w-full max-h-[600px] mx-auto block object-contain"
                    />
                    </SlideUp>
                </section>
            );

        case "research-brand-personality":
            return (
                <section id={section.type} className="max-w-6xl mx-auto px-6 md:px-0 py-10 md:py-20">
                    <FadeIn>
                        {section.name &&
                            <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-7xl`}>
                                {section.name}
                            </h2>}
                    </FadeIn>
                    <FadeIn>
                        <p className="font-light text-text/80 text-md md:text-xl mb-20 text-justify leading-relaxed tracking-wide">
                            {section.description}
                        </p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-lg md:text-xl font-semibold text-text mb-5">
                            {section.questiongoal}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-20 text-md md:text-lg font-light text-text/80 text-justify">
                            {section.answergoal}</p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-lg md:text-xl font-semibold text-text mb-5">
                            {section.questiontarget}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-20 text-md md:text-lg font-light text-text/80 text-justify">
                            {section.answertarget}</p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-lg md:text-xl font-semibold text-text mb-5">
                            {section.questionspecial}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-20 text-md md:text-lg font-light text-text/80 text-justify">
                            {section.answerspecial}</p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-lg md:text-xl font-semibold text-text mb-5">
                            {section.questionpersonality}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-center mb-20 text-md md:text-lg font-light text-text/80">
                            {section.answerpersonality}</p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-lg md:text-xl font-semibold text-text mb-5">
                            {section.questionstory}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-center text-md md:text-lg font-light text-text/80 text-justify">
                            {section.answerstory}</p>
                    </FadeIn>
                </section>
            );

        case "concept-development":
            return (
                <section id={section.type} className="max-w-6xl px-6 md:px-0 mx-auto py-10 md:py-20">
                    <FadeIn>
                        {section.name &&
                            <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-7xl`}>
                                {section.name}
                            </h2>}
                    </FadeIn>
                    <FadeIn>
                        <p className="font-light text-text/80 text-md md:text-xl mb-10 text-justify leading-relaxed tracking-wide">
                            {section.description}
                        </p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-3xl md:text-5xl text-text mb-8">
                            {section.moodboard}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-10 text-md md:text-lg font-light text-text text-justify">
                            {section.moodboarddescription}</p>
                    </FadeIn>

                    <div className="grid grid-row-1 md:grid-cols-2 gap-6 md:gap-8 md:py-10 mb-20">
                        {section.moodimages?.map((img, i) => (
                            <Imageview key={i}
                                       src={img.src}
                                       alt={img.alt ?? ""}
                                       width={1024}
                                       height={600}
                                       className="max-h-[600px] mx-auto block object-contain"
                            />
                        ))}
                    </div>

                    <FadeIn>
                        <p className="text-center text-3xl md:text-5xl text-text mb-10">
                            {section.language}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-20 text-md md:text-lg font-light text-text text-justify">
                            {section.languageideation}</p>
                    </FadeIn>

                    <FadeIn>
                        <p className="text-center text-3xl md:text-5xl text-text mb-10">
                            {section.visuals}</p>
                    </FadeIn>
                    <FadeIn>
                        <p className="mb-10 text-md md:text-lg font-light text-text text-justify">
                            {section.visualsdescription}</p>
                    </FadeIn>

                    <div className="grid grid-row-1 md:grid-cols-2 gap-6 md:gap-8">
                        {section.visualsimages?.map((img, i) => (
                            <Imageview key={i}
                                       src={img.src}
                                       alt={img.alt ?? ""}
                                       width={1024}
                                       height={600}
                                       className="max-h-[600px] mx-auto block object-contain"
                            />
                        ))}
                    </div>


                </section>
            );

        case "visual-identity":
            return (
                <section id={section.type} className="max-w-6xl px-6 md:px-0 mx-auto py-10 md:py-20">
                    <FadeIn>
                        {section.name &&
                            <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-7xl`}>
                                {section.name}
                            </h2>}
                    </FadeIn>
                    <FadeIn>
                        <p className="font-light text-text/80 text-md md:text-xl mb-10 text-justify leading-relaxed tracking-wide">
                            {section.description}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 gap-6 md:gap-8 ">
                        {section.images?.map((img, i) => (
                            <Imageview key={i}
                                       src={img.src}
                                       alt={img.alt ?? ""}
                                       width={1024}
                                       height={600}
                                       className="max-h-[600px] mx-auto block object-contain"
                            />
                        ))}
                    </div>
                </section>
            );

        case "application":
            return (
                <section id={section.type} className="max-w-6xl px-6 md:px-0 mx-auto py-10 md:py-20">
                    <FadeIn>
                        {section.name &&
                            <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-7xl`}>
                                {section.name}
                            </h2>}
                    </FadeIn>
                    <FadeIn>
                        <p className="font-light text-text/80 text-md md:text-xl mb-10 text-justify leading-relaxed tracking-wide">
                            {section.description}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 gap-6 md:gap-8">
                        {section.images?.map((img, i) => (
                            <Imageview key={i}
                                       src={img.src}
                                       alt={img.alt ?? ""}
                                       width={1024}
                                       height={600}
                                       className="max-h-[600px] mx-auto block object-contain"
                            />
                        ))}
                    </div>

                    {section.iteration && (
                        <div className="mx-auto">
                            {section.iteration.map((iteration, index) => (
                                <div key={index} className={`pt-20`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {iteration.name}</h3>

                                    <div className="md:max-w-5xl mx-auto">
                                        <p className="text-md md:text-lg text-text/80 mb-4 md:mb-10 font-light text-justify">{iteration.description}</p>
                                        {iteration.revisions && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {iteration.revisions.map((revision, i) => (
                                                    <li key={i}>{revision}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">

                                        {iteration.images?.map((img, i) => (
                                            <Imageview key={i}
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

        case "discover":
            return (
                <section id={section.type} className="px-6 md:px-0 py-10">
                    <div className="max-w-6xl mx-auto">
                        <FadeIn>
                            {section.discovertitel &&
                                <h2 className={`${cormorant.className} mx-auto text-secondaryverydark mb-20 text-5xl md:text-8xl`}>{section.discovertitel}</h2>}
                        </FadeIn>
                        <FadeIn>
                            <p className="font-light text-text/80 text-md md:text-xl mb-20 text-justify leading-relaxed tracking-wide">{section.content}</p>
                        </FadeIn>

                        {section.researchplan && (
                            <div className="md:max-w-5xl mx-auto pt-10 md:pt-20">
                                {section.researchplan.map((researchplan, index) => (
                                    <div key={index}>
                                        <FadeIn>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20">
                                            {researchplan.name}
                                        </h3>
                                        </FadeIn>

                                        <FadeIn>
                                        <p className="text-md md:text-lg font-light text-text/80 mb-10 text-justify">
                                            {researchplan.description}</p>
                                        </FadeIn>

                                        {researchplan.questions && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {researchplan.questions.map((question, i) => (
                                                    <li key={i}>{question}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.questiongoal}</p>
                                        </FadeIn>
                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.answergoal}</p>
                                        </FadeIn>

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.questiontarget}</p>
                                        </FadeIn>
                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.answertarget}</p>
                                        </FadeIn>

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.questionspecial}</p>
                                        </FadeIn>
                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-8 text-justify">
                                                {researchplan.answerspecial}</p>
                                        </FadeIn>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.culturaldimensions && (
                            <div className="md:max-w-5xl mx-auto pt-10 md:pt-20">
                                {section.culturaldimensions.map((culturaldimensions, index) => (
                                    <div key={index}>
                                        <FadeIn>
                                            <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20">
                                                {culturaldimensions.name}
                                            </h3>
                                        </FadeIn>

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-10 text-justify">
                                                {culturaldimensions.description}</p>
                                        </FadeIn>

                                        <SlideUp>
                                            {culturaldimensions.table && (
                                                <Image
                                                    src={culturaldimensions.table.src}
                                                    alt={culturaldimensions.table.alt ?? ""}
                                                    width={1200}
                                                    height={600}
                                                    className="max-h-[600px] mx-auto block object-cover mb-20"/>
                                            )}
                                        </SlideUp>

                                        {culturaldimensions.dimensions?.map ((dimension, index) => (
                                                <div key={index} className={`pt-10 md:pt-20`}>
                                                    <h4 className="max-w-3xl mx-auto text-xl md:text-2xl text-secondarydark border-2 border-secondarydark p-3 font-semibold mb-5">
                                                        {dimension.name}
                                                    </h4>
                                                    <div
                                                        className="md:grid hidden grid-cols-2 text-justify gap-8 mx-auto max-w-3xl ">
                                                        <div
                                                            className="grid grid-rows-2 font-bold text-secondaryverydark text-center gap-10">
                                                            <p>{dimension.country1}</p>
                                                            <p>{dimension.country2}</p>
                                                        </div>
                                                        <div className="grid grid-rows-2 gap-10 font-light text-text">
                                                            <p>{dimension.description1}</p>
                                                            <p>{dimension.description2}</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="md:hidden grid-cols-2 font-light text-justify gap-8 mx-auto max-w-3xl ">

                                                        <p className="font-bold text-secondaryverydark mb-5 text-center">{dimension.country1}</p>
                                                        <p className="text-justify mb-10 font-light text-text">{dimension.description1}</p>
                                                        <p className="font-bold text-secondaryverydark mb-5 text-center">{dimension.country2}</p>
                                                        <p className="text-justify mb-10 font-light text-text">{dimension.description2}</p>

                                                    </div>
                                                </div>
                                            )
                                        )}

                                    </div>
                                ))}
                            </div>
                        )}

                        {section.websitecasestudy && (
                            <div className="md:max-w-5xl mx-auto pt-10 md:pt-20">
                                {section.websitecasestudy.map((culturaldimensions, index) => (
                                    <div key={index}>
                                        <FadeIn>
                                            <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20">
                                                {culturaldimensions.name}
                                            </h3>
                                        </FadeIn>

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-10 text-justify">
                                                {culturaldimensions.description}</p>
                                        </FadeIn>

                                        {culturaldimensions.dimensions?.map ((dimension, index) => (
                                                <div key={index} className={`md:border-b md:mb-10`}>
                                                    <h4 className="max-w-3xl mx-auto text-xl md:text-2xl text-secondarydark border-2 border-secondarydark p-3 font-semibold mb-5">
                                                        {dimension.name}
                                                    </h4>
                                                    <div
                                                        className="md:grid hidden grid-cols-2 text-justify gap-8 mx-auto max-w-3xl ">
                                                        <div
                                                            className="grid grid-rows-2 font-bold text-secondaryverydark text-center gap-10">
                                                            <p>{dimension.country1}</p>
                                                            <p>{dimension.country2}</p>
                                                        </div>
                                                        <div className="grid grid-rows-2 font-light text-text gap-10">
                                                            <p>{dimension.description1}</p>
                                                            <p>{dimension.description2}</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="md:hidden grid-cols-2 text-justify gap-8 mx-auto max-w-3xl pb-10 ">

                                                        <p className="font-bold text-secondaryverydark mb-5 text-center">{dimension.country1}</p>
                                                        <p className="text-justify mb-10 font-light text-text">{dimension.description1}</p>
                                                        <p className="font-bold text-secondaryverydark mb-5 text-center">{dimension.country2}</p>
                                                        <p className="text-justify mb-10 font-light text-text">{dimension.description2}</p>

                                                    </div>
                                                </div>
                                            )
                                        )}

                                    </div>
                                ))}
                            </div>
                        )}

                        {section.interview && (
                            <div className="md:max-w-5xl mx-auto pt-20">
                                {section.interview.map((interview, index) => (
                                    <div key={index}>
                                        <FadeIn>
                                            <h3 className="text-3xl md:text-5xl text-text mb-20">
                                                {interview.name}
                                            </h3>
                                        </FadeIn>

                                        <FadeIn>
                                            <p className="text-md md:text-lg font-light text-text/80 mb-20 text-justify">
                                                {interview.description}</p>
                                        </FadeIn>

                                        {interview.quote && (
                                            <ul className="text-left space-y-3 font-light text-md md:text-lg ">
                                                {interview.quote.map((quote, i) => (

                                                    <div key={i} className="">
                                                        <p className={`${ooohBaby.className} text-center max-w-3xl mx-auto text-primary mb-1 text-xl md:text-3xl`}>{quote.quote}</p>
                                                        <p className="max-w-3xl text-center mx-auto mb:px-0 mb-8 text-sm md:text-lg text-text font-semibold">{quote.culture}</p>
                                                        <p className="max-w-3xl text-justify text-center  mx-auto mb:px-0 mb-20 text-md md:text-xl text-text/80">{quote.insights}</p>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}


                                    </div>
                                ))}
                            </div>
                        )}

                        <FadeIn>
                            {section.stakeholdertitel &&
                                <h3 className="text-3xl md:text-5xl text-text mb-20">{section.stakeholdertitel}</h3>}
                        </FadeIn>
                        <FadeIn>
                            {section.stakeholders && (
                                <div className={`grid gap-8 ${
                                    section.stakeholders.length === 1
                                        ? "grid-cols-1 max-w-3xl mx-auto place-items-center"
                                        : "grid-cols-1 md:grid-cols-2"
                                } place-items-center bg-accent shadow-xl rounded-3xl md:p-8`}>
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
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {stakeholder.goals.map((goal, i) => (
                                                    <li key={i}>{goal}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        </FadeIn>

                        <FadeIn>
                        {section.competitiveAnalysisTitel && <h3 className="text-3xl md:text-5xl text-text py-20">
                            {section.competitiveAnalysisTitel}</h3>}
                        </FadeIn>
                        <FadeIn>
                            {section.competitorAnalysisDescription && <p className="text-md md:max-w-5xl mx-auto md:text-lg font-light text-text mb-10 text-justify">
                                {section.competitorAnalysisDescription}</p>}
                        </FadeIn>

                            {section.competitor && (
                            <div className={`grid bg-background rounded-3xl max-w-5xl mx-auto place-items-start gap-20 md:gap-8 ${
                                section.competitor.length === 1
                                    ? "grid-cols-1 max-w-3xl mx-auto place-items-center"
                                    : "grid-cols-1 md:grid-cols-3"
                            } place-items-center `}>

                                {section.competitor.map((competitor, index) => (
                                        <div key={index} className={`md:p-8`}>

                                        <h4 className="text-xl md:text-2xl bg-background text-secondarydark border-2 border-secondarydark p-3 font-semibold mb-5">
                                            {competitor.name}
                                        </h4>

                                        {competitor.picture && (
                                            <Image
                                                   src={competitor.picture.src}
                                                   alt={competitor.picture.alt ?? ""}
                                                   width={250}
                                                   height={100}
                                                   className="w-full md:h-20 mx-auto block object-cover"/>
                                        )}

                                        <p className="mt-5 md:mt-10 text-text text-lg md:text-xl font-semibold text-start mb-2 ">Strengths</p>
                                        {competitor.strength && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text">
                                                {competitor.strength.map((strength, i) => (
                                                    <li key={i}>{strength}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <p className="mt-5 md:mt-10 text-text text-lg md:text-xl font-semibold text-start mb-2">Weaknesses</p>
                                        {competitor.weakness && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text ">
                                                {competitor.weakness.map((weakness, i) => (
                                                    <li key={i}>{weakness}</li>
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
                                    <div key={index} className={`pt-20`}>
                                        <FadeIn>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20"> {personas.name}</h3>
                                        </FadeIn>
                                        <FadeIn>
                                            <p className="md:max-w-5xl font-light mx-auto text-md md:text-lg text-text mb-8 text-justify">{personas.description}</p>
                                        </FadeIn>
                                            <div className="grid grid-cols-1 gap-10">
                                            {personas.images?.map((img, i) => (
                                                <Imageview key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[600px] mx-auto block object-contain"
                                                />
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
                <section id={section.type} className="max-w-5xl mx-auto py-16">
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
                <section id={section.type} className="max-w-5xl mx-auto py-16">
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
                <section id={section.type} className="max-w-6xl mx-auto px-6 md:px-0 py-10 md:py-20">
                   <FadeIn>
                    {section.definetitel && <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-8xl`}>{section.definetitel}</h2>}
                   </FadeIn>
                    <FadeIn>
                    <p className="font-light text-text/80 text-md md:text-xl text-justify leading-relaxed tracking-wide">{section.content}</p>
                    </FadeIn>
                    {section.site_map &&(
                        <div className="mx-auto">
                            {section.site_map.map((site_map, index) => (
                                <div key={index} className={`pt-20 text-center mx-auto`}>
                                    <FadeIn>
                                    <h3 className="text-3xl md:text-5xl text-text md:mb-20  mb-10"> {site_map.name}</h3>
                                    </FadeIn>
                                    <div className="md:max-w-5xl mx-auto justify-content-center">
                                        <FadeIn>
                                            <p className="text-md md:text-lg text-text mb-8 font-light text-justify ">{site_map.description}</p>
                                        </FadeIn>

                                        <div
                                            className={`grid grid-cols-1  gap-3
                                                            ${site_map.images?.length === 1
                                                            ? "md:grid-cols-1"
                                                            : "md:grid-cols-2"} 
                                                         `}>


                                            {site_map.images?.map((img, i) => (
                                                    <Imageview key={i}
                                                               src={img.src}
                                                               alt={img.alt ?? ""}
                                                               width={1024}
                                                               height={600}
                                                               className="max-h-[600px] mx-auto block object-contain"/>
                                            ))}


                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.task_flow && (
                        <div className="mx-auto">
                            {section.task_flow.map((task_flow, index) => (
                                <div key={index} className={`pt-20`}>
                                    <FadeIn>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {task_flow.name}</h3>
                                    </FadeIn>

                                    <div className="md:max-w-5xl mx-auto">
                                        <FadeIn>
                                            <p className="text-md md:text-lg text-text/80 mb-10 font-light  text-justify tracking-wide">
                                                {task_flow.description}</p>
                                        </FadeIn>
                                        <FadeIn delay={0.4}>
                                            <p className="text-md md:text-lg text-text/70 font-semibold mb-10 text-justify tracking-wide">
                                                {task_flow.task_flow_titel}</p>
                                        </FadeIn>
                                        </div >

                                    <div className={`md:max-w-5xl mx-auto grid grid-cols-1  gap-3
                                                            ${task_flow.images?.length === 1
                                        ? "md:grid-cols-1"
                                        : "md:grid-cols-2"} 
                                                         `}>
                                    {task_flow.images?.map((img, i) => (
                                        <Imageview key={i}
                                               src={img.src}
                                               alt={img.alt ?? ""}
                                               width={1024}
                                               height={600}
                                               className="max-h-[1200px] mx-auto block object-contain"/>
                                    ))}
                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.feature_roadmap && (
                        <div className="mx-auto">
                            {section.feature_roadmap.map((feature_roadmap, index) => (
                                <div key={index} className={`pt-20`}>
                                    <FadeIn>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {feature_roadmap.name}</h3>
                                    </FadeIn>

                                    <FadeIn>
                                        <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text/80 font-light mb-10 text-justify tracking-wide">
                                            {feature_roadmap.description}</p>
                                    </FadeIn>

                                    <div className="md:max-w-5xl mx-auto grid grid-cols-1 gap-10">
                                        {feature_roadmap.images?.map((img, i) => (
                                            <Imageview key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[1200px] mx-auto block object-contain"/>
                                        ))}
                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.lofi_wireframes &&(
                        <div className="mx-auto">
                            {section.lofi_wireframes.map((lofi_wireframes, index) => (
                                <div key={index} className={`pt-20`}>
                                    <FadeIn>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {lofi_wireframes.name}</h3>
                                    </FadeIn>
                                    <FadeIn>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text/80 mb-10 font-light text-justify">{lofi_wireframes.description}</p>
                                    </FadeIn>
                                        <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-3
                                                    md:grid-cols-4
                                                    lg:grid-cols-5 gap-2 space-y-5 pb-20 place-items-start ">

                                        {lofi_wireframes.images?.map((img, i) => (
                                            <Imageview key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="md:max-h-[700px] h-78 mx-auto block object-cover
                                                   "/>
                                        ))}


                                    </div>
                                    <button
                                        type="button"
                                        className="place-items-center bg-accent rounded-3xl px-4 py-2 justify-center rounded
                                                    hover:bg-background hover:text-primary hover:border border-accent duration-300
                                                    hover:scale-108 md:hover:scale-110 hover:cursor-pointer transition ease-in-out"
                                    >
                                        See Figma File
                                    </button>
                                </div>

                            ))}

                        </div>
                    )}
                </section>


            );

        case "develop":
            return (
                <section id={section.type} className="px-6 md:px-0 py-20">
                    <div className="max-w-6xl mx-auto">
                        <FadeIn>
                        {section.developtitel &&
                            <h2 className={`${cormorant.className} text-secondaryverydark mb-20 text-5xl md:text-8xl`}>{section.developtitel}</h2>}
                        </FadeIn>
                        <FadeIn>
                            <p className="font-light text-text/80 text-md md:text-xl text-justify leading-relaxed tracking-wide">{section.content}</p>
                        </FadeIn>

                    {section.inspiration &&(
                        <div className="mx-auto">
                            {section.inspiration.map((inspiration, index) => (
                                <div key={index} className={`pt-10 md:pt-20`}>
                                    <FadeIn>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {inspiration.name}</h3>
                                    </FadeIn>

                                    <div className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:space-x-10 justify-content-center mx-auto">
                                        <FadeIn>
                                        <p className="text-md md:text-lg text-text/80 mb-10 md:mb-0 font-light text-justify">{inspiration.description}</p>
                                        </FadeIn>
                                        <SlideUp>
                                        <Imageview
                                            src={inspiration.image.src}
                                            alt={inspiration.image.alt ?? ""}
                                            width={1024}
                                            height={600}
                                            className="max-h-[600px] mx-auto block object-cover"
                                        />
                                        </SlideUp>

                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                    {section.style_tile &&(
                        <div className="mx-auto">
                            {section.style_tile.map((style_tile, index) => (
                                <div key={index} className={`pt-20`}>
                                    <FadeIn>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {style_tile.name}</h3>
                                    </FadeIn>

                                    <FadeIn>
                                        <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text font-light mb-14 text-justify tracking-wide">{style_tile.description}</p>
                                    </FadeIn>

                                    <div
                                        className={`md:max-w-5xl mx-auto gap-3 grid grid-cols-1
                                                            ${style_tile.images?.length === 1
                                            ? "md:grid-cols-1"
                                            : "md:grid-cols-2"} 
                                                         `}>

                                        {style_tile.images?.map((img, i) => (
                                            <Imageview key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[600px] mx-auto block object-contain"/>
                                        ))}


                                    </div>
                                </div>

                            ))}

                        </div>
                    )}

                        {section.ui_kit && (
                            <div className="mx-auto">
                                {section.ui_kit.map((ui_kit, index) => (
                                    <div key={index} className={`pt-20`}>
                                        <FadeIn>
                                            <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20"> {ui_kit.name}</h3>
                                        </FadeIn>
                                        <FadeIn>
                                            <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text/80 mb-8 font-light text-justify">{ui_kit.description}</p>
                                        </FadeIn>
                                        <div
                                            className={`md:max-w-5xl mx-auto gap-3 grid grid-cols-1
                                                            ${ui_kit.images?.length === 1
                                                ? "md:grid-cols-1"
                                                : "md:grid-cols-2"} 
                                                         `}>

                                            {ui_kit.images?.map((img, i) => (
                                                <Imageview key={i}
                                                           src={img.src}
                                                           alt={img.alt ?? ""}
                                                           width={1024}
                                                           height={600}
                                                           className="max-h-[600px] mx-auto block object-contain"/>
                                            ))}


                                        </div>
                                    </div>

                                ))}

                            </div>
                        )}

                        {section.prototypes && (
                            <div className="mx-auto">
                                {section.prototypes.map((prototypes, index) => (
                                    <div key={index} className={`pt-20`}>
                                        <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {prototypes.name}</h3>
                                        <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text/80 mb-10 font-light text-justify">{prototypes.description}</p>
                                        <div
                                            className="md:max-w-5xl mx-auto grid grid-cols-1 gap-3 md:gap-10 ">

                                        {prototypes.images?.map((img, i) => (
                                            <Imageview key={i}
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
                <section id={section.type} className="max-w-6xl mx-auto px-6 md:px-0 py-20">

                    {section.delivertitel && <h2 className={`${cormorant.className} text-secondaryverydark px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.delivertitel}</h2>}
                    <p className="font-light text-text/80 text-md md:text-xl mb-10 text-justify leading-relaxed tracking-wide">{section.content}</p>

                    {section.usability &&(
                        <div className="mx-auto">
                            {section.usability.map((usability, index) => (
                                <div key={index} className={`pt-20`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {usability.name}</h3>
                                    <div
                                        className="md:max-w-5xl pb-10 mx-auto">
                                        <p className="text-md md:text-lg text-text/80 mb-20 font-light text-justify">{usability.description}</p>

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mb-5">{usability.testobjectivestitel}</h4>
                                        {usability.testobjectives && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {usability.testobjectives.map((objective, i) => (
                                                    <li key={i}>{objective}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.taskstitel}</h4>
                                        {usability.tasks && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {usability.tasks.map((task, i) => (
                                                    <li key={i}>{task}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.outcomestitel}</h4>
                                        <p className="text-md md:text-lg text-text/80 font-light mb-14 text-justify tracking-wide">{usability.outcomes}</p>

                                        <h4 className="text-2xl md:text-4xl text-start text-secondarydark font-semibold mt-10 mb-3">{usability.insightstitel}</h4>
                                        {usability.insights && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {usability.insights.map((insight, i) => (
                                                    <li key={i}>{insight}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <div
                                            className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">

                                            {usability.images?.map((img, i) => (
                                                <Imageview key={i}
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
                                <div key={index} className={`pt-20`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {iteration.name}</h3>

                                    <div className="md:max-w-5xl mx-auto mb-10">
                                        <p className="text-md md:text-lg text-text/80 mb-4 md:mb-10 font-light text-justify">{iteration.description}</p>
                                        {iteration.revisions && (
                                            <ul className="text-left list-disc pl-10 space-y-3 font-light text-md md:text-lg text-text/80">
                                                {iteration.revisions.map((revision, i) => (
                                                    <li key={i}>{revision}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-3 md:gap-10 mb-10">

                                        {iteration.images?.map((img, i) => (
                                            <Imageview key={i}
                                                       src={img.src}
                                                       alt={img.alt ?? ""}
                                                       width={1024}
                                                       height={600}
                                                       className="max-h-[600px] mx-auto block object-cover"/>
                                        ))}


                                    </div>

                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-3 md:gap-10 ">

                                        {iteration.videos?.map((img, i) => (
                                            <Video key={i}
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
                                <div key={index} className={`pt-20`}>
                                    <h3 className="text-3xl md:text-5xl text-text mb-10 md:mb-20 "> {finaldesign.name}</h3>
                                    <p className="md:max-w-5xl mx-auto text-md md:text-lg text-text/80 mb-10 font-light text-justify">{finaldesign.description}</p>
                                    <div
                                        className="md:max-w-5xl mx-auto grid grid-cols-1 gap-3 md:gap-10 mb-10">

                                        {finaldesign.images?.map((img, i) => (
                                            <Imageview key={i}
                                                   src={img.src}
                                                   alt={img.alt ?? ""}
                                                   width={1024}
                                                   height={600}
                                                   className="max-h-[600px] mx-auto block object-cover"/>
                                        ))}


                                    </div>

                                    <Link href={`${finaldesign.link}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="group mx-auto flex flex-row items-center gap-3 w-fit pt-20"
                                    >
                                        <Image
                                            src="/Frame 1.png"
                                            alt="Flower"
                                            width={30}
                                            height={30}
                                            className="transition-all duration-300 ease-out  group-hover:scale-110 group-hover:rotate-30 group-active:scale-110 group-active:rotate-30 "
                                        />

                                        <p className="text-text text-sm md:text-lg font-light transition-all duration-300 ease-out group-hover:scale-105 group-hover:underline group-active:scale-105 group-active:underline">
                                            view final design
                                        </p>
                                    </Link>
                                </div>

                            ))}

                        </div>
                    )}
                </section>


            );

        case "reflection":
            return (
                <section id={section.type} className="py-20 md:py-40 px-6 md:px-0 rounded-t-full bg-accent">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                        {section.name &&
                            <h2 className={`${cormorant.className} text-primary px-4 mb:px-0 mb-20 text-5xl md:text-8xl`}>{section.name}</h2>}
                        </FadeIn>
                        <FadeIn>
                            <p className="max-w-4xl mx-auto text-text/80 font-light text-md md:text-xl mb-20 text-justify leading-relaxed tracking-wide">{section.description}</p>
                        </FadeIn>

                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                            <SlideUp>
                            <div className="md:max-w-fit ">
                                <h4 className="text-text mb-5 text-2xl md:text-4xl md:text-start font-semibold">{section.learnings1}</h4>
                                <p className="text-text/80 font-light text-md md:text-xl  text-justify leading-relaxed tracking-wide">{section.learnings1_text}</p>
                            </div>
                            </SlideUp>
                            <SlideUp>
                            <div className="md:max-w-fit">
                                <h4 className="text-text mb-5 text-2xl md:text-4xl md:text-start font-semibold">{section.learnings2}</h4>
                                <p className=" mx-auto text-text/80 font-light text-md md:text-xl text-justify leading-relaxed tracking-wide">{section.learnings2_text}</p>
                            </div>
                            </SlideUp>
                            <SlideUp>
                            <div className="md:max-w-fit">
                                <h4 className="text-text mb-5 text-2xl md:text-4xl md:text-start font-semibold">{section.learnings3}</h4>
                                <p className=" mx-auto text-text/80 font-light text-md md:text-xl text-justify leading-relaxed tracking-wide">{section.learnings3_text}</p>
                            </div>
                            </SlideUp>
                            <SlideUp>
                            <div className="md:max-w-fit">
                                <h4 className="text-text mb-5 text-2xl md:text-4xl md:text-start font-semibold">{section.learnings4}</h4>
                                <p className=" mx-auto text-text/80 font-light text-md md:text-xl text-justify leading-relaxed tracking-wide">{section.learnings4_text}</p>
                            </div>
                            </SlideUp>
                        </div>
                    </div>
                </section>

            );
    }
}


