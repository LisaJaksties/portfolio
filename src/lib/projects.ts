import {Section} from "@/types/section";

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
    sections?: Section[];
};

export const projects: Project[] = [
    {
        slug: "portfolio-redesign",
        title: "Portfolio Redesign",
        description: "Ein modernes Redesign meiner Portfolioseite mit Tailwind & Next.js.",
        image: "/example.jpg",
        date: "2025-08-10",
        address:"/",
        problem_description:"Die Problembeschreibung wird hier stehen.",
        solution_description:"Die Lösungsbeschreibung wird hier stehen.",
        type:"UX Design and Website Development",
        tasks: ["UX/UI Design", "Branding", "Prototyping", "Frontend Development"],
        tools: ["Adobe Photoshop", "Adobe Illustrator", "Next.js", "TailwindCSS"],

        sections: [
            {
                type: "design-system",
                designsystemname: "Double Diamond Design Process Model",
                designsystemdescription:
                "The Double Diamond Model consists of four stages: Discover, Define, Develop and Deliver. " +
                    "The two diamonds symbolise two central thought processes: exploration and action. " +
                    "Exploration involves closely examining and perspectives broadening = divergent thinking. " +
                    "Action thinking focuses on exploration and consolidation of ideas = convergent thinking. " +
                    "The model enables flexible iterative development cycles that are strongly oriented towards user feedback and actual user needs.",
                image: "/clover.jpg"
            },
            {
                type:"discover",
                discovertitel: "Discover",
                stakeholdertitel: "Stakeholder and Business Goals",
                content: "The Discover Phase identifies and understands the existing problems. " +
                    "It involves speaking to and spending time with people who are affected by the issues. " +
                    "Understanding is created by asking questions. This way potential solutions can be formed.",
                stakeholders: [
                    {
                        name: "Myself",
                        role: "UX Designer and Illustrator",
                        description: "As the only stakeholder, I defined my business goals for the portfolio website.",
                        goals: ["more qualified recruiter and client requests", "interview invitations", "showcase skills and thinking process",
                        "convey my softskills (Reliability, Learnability, Adaptability, Patience, Conscientiousness) through design decisions"]
                    }
                ],
                personas:[
                    {
                        name:"User Personas",
                        description:"To make sure that my decisions moving forward in the process are user-centered, I wanted to have a clear understanding of who the users are. " +
                            "Using what I learned from the Stakeholder and Business goals, I created two user persona to represent who I will be designing for.",
                        images:[
                            {
                                src: "/clover.jpg",
                                alt: "Persona1"
                            },
                                {
                                    src: "/clover.jpg",
                                    alt: "Persona2"
                                }
                            ],
                    }
                ]

            },

            {
                type: "define",
                definetitel: "Define",
                content: "The insights gathered during the previous phase are the foundation to define the project goals. " +
                    "During the Define phase information is structured to create plans and lists that support a guided developing phase.",
                site_map: [
                    {
                        name: "Site Map",
                        description:"The Site Map visualizes how the information is categorized. " +
                            "The Hiring Manager needs to get a quick overview. Therefore the main navigation is kept simple with four main pages." +
                            "The Project Overview has subpages for the Project Detail Views. At the end of all pages the user will find a link to " +
                            "the contact pages so that a smooth transition between information collecting and getting into contact is possible. ",
                        image: {
                                src: "/clover.jpg",
                                alt: "siteMap"
                        },

                    }
                ]
            }
        ]

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
