import SlideUp from "@/components/SlideUp";
import FadeIn from "@/components/FadeIn";

type ProblemSectionProps = {
    id: string;
    problem_description: string;
    challenge_description: string;
    solution_description: string;
    type: string;
    tasks: string[];
    tools: string[];
};


export default function ProblemSection({id,problem_description,challenge_description,solution_description,type,tasks,tools}:ProblemSectionProps) {
    return (
        <section id={id} className="py-10 md:py-24 md:max-w-6xl mx-auto">
            <div className="hidden md:block md:grid grid-cols-3 gap-6">
                <div className="col-span-2 p-8 text-start">
                    <SlideUp y={40} delay={0.1} duration={1.2}>
                    <h4 className="text-4xl font-medium text-secondaryverydark">Problem</h4>
                    </SlideUp>
                    <SlideUp y={40} delay={0.3} duration={1.2}>
                    <p className="text-md text-text/80 mb-4 text-justify"> {problem_description}</p>
                    </SlideUp>

                    <SlideUp y={40} delay={0.5} duration={1.2}>
                        <h4 className="text-4xl font-medium text-secondaryverydark">Challenge</h4>
                    </SlideUp>
                    <SlideUp y={40} delay={0.8} duration={1.2}>
                        <p className="text-md text-text/80 mb-4 text-justify"> {challenge_description}</p>
                    </SlideUp>

                    <SlideUp y={40} delay={1} duration={1.2}>
                    <h4 className="text-4xl font-medium text-secondaryverydark">Solution</h4>
                    </SlideUp>
                    <SlideUp y={40} delay={1.3} duration={1.2}>
                    <p className="text-md text-text/80 text-justify">{solution_description}</p>
                    </SlideUp>

                </div>


                <div className="col-span-1 p-4  bg-accent flex items-center rounded-4xl shadow-xl">
                    <FadeIn delay={1.2} duration={1.2}>
                    <div className="text-text grid grid-cols-2 gap-y-4 p-2">
                        {/* TYPE */}
                        <p className="text-start font-bold">Project Type</p>
                        <p className="text-start text-md text-text/80">{type}</p>

                        {/* TASKS */}
                        <p className="text-start font-bold">Tasks</p>
                        <div className="text-start space-y-1 text-md text-text/80">
                            {tasks?.join(", ")}
                        </div>

                        {/* TOOLS */}
                        <p className="text-start font-bold">Tools</p>
                        <div className="text-start space-y-1 text-md text-text/80">
                            {tools?.join(", ")}
                        </div>

                    </div>
                    </FadeIn >
                </div>
            </div>

            <div className="block md:hidden text-text">
                <div className="px-6 pb-10 text-start ">
                    <SlideUp y={40} delay={0.1} duration={1.2}>
                    <h3 className="text-3xl text-center font-medium text-secondaryverydark mb-4">Problem</h3>
                    </SlideUp>
                    <SlideUp y={40} delay={0.3} duration={1.2}>
                    <p className="text-sm text-text/80 mb-4 text-justify"> {problem_description}</p>
                    </SlideUp>

                    <SlideUp y={40} delay={0.5} duration={1.2}>
                        <h4 className="text-3xl text-center font-medium text-secondaryverydark mb-4">Challenge</h4>
                    </SlideUp>
                    <SlideUp y={40} delay={0.8} duration={1.2}>
                        <p className="text-sm text-text/80 mb-4 text-justify"> {challenge_description}</p>
                    </SlideUp>

                    <SlideUp y={40} delay={1} duration={1.2}>
                    <h3 className="text-3xl text-center font-medium text-secondaryverydark mb-4">Solution</h3>
                    </SlideUp>
                    <SlideUp y={40} delay={1.3} duration={1.2}>
                    <p className="text-sm text-text/80 text-justify">{solution_description}</p>
                    </SlideUp>
                </div>

                <div className="px-6 ">
                    <FadeIn delay={1.2} duration={1.2}>
                    <div className="bg-accent  pt-10 pb-10 shadow-xl rounded-4xl grid grid-cols-2 gap-y-4 p-5">
                        {/* TYPE */}
                        <p className="text-start text-sm font-bold">Project Type</p>
                        <p className="text-start text-sm text-text/80">{type}</p>

                        {/* TASKS */}
                        <p className="text-start text-sm font-bold">Tasks</p>
                        <div className="text-start space-y-1 text-sm text-text/80">
                            {tasks?.join(", ")}
                        </div>

                        {/* TOOLS */}
                        <p className="text-start text-sm font-bold">Tools</p>
                        <div className="text-start space-y-1 text-sm text-text/80">
                            {tools?.join(", ")}
                        </div>

                    </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}