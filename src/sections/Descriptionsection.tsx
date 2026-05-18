import {soligant} from "@/fonts/soligant";
import FadeIn from "@/components/FadeIn";
import SlideUp from "@/components/SlideUp";

type Descriptionprops= {
    id:string;
    title: string;
    description: string;
}

export default function Descriptionsection({id,title, description}: Descriptionprops) {
    return (
        <div id={id} className="pt-10 md:pt-24 pb-24">
            <SlideUp y={60} delay={0.1} duration={1.2}>
            <FadeIn>
            <h1 className={`${soligant.className} text-secondaryverydark mb-8 px-4 mb:px-0 text-7xl md:text-[10vw]`}>{title}</h1>
            </FadeIn>
            <FadeIn>
            <p className="text-text px-4 mb:px-0 text-md md:text-2xl">{description}</p>
            </FadeIn>
            </SlideUp>
        </div>

    );
}