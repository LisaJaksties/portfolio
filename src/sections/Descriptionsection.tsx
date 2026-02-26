import {soligant} from "@/fonts/soligant";

type Descriptionprops= {
    title: string;
    description: string;
}

export default function Descriptionsection({title, description}: Descriptionprops) {
    return (
        <div className="pt-10 md:pt-24 pb-24">
            <h1 className={`${soligant.className} text-secondaryverydark mb-8 text-5xl md:text-[10vw]`}>{title}</h1>
            <p className="text-text m-2 text-2xl">{description}</p>
        </div>

    );
}