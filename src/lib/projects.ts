export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
};

export const projects: Project[] = [
    {
        slug: "portfolio-redesign",
        title: "Portfolio Redesign",
        description: "Ein modernes Redesign meiner Portfolioseite mit Tailwind & Next.js.",
        image: "/clover.jpg",
        date: "2025-08-10",
    },
    {
        slug: "stay-a",
        title: "Stay A",
        description: "Ein Projekt zur Untersuchung der User Experience im internationalen Kontext.",
        image: "/clover.jpg",
        date: "2025-06-02",
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
