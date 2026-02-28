type ProblemSectionProps = {
    problem_description: string;
    solution_description: string;
    type: string;
    tasks: string[];
    tools: string[];
};


export default function ProblemSection({problem_description,solution_description,type,tasks,tools}:ProblemSectionProps) {
    return (
        <section className="pt-24 pb-24 md:max-w-5xl mx-auto">
            <div className="hidden md:block md:grid grid-cols-2 gap-6">
                <div className="p-8 text-start">
                    <h3 className="text-4xl font-medium text-secondaryverydark mb-4">Problem</h3>
                    <p className="text-md text-text/80 mb-4 "> {problem_description}</p>
                    <h3 className="text-4xl font-medium text-secondaryverydark mb-4">Solution</h3>
                    <p className="text-md text-text/80">{solution_description}</p>
                </div>

                <div className=" p-8 pt-10 pb-10 bg-accent rounded-4xl shadow-xl">

                    <div className="text-text grid grid-cols-2 gap-y-4 p-4">
                        {/* TYPE */}
                        <p className="text-start font-bold">Project Type</p>
                        <p className="text-start text-sm text-text/80">{type}</p>

                        {/* TASKS */}
                        <p className="text-start font-bold">Tasks</p>
                        <div className="text-start space-y-1 text-sm text-text/80">
                            {tasks?.join(", ")}
                        </div>

                        {/* TOOLS */}
                        <p className="text-start font-bold">Tools</p>
                        <div className="text-start space-y-1 text-sm text-text/80">
                            {tools?.join(", ")}
                        </div>

                    </div>
                </div>
            </div>

            <div className="block md:hidden text-text">
                <div className="p-8 pb-20 text-start ">
                    <h3 className="text-3xl font-medium text-secondaryverydark mb-4">Problem</h3>
                    <p className="text-sm text-text/80 mb-4"> {problem_description}</p>
                    <h3 className="text-3xl font-medium text-secondaryverydark mb-4">Solution</h3>
                    <p className="text-sm text-text/80">{solution_description}</p>
                </div>

                <div className="p-3 ">
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
                </div>
            </div>
        </section>
    );
}