
import FadeIn from "@/components/FadeIn";
import { cormorant } from "@/fonts/cormorant";

export default function Imprint(){
    return (
        <main>
            <FadeIn delay={0.2} duration={2}>
                <h1 className={`${cormorant.className} text-text text-7xl font-medium pt-20 pb-10 text-center`}>Imprint</h1>
            </FadeIn>
            <div className="text-text p-2 text-center md:text-start md:max-w-4xl mx-auto">

                <p className="text-lg md:text-2xl">
                    The operator of this website is
                </p>
                <p className="text-sm md:text-lg pt-3">
                    Lisa Choi
                </p>
                <p className="text-sm md:text-lg">
                    Kathrinhagener Straße 51 <br/>
                    31749 Auetal, Germany
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    e-mail:
                </p>
                <p className="text-sm md:text-lg pt-3">
                    huinya.illust@gmail.com
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    Responsible for the websites content according to § 18 Abs. 2 MStV:
                </p>

                <p className="text-sm md:text-lg pt-3">
                    Lisa Choi
                </p>

                <p className="text-lg md:text-2xl pt-8">
                    Copyright
                </p>

                <p className="text-sm md:text-lg pt-3">
                    The content and works on these pages created by the site operator are subject to German Copyright. The
                    duplication, processing, distribution and any kind of exploitation outside of the Limitations of
                    copyright require the written consent of the respective author or creator.
                </p>


            </div>
        </main>
    )
}