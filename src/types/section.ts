export type Section =
    | DesignSystemSection
    | ResearchSection
    | InspirationSection
    | IdeateSection
    | DefineSection
    | DevelopSection
    | ConceptdevSection
    | DeliverSection
;

export type DesignSystemSection = {
    type: "design-system";
    designsystemname: string;
    designsystemdescription: string;
    image?: string;
};

export type ResearchSection = {
    type: "research";
    researchtitel: string;
    content: string;
};

export type InspirationSection = {
    type: "inspiration";
    inspirationtitel: string;
    content: string;
    images?: {
        src: string;
        alt?: string;
    }[];
};

export type IdeateSection = {
    type: "ideate";
    ideatetitel: string;
    content: string;
    images: {
        src: string;
        alt?: string;
    }[];
};

export type DefineSection = {
    type: "define";
    content: string;
    feature_roadmap?: string;
    site_map?: string;
};

export type DevelopSection = {
    type: "develop";
    content: string;
    wireframes?: {
        src: string;
        alt?: string;
    }[];
    userflows?: {
        src: string;
        alt?: string;
    }[];
    stiletile?: {
        src: string;
        alt?: string;
    }[];
    Uidesign?: {
        src: string;
        alt?: string;
    }[];
}

export type ConceptdevSection = {
    type: "conceptdev";
    conceptdefinition: string;
    explanation?: string;
}

export type DeliverSection = {
    type: "deliver";
    content: string;
    protoype?: {
        src: string;
        alt?: string;
    }[];
    usability?: string;
    usabilitytestoutcomes?: string[];
    finalproduct?: {
        src: string;
        alt?: string;
    }[];
    reflection?:string;
}