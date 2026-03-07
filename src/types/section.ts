export type Section =
    | DesignSystemSection
    | DiscoverSection
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

export type DiscoverSection = {
    type: "discover";
    discovertitel: string;
    stakeholdertitel?: string;
    stakeholders?: Stakeholder[];
    personas?: Personas[];
    content: string;
};

export type Stakeholder = {
    name: string;
    role?: string;
    description: string;
    goals?: string[];
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
};

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
    image: {
        src: string;
        alt?: string;
    };

}

export type TaskFlow = {
    name: string;
    description: string;
    task_flow_titel: string;
    image: {
        src: string;
        alt?: string;
    };

}

export type LofiWireframes = {
    name: string;
    description: string;
    images?: {
        src: string;
        alt?: string;
    }[];

}

export type DevelopSection = {
    type: "develop";
    developtitel: string;
    content: string;
    inspiration?: Inspiration[];
    style_tile?: StyleTile[];
    ui_kit?: UIKit[];
    final_design?: FinalDesign[];

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
    image: {
        src: string;
        alt?: string;
    };

}

export type UIKit = {
    name: string;
    description: string;
    image: {
        src: string;
        alt?: string;
    };

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