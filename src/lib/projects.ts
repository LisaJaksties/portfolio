export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
    address: string;
    problem_description: string;
    solution_description: string;
    type: string;
    tasks: string[];
    tools: string[];
};

export const projects: Project[] = [
    {
        slug: "portfolio-redesign",
        title: "Portfolio Redesign",
        description: "Ein modernes Redesign meiner Portfolioseite mit Tailwind & Next.js.",
        image: "/clover.jpg",
        date: "2025-08-10",
        address:"/",
        problem_description:"Die Problembeschreibung wird hier stehen.",
        solution_description:"Die Lösungsbeschreibung wird hier stehen.",
        type:"UX Design and Website Development",
        tasks: ["UI Design", "Prototyping", "Frontend Development"],
        tools: ["Adobe Photoshop", "Next.js", "TailwindCSS"]
    },
    {
        slug: "stay-a",
        title: "Stay A",
        description: "Ein Projekt zur Untersuchung der User Experience im internationalen Kontext.",
        image: "/clover.jpg",
        date: "2025-06-02",
        address:"https://stay-awind.vercel.app/en",
        problem_description:"Die Problembeschreibung wird hier stehen.",
        solution_description:"Die Lösungsbeschreibung wird hier stehen.",
        type:"UX Design and Website Development",
        tasks: ["Cross Cultural UX Research", "Usability Testing", "Database", "Front- and Backend Development"],
        tools: ["Adobe Photoshop", "Next.js", "TailwindCSS", "MongoDB"]
    },
];

/**export const getLatestProject = () =>
    projects.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
**/
export const getLatestProject = (count = 2) =>
    projects
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .slice(0, count);

export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug);
