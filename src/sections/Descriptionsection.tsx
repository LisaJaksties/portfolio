type Descriptionprops= {
    title: string;
    description: string;
}

export default function Descriptionsection({title, description}: Descriptionprops) {
    return (
        <div className="pt-10 md:pt-24 pb-24">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            <p className="text-gray-700 m-2">{description}</p>
        </div>

    );
}