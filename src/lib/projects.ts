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
        problem_description:"Recruiter need to scan my portfolio under time pressure and decide if my abilities and characteristics align with their expectations.",
        solution_description:"To support the decision making of the User, I developed a structured Portfolio Website with " +
            "introducing attention-catching homepage, clear information architecture, visual hierarchy and modular designed process oriented Case " +
            "studies to match individual project works.",
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
                        name: "Information architecture",
                        description:"The Site Map visualizes how the information is categorized. " +
                            "The Hiring Manager needs to get a quick overview. Therefore I kept the main navigation simple with four main pages. " +
                            "I created a project overview that has subpages for the project detail views. At the end of all pages the user will find a link to " +
                            "the contact page so that a smooth transition between information collecting and getting into contact is possible.",
                        image: {
                                src: "/clover.jpg",
                                alt: "siteMap"
                        },

                    }
                ],

                task_flow: [
                    {
                        name: "Task Flow",
                        description:"I had a clear idea of the architecture of the website. However, I wanted to continue to better" +
                            "understand how the user would be interacting with the kex pages and features on the website. " +
                            "Based on the users goals, I started identifying what key tasks the user would be trying to complete when landing " +
                            "on my homepage. Based on that I worked out specifications for the website that I need to design so that " +
                            "the user can complete the tasks with ease. Finally, I put myself into the users position understanding his " +
                            "interaction with the website by creating a task flow.",
                        task_flow_titel:"Recruiter wants to understand my design thinking approach and contact me.",
                        image: {
                            src: "/clover.jpg",
                            alt: "taskflow"
                        },

                    }
                ],

                lofi_wireframes: [
                    {
                        name: "Lofi Wireframe sketches",
                        description:"I used the insights gained from the user goals and his interactions with the website (task flow) " +
                            "to make informed decisions on how to sketch the 5 Key Screens: Home, Project Overview, Project Detail, About and Contact. The low fidelity wireframes " +
                            "show responsive designs adapted to Desktop screen and mobile screen size.",
                        images:[
                            {
                                src: "/clover.jpg",
                                alt: "wireframe1"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "wireframe2"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "wireframe3"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "wireframe4"
                            }
                        ],

                    }
                ]
            },

            {
                type: "develop",
                developtitel: "Develop",
                content: "After defining the problem and ideating solutions in the previous phase, the develop phase focuses on " +
                    "realising plans and ideas into design concepts and prototypes. It's an exploration process characterized by testing various " +
                    "approaches. ",

                inspiration: [
                    {
                        name: "Inspiration and Mood Board",
                        description:"Creating a Brand Identity for myself as a creative Professional was a very personal process. " +
                            "I wanted to reflect my identity in the design. Since I have a close connection to the asian in particular korean culture, " +
                            "I was thrilled to explore a branding that connects my german design thinking with the korean cultural influences. " +
                            "Starting by sketching logo ideas and comparing several color schemes, I visualized my inspiration in a mood board.",
                        image: {
                            src: "/clover.jpg",
                            alt: "inspiration"
                        },

                    }
                ],

                style_tile: [
                    {
                        name: "Style Tile",
                        description:"After designing my logo, I then started working on finalizing the visual identity and created a style tile.\n" +
                            "\n" +
                            "I focused on creating a balance between elegance and playfulness. The serif font for Headings creates an elegant feel. " +
                            "Combined with a minimal but bold color palette and a clean sans serif font for the content, it aligns with my " +
                            "goal of creating a clear visual hierarchy.",
                        image: {
                            src: "/clover.jpg",
                            alt: "stileTile"
                        },

                    }
                ],

                ui_kit: [
                    {
                        name: "UI Kit",
                        description:"Using the style tile as a guideline, I incorporated my branding into the UI elements. " +
                            "To ensure that the design standards remain coherent across future developments, I created a UI kit " +
                            "to document the elements for reference.",

                        image: {
                            src: "/clover.jpg",
                            alt: "uiKit"
                        },

                    }
                ],

                final_design: [
                    {
                        name: "Final Design and Website",
                        description:"The project is exceptional since I directly tested my ideas in code. The first prototype is a functional website " +
                            "developed with next.js, react and tailwind css. I used framer motion to create micro animations and smooth scroll effects to " +
                            "guide the user through the Portfolio page and evoke curiosity. " +
                            "",
                        link:"/",
                        images:[
                            {
                                src: "/clover.jpg",
                                alt: "prototype1"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "prototype2"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "prototype3"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "prototype4"
                            }
                        ],

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
