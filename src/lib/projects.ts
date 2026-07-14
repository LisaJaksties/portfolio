import {Section} from "@/types/section";

export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
    links: {
        label: string;
        url: string;
    }[];
    problem_description: string;
    challenge_description: string;
    solution_description: string;
    type: string;
    tasks: string[];
    tools: string[];
    sections?: Section[];
};

export const projects: Project[] = [
    {
        slug: "portfolio-redesign",
        title: "Portfolio",
        description: "A UX/UI and frontend portfolio project designed to present creative work through a clean and responsive user " +
            "experience. The website includes a complete UX case study and was developed using Next.js and Tailwind CSS.",
        image: "/Cover Portfolio.svg",
        date: "2026-05-30",
        links:[
            {
                label: "View Portfolio Website",
                url: "https://lisachoiportfolio.vercel.app/"
            }
        ],
        problem_description:"Recruiter need to be able to scan my portfolio in short time and decide if my abilities and characteristics align with their expectations.",
        challenge_description:"How to showcase my abilities and experiences? ",
        solution_description:"To support the decision making of the User, I developed a structured portfolio website with an" +
            "introducing attention-catching homepage, clear information architecture, visual hierarchy and modular designed process oriented case " +
            "studies to match individual project works.",
        type:"UX Design and website development",
        tasks: ["UX research", "UX/UI Design", "Branding", "Prototyping", "Usability Testing"],
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
                image: "/Double Diamond.png"
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
                        description: "As the main stakeholder, I defined my business goals for the portfolio website.",
                        goals: ["more qualified recruiter and client requests", "interview invitations", "showcase skills and thinking process",
                        "convey my softskills (Reliability, Learnability, Adaptability, Patience, Conscientiousness) through design decisions"]
                    }
                ],
                competitiveAnalysisTitel:"Competitive Analysis",
                competitorAnalysisDescription:"To get a better understanding of similar websites, " +
                    "I analyzed portfolio websites of UX designers. I pointed out strengths and weaknesses to guide " +
                    "my user personas development and determine ways to stand out.",
                competitor: [
                    {
                        name: "Celia Hazard",
                        picture:{
                            src: "/CeliaHazard.jpg",
                            alt: "competitor"
                        },
                        strength: ["outstanding introduction on the homepage", "list style project listing",
                            "critical reflection on almost each method as a dropdown note"],
                        weakness: ["images cannot be enlarged for better readability", "text and image alignment on the project page is sometimes off"],
                    },
                    {
                        name: "Jamie Choi",
                        picture:{
                            src: "/JamieChoi.jpg",
                            alt: "competitor"
                        },
                        strength: ["a lot of whitespace so the focus is on ready to action buttons", "structured and summarized project overview", "reflection and outlook at the end of each project", "projects are connected via links (previous and next)"],
                        weakness: ["no quick links so finding certain information/project sections takes time", "process looks polished, critical reflection is missing"],
                    },
                    {
                        name: "Flo Design",
                        picture:{
                            src: "/Flodesign.jpg",
                            alt: "competitor"
                        },
                        strength: ["quick links for project steps", "grid style project listing", "pictures mainly linked with figma files",
                            "text guided interaction e.g. click to enlarge"],
                        weakness: ["problem and solution not included in project overview", "design feels inconsistent because of changing " +
                        "colors of headlines and elements depending on the project color palette"],
                    }
                ],
                personas:[
                    {
                        name:"User Personas",
                        description:"To make sure that my decisions moving forward in the process are user-centered, I wanted to have a clear understanding of who the users are. " +
                            "Using what I learned from the stakeholder and business goals and the competitive analysis, I created two user persona to represent who I will be designing for.",
                        images:[
                            {
                                src: "/Persona1.png",
                                alt: "Persona1"
                            },
                                {
                                    src: "/Persona2.png",
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
                        description:"The Information architecture visualizes how the information is categorized. " +
                            "Anton needs to get a quick overview. Therefore I kept the main navigation simple with four main pages " +
                            "accessible through a burger menu on the top right. " +
                            "Julia wants to see structured UX case studies. The structure begins with an overview. Therefore I created " +
                            "a project overview that has subpages for the project detail views. " +
                            "Another reason for this navigation is that the projects have individual sections depending on the type, design process model chosen and available time. " +
                            "At the end of all pages the user will find a link to " +
                            "the contact page so that a smooth transition between information collecting and getting into contact is possible.",
                        images: [
                            {
                                    src: "/IA Portfolio.png",
                                    alt: "information architecture portfolio"
                            },
                        ]
                    }
                ],

                task_flow: [
                    {
                        name: "Task Flow",
                        description:"I had a clear idea of the architecture of the website. However, I wanted to continue to better " +
                            "understand how the user would be interacting with the key pages and features on the website. " +
                            "Based on the user personas, I started identifying what key tasks the user would be trying to complete when landing " +
                            "on my homepage. Based on that I worked out specifications for the website that I need to design so that " +
                            "both user types can complete the tasks with ease. Finally, I put myself into the users position understanding their " +
                            "interactions with the website by creating a task flow.",
                        task_flow_titel:"Task Flow 1: User wants to understand my design thinking approach/ projects and contact me. Task Flow 2: " +
                            "User want to get a quick impression of me.",
                        images: [
                            {
                            src: "/Taskflow1.png",
                            alt: "taskflow"
                            },
                            {
                               src: "/Taskflow2.png",
                               alt: "taskflow2"
                            },
                        ]
                    }
                ],

                lofi_wireframes: [
                    {
                        name: "Lofi Wireframe sketches",
                        link: "https://www.figma.com/proto/XZei9zRcLMuHmQje69ETUL/Portfolio-Website?node-id=67-805&p=f&t=gIDm7Eu4Ezi9n4Bo-0&scaling=min-zoom&content-scaling=fixed&page-id=67%3A804&starting-point-node-id=67%3A805",
                        description:"I used the insights gained from the user goals and his interactions with the website (task flow) " +
                            "to make informed decisions on how to sketch the 5 Key Screens: Home, Project Overview, Project Detail, About and Contact. The low fidelity wireframes " +
                            "show responsive designs adapted to Desktop screen and mobile screen size.",
                        images:[
                            {
                                src: "/Homepage.png",
                                alt: "Portfolio Home wf"
                            },
                            {
                                src: "/Homepage mobile.png",
                                alt: "Portfolio Home wf mobile"
                            },
                            {
                                src: "/About me.png",
                                alt: "Portfolio About wf"
                            },
                            {
                                src: "/About me mobile.png",
                                alt: "Portfolio About wf mobile"
                            },
                            {
                                src: "/Projects.png",
                                alt: "Portfolio Projects wf"
                            },
                            {
                                src: "/Projects mobile.png",
                                alt: "Portfolio Projects wf mobile"
                            },
                            {
                                src: "/Project Detail.png",
                                alt: "Portfolio Project Detail wf"
                            },
                            {
                                src: "/Project Detail mobile.png",
                                alt: "Portfolio Project Detail wf mobile"
                            },
                            {
                                src: "/Contact.png",
                                alt: "Portfolio Contact wf"
                            },
                            {
                                src: "/Contact mobile.png",
                                alt: "Portfolio Contact wf mobile"
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
                            src: "/moodboard_portfolio.png",
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
                        images: [
                            {
                                src: "/Style.svg",
                                alt: "stileTile"
                            },
                        ]

                    }
                ],

                ui_kit: [
                    {
                        name: "UI Kit",
                        description:"Using the style tile as a guideline, I incorporated my branding into the UI elements. " +
                            "To ensure that the design standards remain coherent across future developments, I created a UI kit " +
                            "to document the elements for reference.",

                        images: [{
                            src: "/UI Kit portfolio.png",
                            alt: "uiKit"
                        },
                        ]
                    }
                ],

                prototypes: [
                    {
                        name: "Prototypes",
                        description:"The project is exceptional since I directly tested my ideas in code. The first prototype is a functional website " +
                            "developed with next.js, react and tailwind css. I used framer motion to create micro animations and smooth scroll effects to " +
                            "guide the user through the Portfolio page and evoke curiosity. " +
                            "",
                        links:[
                            {
                                label: "View Website",
                                url: "https://lisachoiportfolio.vercel.app/"
                            }
                        ],
                        images:[
                            {
                                src: "/Portfolio Prototype.png",
                                alt: "portfolio prototype 1"
                            },
                            {
                                src: "/Portfolio Prototype 2.png",
                                alt: "portfolio prototype 2"
                            },
                        ],

                    }
                ]
            },
            {
                type: "deliver",
                delivertitel: "Deliver",
                content: "This stage is all about testing out developed ideas and prototypes from the prevoius step. " +
                    "I sort out things that will not work and improve prototypes according to insights from Usability tests " +
                    "in order to create a final version. ",

                usability: [
                    {
                        name: "Usability Testing",
                        description:"With my first prototype completed, I started working on a test plan that will guide my tests for usability. " +
                            "That includes the objectives of the usability test. What do I want to analyze and what outcomes do I hope for. Followed " +
                            "by a list of tasks and questions I will give to each participant. "
                        +"Then I requited 4 participants and test my first design to see where users have problems and how they interact with it generally. " +
                            "By sorting, mapping and understanding the users feedback and observations, I drew insights from the test results in an affinity map. ",
                        testobjectivestitel:"Test Objectives",
                        testobjectives: ["How do users navigate and read the website? Are there bothering aspects or difficulties in understanding?",
                            "Based on user feedback, I hope to improve the readability of the site where necessary and determine whether the " +
                            "portfolio effectively portrays the skills and experience."],
                        taskstitel:"Tasks and Questions",
                        tasks: ["After looking at the homepage, what do you think what kind of work does the person do?","What are the main topics of this website?",
                        "How would you contact the portfolio holder? Which options did you find and which one would you choose?",
                        "You can choose one of the projects and look at it/ read it.",
                            "Did you encounter words or contexts that you didn't understand?",
                            "Was there something that bothered or annoyed you while reading/ scanning the project?",
                        "Did you understand the main problem and goal of the project? Can you describe it shortly?",
                        "There is an About Me section on the portfolio website. Go to that page and read the information.",
                        "What information do you find about the person and her experiences?"],
                        outcomestitel:"Outcomes",
                        outcomes: "The usability test results identified some confusing UI elements and functionality of the website. " +
                            "Also I could get feedback on the texts and words used. Apparently some technical or special terms caused " +
                            "confusion for 3 out of 4 participants. The text paragraphs were perceived as too long at some points. The usability " +
                            "test also had many positive outcomes matching with the original portfolio goals. ",
                        insightstitel:"Insights",
                        insights: ["Technical terms and special terms or software lead to misunderstandings",
                            "Important project details are overlooked and text paragraphs can be very long",
                        "User mistakes icons for menu elements or oversees them",
                        "Project overview link system is unclear",
                        "clear description of personality and work style is missing",],
                        images:[
                            {
                                src: "/Affinity Map Insights.png",
                                alt: "affinity map portfolio usability test"
                            },
                            {
                                src: "/Affinity Map Insights2.png",
                                alt: "affinity map part 2 portfolio usability test"
                            },
                            {
                                src: "/Affinity Map Insights3.png",
                                alt: "affinity map part 3 portfolio usability test"
                            },
                        ],

                    }
                ],

                iteration: [
                    {
                        name: "Iteration",
                        description:"example text",
                        revisions:["example text","example text"],
                        images: [
                            {
                                src: "/clover.jpg",
                                alt: "usability1"
                            },
                            {
                                src: "/clover.jpg",
                                alt: "usability2"
                            },
                        ],

                    }
                ],


                finaldesign: [
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
            },

            {
                type: "reflection",
                name: "Reflection",
                description: "For this project I tried the approach to directly convert design sketches into functional code. " +
                    "I was then able to test a fully functional website in the usability tests. Since the website doesn't " +
                    "include complex functions or many subcategories it was manageable. Nevertheless I was confronted with the " +
                    "following problems and learned form it.",
                learnings1:"Slower path to the first testable concept",
                learnings1_text:"With my approach I needed to write a lot of code for my first testable prototype. " +
                    "For a more complex project I wouldn't recommend it since it slows down the testing cycles and becomes a bottleneck. Also I prefer focusing" +
                    " on the structural design more by making mid-fidelity prototypes before developing the visual design. \n " +
                    "So all in all mid-fidelity prototyping can accelerate early validation when complexity increases.",
                learnings2:"Reduced frequency of user testing",
                learnings2_text:"Because iterations requiered development effort, I tested my Design only once with real users. Instead of validating ideas " +
                    "with users in early stages, I adjusted some design decisions internally during the development process. It can increase the " +
                    "risk of biased decisions influenced by technical constraints. Therefore I learned to test out ideas with real users in the next project as early as possible.",
                learnings3:"A modular software architecture makes design changes easy",
                learnings3_text:"A modular coding approach made it easy to adjust visual aspects such as colors, typography, and individual sections. "+
                    "This allowed me to efficiently iterate on UI details without major refactoring.",
                learnings4:"Coding and designing simultaneously can overwhelm",
                learnings4_text:"Especially during the development stage I had difficulties completely separating the design thinking from the implementation. " +
                    "I think separating it more clearly can improve clarity and creativity.",
            }
        ]

    },
    {
        slug: "stay-a",
        title: "Stay A",
        description: "A cross-cultural UX/UI project exploring how cultural differences influence usability, trust, and interaction patterns " +
            "in hotel booking platforms. The project compares booking experiences for German and Korean users through two culturally adapted " +
            "prototypes.",
        image: "/Cover Stay A.svg",
        date: "2025-11-02",
        links:[
            {
                label: "View Korean Website Prototype",
                url: "https://stay-awind.vercel.app/en"
            },
            {
                label: "View German Website Prototype",
                url: "https://stay-awelle.vercel.app/en"
            }
        ],
        problem_description:"User with different cultural backgrounds can be less satisfied with the user experience on " +
            "globalized hotel booking websites. Not including culture-specific preferences in the design process can lead " +
            "to confusion among users when navigating the site and cause them to doubt its credibility.",
        challenge_description:"How can the interface of a hotel booking website be adapted to the preferences and needs of a " +
            "specific cultural group? What makes a website culturally sensitive? ",
        solution_description:"Two culturally sensitive interfaces were developed to appeal to users from two very different " +
            "cultures (Germany and South Korea). User research was conducted based on interviews with users from both groups, " +
            "as well as usability tests, to compare overall satisfaction with the user experience.",
        type:"UX Design and website development",
        tasks: ["Cross Cultural UX Research", "UX/UI Design", "Usability Testing", "Frontend Development"],
        tools: ["Adobe Photoshop", "Figma", "Next.js", "TailwindCSS", "MongoDB"],

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
                image: "/Double Diamond.png"
            },

            {
                type:"discover",
                discovertitel: "Discover",
                content: "The Discover Phase identifies and understands the existing problems. " +
                    "It involves speaking to and spending time with people who are affected by the issues. " +
                    "Understanding is created by asking questions. This way potential solutions can be formed. " +
                    "In this project it also included literature research and studying the context of cultures and cross-cultural " +
                    "UX Design. ",

                researchplan:[
                    {
                        name:"Research Plan",
                        description:"This project was carried out as part of my Bachelor's degree within an academic context. " +
                            "I first formulated hypotheses and research questions that I intended to address during the course " +
                            "of my thesis. The thesis examines the impact of culture on the user experience of hotel booking " +
                            "websites, using Germany and South Korea as case studies. In order to collect data and make informed decisions " +
                            "I studied a lot of literature on the topic of cross cultural UX Design, analysed popular travel websites targeting the two cultures and" +
                            " did empirical research. The preliminary study during the discover " +
                            "phase focused on the following questions.",
                        questions:[
                            "What is cross-cultural UX design? What research has already been conducted on this topic, and what were the findings?",
                            "What defines German and South Korean cultures? In what ways do they differ from one another?",
                            "How are popular hotel booking sites in Germany and South Korea structured? What insights from " +
                            "cultural theories and literature are reflected in their design?",
                            "What is the opinion of users from both cultural groups concerning user experience of hotel booking sites?"
                        ]
                    }
                ],

                culturaldimensions:[
                    {
                        name:"Cultural Dimensions",
                        description:"One of the most spread cultural theories are the cultural dimensions by Hofstede. " +
                            "He studied over 100 cultures by analyzing how culture influences the values and behaviors of its members. " +
                            "He categorized his findings into six dimensions and each country scores between 0 and 100 which indicates a " +
                            "tendency. I highlighted the dimensions where the two cultures differ the most.",
                        table:{
                            src:"/Hofstede.jpg",
                            alt:"Hofstedes cultural dimensions",
                        },
                        dimensions: [
                            {
                              name:"Power Distance",
                              description1:"Users expect transparency, equality, and a certain degree of autonomy in their lives " +
                                  "and in the services they use.",
                              description2:"A higher power distance reflects a society shaped by Confucian values. Authority " +
                                  "and hierarchy are highly valued and respected.",
                              country1:"Germany",
                              country2:"South Korea",
                            },

                            {
                                name:"Motivation towards achievement and success (Masculinity vs. Femininity)",
                                description1:"Masculine cultures value competition and materialistic achievements.",
                                description2:"Feminine cultures place greater emphasis on harmony in relationships and a good quality of life.",
                                country1:"Germany",
                                country2:"South Korea",
                            },
                        ]
                    }
                ],

                websitecasestudy:[
                    {
                        name:"Website Case Study",
                        description:"After learning about culture in general I needed to analyze interfaces on how they reflect that specific " +
                            "culture and that culture groups needs. " +
                            "This case study explores how cultural differences shape UX and UI design through a comparison " +
                            "of two leading travel booking platforms from Germany and South Korea. By analyzing visual language, " +
                            "communication styles, and user expectations, the case study enables the identification of culture-specific " +
                            "characteristics reflected in the interface design and possible deviations from theoretical models. " +
                            "The insights gained were later applied to the development of culturally aware " +
                            "design concepts that balance culture-specific expectations with modern international UX standards.",
                        dimensions: [
                            {
                                name:"High and Low Context Culture",
                                description1:"Direct communication, minimal use of ambiguous or symbolic language, and highly structured, " +
                                    "detailed information about the hotel, guest reviews, and prices.",
                                description2:"Visual elements (images, banners, icons) reinforce the implicit communication. Texts are " +
                                    "shorter, headlines are eye-catching, and much of the information is conveyed through visual elements.",
                                country1:"Germany",
                                country2:"South Korea",
                            },

                            {
                                name:"Interdependent and Independent Self",
                                description1:"The website interface offers customizable options (filter settings, a favorites feature, and the " +
                                    "ability to write individual reviews).",
                                description2:"Community features are available. The rating system is multi-layered: reviews, star ratings, " +
                                    "the number of likes, and the number of " +
                                    "bookings to date determine a hotel’s ranking. Recommendations based on user feedback are highlighted on the homepage.",
                                country1:"Germany",
                                country2:"South Korea",
                            },

                            {
                                name:"High and Low Power Distance",
                                description1:"Transparency regarding reviews, pricing structure, and terms of purchase. The images feature " +
                                    "ordinary people, mostly in a travel context. The navigation is less straightforward than one might " +
                                    "expect given the low power distance, due to the cluttered main menu. The word “save” is used " +
                                    "extensively in advertising.",
                                description2:"The search navigation is divided into several layers (category, region, detailed filter " +
                                    "selection) and thus appears hierarchically structured. Awards are displayed as badges in the footer. " +
                                    "The site offers the user too many navigation options for a High Power Distance society.",
                                country1:"Germany",
                                country2:"South Korea",
                            },

                            {
                                name:"Motivation towards achievement and success (Masculinity vs. Femininity)",
                                description1:"The color scheme is professional and functional. Competition in the travel booking sector " +
                                    "centers on finding the cheapest deal. The site heavily promotes “Save” and “Top Early Bird Deals” badges. " +
                                    "Most trips are all-inclusive packages that include flights, accommodations, airport transfers, and meals, " +
                                    "which is a hallmark of efficient travel booking.",
                                description2:"The color palette is vibrant but harmonious and balanced thanks to pastel colors. " +
                                    "Many illustrations are used for icons and banners. The service section (customer service, coupons, events) " +
                                    "is easy to find.",
                                country1:"Germany",
                                country2:"South Korea",
                            },
                        ]
                    }
                ],

                interview:[
                    {
                        name:"User Interviews",
                        description:
                            "The case study showed that some cultural values are reflected in the UX Design while others " +
                            "were rather domain driven and very similar on both websites. I wanted to collect empirical information " +
                            "through interviews with user from both cultures." +
                            "The interview questions were divided into five categories: " +
                            "1. Design and layout, 2. User needs; 3. Pain points and trust. 4. Cultural adaptation 5." +
                            "Contextual data. To ensure the interviews were both comparable and relevant, the target group " +
                            "was limited to individuals aged 20 to 40. A total of 16 " +
                            "participants took part: seven women and nine men." +
                            "I collected all answers and gained insights through content and thematic analysis of my findings. " +
                            "The quotes below should give you an idea of the insights I gained from some recurring opinions.",

                        quote: [
                            {
                                quote:"\"I don't really look at the recommendations on the main page.\" ",
                                culture:"German user",
                                insights:"The recommendations on the main page tend to get less " +
                                    "attention, so as for the German prototype they can be placed further down, and the search function " +
                                    "for hotels and destinations should be immediately visible. ",
                            },

                            {
                                quote:"\"The hotel information should be short but I still want to have an option to see more details.\" ",
                                culture:"German user",
                                insights:"For the German prototype too much information at a glance can feel overwhelming. " +
                                    "Detailed information should " +
                                    "always be available on demand. This also applies to menus.",
                            },

                            {
                                quote:"\"I always use my cell phone to book trips.\" ",
                                culture:"South Korean user",
                                insights:"The pages of the Korean prototype should be designed with a “mobile-first” approach (responsive design).",
                            },

                            {
                                quote:" \"First, I take a look at the homepage and look for good deals.\"",
                                culture:"South Korean user",
                                insights:"The recommendations on the home page serve as a starting point for searches " +
                                    "and should therefore be as personalized and appealing as possible.",
                            },
                        ]
                    }
                ],

                personas:[
                    {
                        name:"User Personas",
                        description:"To make sure that my decisions moving forward in the process are user-centered, I wanted to have a clear " +
                            "understanding of who the users are. " +
                            "The following two personas are based on the findings of the preliminary study: interview results, website case study, " +
                            "and the information taken from the cultural dimensions of Germany and South Korea. The personas serve as a reference during the design and " +
                            "implementation process. Korean persona: Eun Woo; German cultural persona: Anna",
                        images:[
                            {
                                src: "/Persona Eun-woo.jpg",
                                alt: "Persona Korean culture"
                            },
                            {
                                src: "/Persona Anna.jpg",
                                alt: "Persona German culture"
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
                        description:"The Information Architecture visualizes how the information is categorized. " +
                            "The time of the project was very limited so I had to focus on the essential pages from searching to booking. " +
                            "The information architecture shows also pages like 'About' and 'Travel Insurance' that were not planned to be implemented and therefore " +
                            "marked accordingly. The architecture of the korean prototype was developed taking into account that " +
                            "most koreans use mobile screens, search through recommendations and need to be able to book conveniently and time saving. " +
                            "On the other hand the german prototypes architecture highlights a desktop-first menu based search system and detailed filter search. ",
                        images:[ {
                                src: "/IA ko.png",
                                alt: "information architecture korean page"
                            },
                            {
                                src: "/IA de.png",
                                alt: "information architecture german page"
                            },
                        ]
                    }
                ],

                task_flow: [
                    {
                        name: "User Flows",
                        description:"Diving deeper, I created two user flows exploring different scenarios for my personas. " +
                            "Here I explored the different paths that Eun Woo and Anna would take while interacting with the website and " +
                            "trying to book a vacation. " +
                            "Based on the user personas, I started identifying what key tasks the user would be trying to complete when landing " +
                            "on my homepage. Based on that I worked out specifications for the website that I need to design so that " +
                            "both user types can complete the tasks with ease.",
                        task_flow_titel:"1. User Flow Eun Woo: Eun Woo  wants to find a good offer for a  domestic and affordable weekend trip. 2. User Flow Anna: " +
                            "Anna plans her summer vacation in 6 months. She wants to go to the beach in Europe.",
                        images: [
                            {
                                src: "/User Flow KO.svg",
                                alt: "user flow ko"
                            },
                            {
                                src: "/User Flow DE.svg",
                                alt: "user flow de"
                            },
                        ]
                    }
                ],

                feature_roadmap: [
                    {
                        name: "Feature Roadmap",
                        description:"From the prior research and development of personas and user flows I got an idea what the key " +
                            "features are and how they differ. I learned that the German prototype should prioritize clarity, " +
                            "transparency, structure, and reduced uncertainty. The interface should support analytical " +
                            "decision-making through detailed information visibility, stable navigation patterns, and predictable booking flows." +
                            "On the other side the Korean prototype should prioritize speed, engagement, social validation, and mobile-first " +
                            "interaction patterns. The interface I want to design for the Korean prototype should encourage quick exploration " +
                            "through visually dynamic content, compact information presentation, and reward-focused interaction systems.",
                        images: [
                            {
                                src: "/Feature Roadmap stayA.png",
                                alt: "Feature Roadmap stayA"
                            },
                        ]
                    }
                ],

                lofi_wireframes: [
                    {
                        name: "Lofi Wireframe sketches",
                        link: "https://www.figma.com/proto/XZei9zRcLMuHmQje69ETUL/Portfolio-Website?node-id=67-805&p=f&t=gIDm7Eu4Ezi9n4Bo-0&scaling=min-zoom&content-scaling=fixed&page-id=67%3A804&starting-point-node-id=67%3A805",
                        description:"Beside common UX heuristics and domain specific characteristics, I used the insights gained from the " +
                            "user goals and his interactions with the website (user flow) " +
                            "to make informed decisions on how to sketch the 4 Key Screens: Home, " +
                            "Search Results, Hotel Detail, Checkout. The low fidelity wireframes " +
                            "show responsive designs adapted to desktop screen and mobile screen size.",
                        images:[
                            {
                                src: "/Homepage stayA ko.png",
                                alt: "Portfolio Home wf"
                            },
                            {
                                src: "/Homepage stayA ko mobile.png",
                                alt: "Portfolio Home wf mobile"
                            },
                            {
                                src: "/Search results page stayA ko.png",
                                alt: "Portfolio About wf"
                            },
                            {
                                src: "/Search results page stayA ko mobile.png",
                                alt: "Portfolio About wf mobile"
                            },
                            {
                                src: "/Hotel detail page stayA ko.png",
                                alt: "Portfolio Projects wf"
                            },
                            {
                                src: "/Hotel detail page stayA ko mobile.png",
                                alt: "Portfolio Projects wf mobile"
                            },
                            {
                                src: "/Checkout page stayA ko.png",
                                alt: "Portfolio Project Detail wf"
                            },
                            {
                                src: "/Checkout page stayA ko mobile.png",
                                alt: "Portfolio Project Detail wf mobile"
                            }
                        ],

                    }
                ]
            },

            {
                type: "develop",
                developtitel: "Develop",
                content: "After clearly defining the problem and ideating possible solutions in the previous phase, the develop phase focuses on " +
                    "realising plans and ideas into design concepts and prototypes. It's an explorative process characterized by testing various " +
                    "approaches. ",


                style_tile: [
                    {
                        name: "Style Tile",
                        description:"First I worked on a logo for stayA. While creating the visual identity I used the learnings " +
                            "from the cultural dimensions and interviews " +
                            "to create two visual design concepts that mostly differ through color, visuals and text styles. " +
                            "According to literature findings, cool colors, especially pastels, create a sense of trustworthiness for " +
                            "Korean users. I picked a color palette that creates a significantly more dynamic and playful overall effect, " +
                            "which corresponds to the Korean design style evident in the website case study. " +
                            "The color palette for the german prototype focuses on natural and elegant colors. " +
                            "Clear strong contrasts are used sparingly and purposefully throughout the interface.",
                        images: [
                            {
                            src: "/Design Guide 1.jpg",
                            alt: "stileTile"
                            },
                            {
                                src: "/Design Guide 2.jpg",
                                alt: "stileTile"
                            },
                        ]

                    }
                ],

                ui_kit: [
                    {
                        name: "UI Kit",
                        description:"Using the style tile as a guideline, I incorporated the two concepts into the UI elements. " +
                            "To ensure that the design standards remain coherent across future developments, I created a UI kit " +
                            "to document the elements for reference.",

                        images: [{
                            src: "/UI Kit 1.svg",
                            alt: "uiKit 1"
                        },

                            {
                                src: "/UI Kit 2.svg",
                                alt: "uiKit 2"
                            },
                        ]
                    }
                ],

                prototypes: [
                    {
                        name: "Prototypes",
                        description:"The project is exceptional since I directly tested my ideas in code. The first prototype is a functional website " +
                            "developed with next.js, react and tailwind css. I used framer motion to create micro animations to " +
                            "guide the user through the Portfolio page and evoke curiosity. The mobile screen version couldn't be tested in the " +
                            "usability test. " +
                            "",
                        links:[
                            {
                                label: "View Korean Website Wind",
                                url: "https://stay-awind.vercel.app/en"
                            },
                            {
                                label: "View German Website Welle",
                                url: "https://stay-awelle.vercel.app/en"
                            }
                        ],
                        images:[
                            {
                                src: "/Prototype Stay A . ko.svg",
                                alt: "prototype korean"
                            },
                            {
                                src: "/Prototype Stay A . de.svg",
                                alt: "prototype german"
                            },
                            {
                                src: "/StayADE Mockup Laptop.png",
                                alt: "prototype german laptop"
                            },
                            {
                                src: "/StayAKO Mockup Mobile.png",
                                alt: "prototype korean mobile"
                            },
                        ],

                    }
                ]
            },

            {
                type: "deliver",
                delivertitel: "Deliver",
                content: "In this stage I test out the developed ideas and prototypes from the previous step. " +
                    "Deliver includes Usability tests and drawing insights from their results.",

                usability: [
                    {
                        name: "A/B Usability Testing",
                        description:"For the usability tests, I surveyed 8 German and 8 Korean users aged between 20 and 40 via remote testing. " +
                            "They were given a task and had to complete it once using the German prototype (Welle) and once using the Korean " +
                            "prototype (Wind), and then answer questions about their experience. In addition to observation-oriented and " +
                            "task-related questions, the questionnaires included " +
                            "several standardized usability and UX instruments (PWU-G, UMUX-Lite, VisAWI-S, WebCLIC Short). " +
                            "After compiling all the results, I organized them into a tabular, analyzable format using Google " +
                            "Sheets and visualized the results using box plots and bar charts.",
                        testobjectivestitel:"Test Objectives",
                        testobjectives: ["I wanted to find out how easy, efficient and error-free the websites were to use. Aspects such as navigability, " +
                        "understanding of the content structure, perceived user-friendliness, time-on-task, and error-free interaction were considered in particular.",
                            "Additionally, I examined user experience (UX) and general user satisfaction. This involved " +
                            "the overall impression that the website left on the test subjects and the extent to which trust, " +
                            "enjoyment or frustration influenced its use. The key metrics used were perceived overall benefit, " +
                            "aesthetic impact, familiarity, and emotional reactions.",
                        "I also examined design preferences between the two prototypes ‘Wind’(Korean version) " +
                        "and ‘Welle’(German version). This involved analysing how well the respective designs corresponded " +
                        "to the cultural expectations of the user groups. In addition to perceived familiarity, individual " +
                        "preference and the overall comparative evaluation of the two websites played a central role."],
                        taskstitel:"Task given to all testers",
                        tasks: ["Imagine that you are planning a solo trip to <Cityname>. You want to book three nights’ " +
                        "accommodation of your choice next month. It should meet the following criteria: good rating (8–10 stars), " +
                        "breakfast included and free cancellation possible. Use the website to find a suitable offer, select a " +
                        "room and go through the booking process until you receive your confirmation."],
                        outcomestitel:"Outcomes",
                        outcomes: "Since the sample size was too small to provide meaningful results, my findings merely indicate trends. " +
                            "The results showed a tendency for users from different cultural backgrounds to, on average, rate the prototype " +
                            "adapted to their culture more highly. This was particularly evident among the Korean testers in terms of " +
                            "aesthetic perception and emotional user experience. The German testers showed a tendency to prefer the German " +
                            "prototype, particularly due to its usability, comprehensibility, and trustworthiness.",
                        insightstitel:"Insights",
                        insights: ["Culturally familiar design elements, " +
                        "such as a clear information structure, subtle color choices and functional navigation tend to " +
                        "meet the expectations of German users and thus tend to increase perceived ease of use",
                            "The dynamic, visually rich design of the Korean prototype including microanimations, promotions and local payment " +
                            "options seem to correspond with the cultural focus on visual appeal and comfort of South Koreans.",
                        "The German prototype also received high ratings from Korean participants " +
                        "in terms of professionalism and trust, indicating design qualities that are perceived as positive " +
                        "regardless of cultural context",
                        "The results suggest that cultural adaptation should be understood as a continuous spectrum of " +
                        "design decisions balancing universal usability principles with culturally specific expectations, and not be seperated. ",
                        "The domain of the website also influences the users expectations. In fact all tester regardless of their cultural background " +
                        "had similar expectations regarding " +
                        "secure local payment options, a large number of hotel photos, and extensive filtering features."],
                        images:[
                            {
                                src: "/Usability StayA1.jpg",
                                alt: "usability1"
                            },
                            {
                                src: "/Usability StayA2.jpg",
                                alt: "usability2"
                            },
                        ],

                    }
                ],

            },

            {
                type: "reflection",
                name: "Reflection",
                description: "",
                learnings1:"Many tasks. Not enough time.",
                learnings1_text:"The project was developed as my bachelor thesis. Therefore I had a time limit. " +
                    "Unfortunately, I couldn't do iterations or prior usability tests to test if the designed prototypes " +
                    "really align with users cultural expectations and if there are any problems to fix before comparing them " +
                    "in an A/B Test. Also in another iteration I would test the prototypes on mobile devices as well and compare the results " +
                    "to the previous test results.",
                learnings2: "How to build trust? It depends.",
                learnings2_text:"I learned through this project that users from different cultural contexts establish trust differently. " +
                    "German-oriented interfaces benefited from transparency, structured information, and predictable flows, " +
                    "while Korean-oriented interfaces relied more strongly on social proof, popularity indicators, and visually engaging " +
                    "interaction patterns.",
                learnings3:"Cultural adaptation is complex.",
                learnings3_text:"I initially approached cultural adaptation mainly through visual differences such as colors, layout, and imagery. " +
                    "During the research for this project, I learned that cultural adaptation in UX extends much deeper into interaction behavior, " +
                    "trust-building mechanisms, information processing, and decision-making patterns.",
                learnings4:"Don't create stereotypical design.",
                learnings4_text:"A big challenge for me was balancing cultural adaptation without reducing users to simplified cultural stereotypes. " +
                    "I learned that cultural dimensions can provide useful orientation, but they should not be applied rigidly. " +
                    "So I combined literature, case studies, and user insights to create more nuanced design decisions.",
            }
        ]
    },

    {
        slug: "poetteundkauken",
        title: "Poette und Kauken",
        description: "Creating a unique german brand that combines handmade craftsmanship, slow coffee culture, and quiet creative moments.",
        image: "/Cover (1).svg",
        date: "2026-04-16",
        links:[
            {
                label: "View Figma Design File",
                url: "https://www.figma.com/proto/VQAha4hqLMbjGNdERGUMnN/Caf%C3%A9-und-Atelier?node-id=82-883&t=4QJkjy2rPkmeaZS9-0&scaling=contain&content-scaling=fixed&starting-point-node-id=82%3A883"
            }
        ],
        problem_description: "The owner wanted to create a space that combined pottery and café culture, " +
            "but needed a visual identity that could connect creativity, craftsmanship, and a calm and relaxing café " +
            "atmosphere into one consistent brand experience.",
        challenge_description: "The main challenge was translating the tactile and calming qualities of pottery into a modern café brand " +
            "while keeping a quiet, inspiring, and welcoming atmosphere across all touchpoints.",
        solution_description: "The solution was a warm and minimal visual identity inspired by clay colors, handmade processes, " +
            "and quiet café culture. Through cohesive branding applications across print and digital media, the project creates " +
            "a consistent atmosphere centered around creativity, comfort, and slow life moments.",
        type: "Brand Design",
        tasks: ["Research","Positioning & Brand Personality", "Concept Development", "Visual Identity", "Mockup Design", "Poster Design"],
        tools: ["Figma"],

        sections: [
            {
                type: "design-system",
                designsystemname: "Branding Process",
                designsystemdescription:
                    "I started conducting research on the brands characteristics, goals and target audience. " +
                    "Then I dig deeper into the background, story of the owners and together we formulated a brand personality. " +
                    "I started concept developing by applying my research finds to possible colors, typography, logo ideation and " +
                    "visual language. To create a visual identity my first steps always included sketching out ideas and applying " +
                    "them to test their effects. Until my final design concept I went through many iterations.",
                image: "/Branding Concept.svg"
            },

            {
              type: "research-brand-personality",
              name: "Research and Brand Personality",
              description:"First I wanted to get to know the problem the brand wants to solve and the goals of the brand. " +
                  "The following questions and answers summarize the process to discover the personality of the brand.",
                questiongoal:"Which problem does the brand solve? Why does it exist?",
                answergoal:"The café and ceramics studio combines artisanal craftsmanship with a " +
                    "peaceful retreat. It’s a place to relax and find inspiration. The owners create hand-formed " +
                    "ceramics in the back of the café. The café is a place where visitors can watch the master " +
                    "potters at work and, at the same time, escape their daily routines for a moment and step " +
                    "into a creative world while enjoying quality coffee and tea.",
                questiontarget:"What kind of people do you wish to attract by your brand?",
                answertarget:"The café attracts particularly creative people who appreciate a place where ceramics " +
                    "and a relaxed café atmosphere come together. It does not aim to become a tourist hotspot, but " +
                    "rather to welcome local and international guests alike. It is a place where families are also welcome. " +
                    "In addition to delicious coffee, tea, and pastries, the café will also sell handmade ceramics. " +
                    "The café offers space for small groups, families, and solo visitors.",
                questionspecial:"What makes your brand stand out from others?",
                answerspecial:"The Ceramics and Café Studio is a place where you feel as though you’re in the german countryside. " +
                    "(The owners hometown is a village in northern Germany.) Guests feel a sense of " +
                    "peacefulness, relaxation and inspiration. It combines organic forms with the natural flavors of coffee and tea. " +
                    "The drinks and pastries are served in handmade ceramics, offering visitors a unique experience in terms of texture, " +
                    "design, and taste.",
                questionpersonality:"How to describe the personality of the brand in a few words?",
                answerpersonality:"organic, natural, calm, warm, handmade, inspiring",
                questionstory:"What is the story behind the brand?",
                answerstory:"The owners wanted to create a space that combines their ceramics studio with a welcoming place for " +
                    "neighbors and visitors. A café is the perfect addition to this vision. Visitors can watch the ceramics-making " +
                    "process while enjoying a cup of coffee. The two areas are not directly connected but are separated by a " +
                    "sliding door to ensure both a quiet environment for the artists and a relaxed atmosphere for the visitors. " +
                    "The owners worked hard for a long time to make the opening a reality and overcame financial difficulties to " +
                    "bring this vision to life. For this reason, it is also meant to be a refuge of sorts for anyone burdened by " +
                    "their daily worries who wants to recharge their batteries. A place that conveys the message: sometimes " +
                    "things take longer, and that’s okay. ",
            },

            {
                type: "concept-development",
                name: "Concept Development",
                description:
                    "During the concept development stage I tried to ideate visual ideas that convey the brand personality and story. " +
                    "Therefore I started getting inspired by making mood boards and got an idea for colors, textures and layouts. " +
                    "Then we discussed on the brand name and it's language. After ideating names, I tested them by testing fonts. " +
                    "In this manner the logo ideation happened as well. We also tested the ideas on quick made mockups to see real life " +
                    "usages. This process helped to decide which ideas to keep and which ideas we should let go off.",
                moodboard: "Mood board",
                moodimages:[
                    {
                        src: "/Moodboard.svg",
                        alt: "mood board poette und kauken 1"
                    },
                    {
                        src: "/Moodboard (1).svg",
                        alt: "mood board poette und kauken 2"
                    },
                ],
                language: "Language ideation",
                languageideation:"The owners had lived in rural northern Germany for a long time, where older people " +
                    "often still spoke Low German. We wanted to incorporate that culture into the brand. So we tested " +
                    "a few Low German words for the brand name. It was important to us that the language remain understandable " +
                    "and accessible, yet have a distinctive, recognizable sound. The language is mainly German for menu and poster " +
                    "because the target audience is mainly locals and german people. I added english translations on the menu to include " +
                    "internationals as well.",
                visuals: "Visual ideation",
                visualsdescription: "First I ideate ideas for logo, text and composition on paper. Then I transfer my ideas to digital design." +
                    " Testing ideas was always connected with applying them to namecards, mockups and see their " +
                    "effect. I started with typography and ideated on composition, style and colors on the way. " +
                    "The pictures below show a part of the ideation process.",
                visualsimages:[
                    {
                        src: "/Typography ideation.svg",
                        alt: "visuals poette und kauken 1"
                    },
                    {
                        src: "/Logo Ideation.svg",
                        alt: "visuals poette und kauken 2"
                    },
                    {
                        src: "/Logo ideation (1).svg",
                        alt: "visuals poette und kauken 3"
                    },
                    {
                        src: "/Color ideation.svg",
                        alt: "visuals poette und kauken 4"
                    },
                    {
                        src: "/Color and Logo.svg",
                        alt: "visuals poette und kauken 5"
                    },
                    {
                        src: "/Color and Logo (1).svg",
                        alt: "visuals poette und kauken 6"
                    },
                    {
                        src: "/Mockups tests.svg",
                        alt: "visuals poette und kauken 7"
                    },
                ],
            },

            {
                type: "visual-identity",
                name: "Visual Identity",
                description:
                    "I iterated a lot between the two phases Concept Development and Visual Identity. The final design guide, logo and " +
                    "menu design is the result of the process. The terracotta brown together with pistachio green turned out to convey our message best. " +
                    "Together they create a feeling of warmth and calmness. Terracotta is strongly connected to the medium clay. Pistachio is used for " +
                    "accents and gives an elegant natural touch to the brand. We decided early to go with only two main colors to support the message " +
                    "and create modern elegance through minimalism. When it comes to typography, handwritten fonts were suitable because the brand is handcrafted, " +
                    "organic and natural. The sans serif font serves as a balance to the handwritten title font. Since the name is made up of Low German words, " +
                    "I decided on a logo that reinforces the brand’s meaning. The logo uses brushstrokes to create a clay like texture: raw and organic shapes.",
                images:[
                    {
                        src: "/Brand Design Guide.svg",
                        alt: "brand design guide 1"
                    },
                    {
                        src: "/Brand Poster.svg",
                        alt: "brand poster 1"
                    },
                    {
                        src: "/Brand Poster 2.svg",
                        alt: "brand poster 2"
                    },
                ],
            },

            {
                type: "application",
                name: "Application",
                description:
                    "I discussed potential uses with the owners. The café serves coffee and beverages exclusively in its " +
                    "own handmade cups and therefore does not offer takeout service or use paper cups at all. " +
                    "However, branded packaging (bags, sticker, tape) is needed for the sale of bread and handmade ceramics. " +
                    "In addition, a menu, loyalty card, and posters were created. The brand intends to " +
                    "conduct its marketing exclusively via Instagram. The brand’s visual language features " +
                    "images of the café’s interior, pottery-making processes, and finished pieces. This is " +
                    "complemented by illustrative posters and designs that harmonize with the logo design " +
                    "to enhance brand recognition.",
                images:[
                    {
                        src: "/Brand Prototypes.svg",
                        alt: "brand mockups"
                    },
                    {
                        src: "/Brand Socials.svg",
                        alt: "brand socials"
                    },
                    {
                        src: "/portfolio-mockup-print.png",
                        alt: "brand mockup poster"
                    },
                ],
            },

            {
                type: "reflection",
                name: "Reflection",
                description: "The project was created as a branding concept for the owners’ " +
                    "envisioned pottery atelier café, translating their future aspirations into a cohesive visual identity. " +
                    "I used only Figma for this project, so I’m now very familiar with its features and have gotten used to the interface.",
                learnings1:"Testing ideas on real scenarios helps to decide.",
                learnings1_text:"Whenever I was unsure which direction supports the message of the brand better, " +
                    "I tested it on mockups or on poster designs. This process was very helpful in guiding " +
                    "my decision-making and justifying my design choices.",
                learnings2:"Finding free usable mockups is not easy.",
                learnings2_text:"Trying to find free mockups that suit the overall brand design well is very difficult. " +
                    "I decided to go with an approach to create 2 dimensional mockups, which is suitable for this project. " +
                    "Nevertheless I realized that I want to learn more about mockup making to create realistic mockups for " +
                    "future project by myself as well.",
                learnings3:"Testing, testing, testing!",
                learnings3_text:"I found that ideas flowed best when I did quick sketches " +
                    "and iterations, trying several approaches before defining more specialised features. ",
            }
        ]
    }
];

/**export const getLatestProject = () =>
    projects.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
**/
export const getLatestProject = (count = 3) =>
    projects
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .slice(0, count);

export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug);
