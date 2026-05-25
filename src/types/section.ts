export type Section =
    | DesignSystemSection
    | DiscoverSection
    | InspirationSection
    | IdeateSection
    | DefineSection
    | DevelopSection
    | ConceptdevSection
    | DeliverSection
    | ReflectionSection
    | ResearchBrand
    | VisualIdentity
    | Application
;

export type ResearchBrand = {
    type: "research-brand-personality";
    name: string;
    description: string;
    questiongoal?: string;
    answergoal?: string;
    questiontarget?: string;
    answertarget?: string;
    questionspecial?: string;
    answerspecial?: string;
    questionpersonality?: string;
    answerpersonality?: string;
    questionstory?: string;
    answerstory?: string;
};

export type VisualIdentity = {
    type: "visual-identity";
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];
}

export type Application = {
    type: "application";
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];
}

export type DesignSystemSection = {
    type: "design-system";
    designsystemname: string;
    designsystemdescription: string;
    image?: string;
};

export type DiscoverSection = {
    type: "discover";
    discovertitel: string;
    stakeholdertitel?: string;
    stakeholders?: Stakeholder[];
    competitiveAnalysisTitel?: string;
    competitorAnalysisDescription?: string;
    competitor?: Competitor[];
    personas?: Personas[];
    researchplan?: Researchplan[];
    culturaldimensions?: CulturalDimensions[];
    websitecasestudy?: WebsiteCaseStudy[];
    interview?: Interview[];
    content: string;
};

export type Researchplan = {
    name: string;
    description: string;
    questions?: string[];
    questiongoal?: string;
    answergoal?: string;
    questiontarget?: string;
    answertarget?: string;
    questionspecial?: string;
    answerspecial?: string;
};

export type CulturalDimensions = {
    name: string;
    description: string;
    table?: {
        src: string;
        alt?: string;
    };
    dimensions?: Dimensions[];
};

export type Dimensions ={
    name?: string;
    description1?: string;
    description2?: string;
    country1?: string;
    country2?: string;
}

export type WebsiteCaseStudy = {
    name: string;
    description: string;
    dimensions?: Dimensions[];
};

export type Interview = {
    name: string;
    description: string;
    quote?: Quote[];
};

export type Quote ={
    quote?: string;
    culture?: string;
    insights?: string;
};

export type Stakeholder = {
    name: string;
    role?: string;
    description: string;
    goals?: string[];
};

export type Competitor = {
    name?: string;
    picture?: {
        src: string;
        alt?: string;
    };
    strength?: string[];
    weakness?: string[];

};

export type Personas = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}
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
    definetitel: string;
    content: string;
    feature_roadmap?: FeatureRoadmap[];
    site_map?: SiteMap[];
    task_flow?: TaskFlow[];
    lofi_wireframes?: LofiWireframes[];
    projectgoals?: ProjectGoals[];
};

export type ProjectGoals = {
    name: string;
    description: string;
    goals:string[];

}

export type FeatureRoadmap = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type SiteMap = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type TaskFlow = {
    name: string;
    description: string;
    task_flow_titel: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type LofiWireframes = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];
    link?: string;

}

export type DevelopSection = {
    type: "develop";
    developtitel: string;
    content: string;
    inspiration?: Inspiration[];
    style_tile?: StyleTile[];
    ui_kit?: UIKit[];
    prototypes?: Prototypes[];

}

export type Inspiration = {
    name: string;
    description: string;
    image: {
        src: string;
        alt?: string;
    };

}

export type StyleTile = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type UIKit = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type Prototypes = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];
    links: {
        label: string;
        url: string;
    }[];

}


export type ConceptdevSection = {
    type: "concept-development";
    name: string;
    description: string;
    moodboard?: string;
    moodboarddescription?: string;
    moodimages?: {
        src: string;
        alt?: string;
    }[];
    language?: string;
    languageideation?: string;
    visuals?: string;
    visualsdescription?: string;
    visualsimages?:{
        src: string;
        alt?: string;
    }[];
}



export type DeliverSection = {
    type: "deliver";
    delivertitel: string;
    content: string;
    usability?: Usability[];
    iteration?: Iteration[];
    finaldesign?: FinalDesign[];
}

export type Usability = {
    name: string;
    description: string;
    testobjectivestitel?: string;
    testobjectives?: string[];
    taskstitel?: string;
    tasks?: string[];
    outcomestitel?: string;
    outcomes?: string;
    insightstitel?: string;
    insights?: string[];
    images?: {
        src: string;
        alt?: string;
    }[];
    link?: string;

}

export type Iteration = {
    name: string;
    description: string;
    revisions?: string[];
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type FinalDesign = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];
    link?: string;

}

export type ReflectionSection = {
    type: "reflection";
    name: string;
    description: string;
    learnings1: string;
    learnings1_text: string;
    learnings2?: string;
    learnings2_text?: string;
    learnings3?: string;
    learnings3_text?: string;
    learnings4?: string;
    learnings4_text?: string;
}