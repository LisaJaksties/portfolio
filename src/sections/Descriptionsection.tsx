import {soligant} from "@/fonts/soligant";

type Descriptionprops= {
    title: string;
    description: string;
}

export default function Descriptionsection({title, description}: Descriptionprops) {
    return (
        <div className="pt-10 md:pt-24 pb-24">
            <h1 className={`${soligant.className} text-secondaryverydark mb-8 px-4 mb:px-0 text-7xl md:text-[10vw]`}>{title}</h1>
            <p className="text-text px-4 mb:px-0 text-md md:text-2xl">{description}</p>
        </div>

    );
}