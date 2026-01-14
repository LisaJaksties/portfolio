type ProblemSectionProps = {
    problem_description: string;
    solution_description: string;
    type: string;
    tasks: string[];
    tools: string[];
};


export default function ProblemSection({problem_description,solution_description,type,tasks,tools}:ProblemSectionProps) {
    return (
        <section className="pt-24 pb-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
                <div className="p-8 text-start ">
                    <h3 className="text-2xl font-medium mb-4">Problem</h3>
                    <p className="text-sm text-gray-700"> {problem_description}</p>
                    <h3 className="text-2xl font-medium mt-16 mb-4">Solution</h3>
                    <p className="text-sm text-gray-700">{solution_description}</p>
                </div>

                <div className="bg-orange-50 p-8 pt-10 pb-10 shadow-md">

                    <div className="grid grid-cols-2 gap-y-4 p-4">
                        {/* TYPE */}
                        <p className="text-start font-bold">Project Type</p>
                        <p className="text-start text-sm text-gray-700">{type}</p>

                        {/* TASKS */}
                        <p className="text-start font-bold">Tasks</p>
                        <div className="text-start space-y-1 text-sm text-gray-700">
                            {tasks?.join(", ")}
                        </div>

                        {/* TOOLS */}
                        <p className="text-start font-bold">Tools</p>
                        <div className="text-start space-y-1 text-sm text-gray-700">
                            {tools?.join(", ")}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}