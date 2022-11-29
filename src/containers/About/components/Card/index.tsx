import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import "./index.scss";

export interface Props {
    category: Types;
    interests?: Interest[];
    work?: Job[];
    techSkills?: string[];
    softSkills?: string[];
}
interface Interest {
    title: string;
    desc: string;
}
interface Job {
    title: string;
    subtitle: string;
    desc: string[];
}

export enum Types {
    Interests,
    WorkExperience,
    TechnicalSkills,
    SoftSkills,
}

const titles = ["Interests", "Work Experience", "Technical Skills", "Soft Skills"];

const Card = (props: Props) => {
    const [parent] = useAutoAnimate<HTMLDivElement>();
    const [showingFront, setShowingFront] = useState(true);

    function getCardFront() {
        return <h2>{titles[props.category]}</h2>;
    }

    function getInterests() {
        if (!props.interests) return;

        return (
            <div>
                {props.interests.map((interest) => {
                    return (
                        <div key={interest.title} className="content">
                            <h2 className="title">{interest.title}</h2>
                            <p>{interest.desc}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

    function getWorkExperience() {
        if (!props.work) return;

        return (
            <div>
                {props.work.map((job) => {
                    return (
                        <div key={job.title} className="content">
                            <h2 className="title">{job.title}</h2>
                            <h3 className="subtitle">{job.subtitle}</h3>
                            {job.desc.map((point) => {
                                return (
                                    <p key={point}>
                                        {"🡒 "}
                                        {point}
                                    </p>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    function getTechSkills() {
        if (!props.techSkills) return;

        return (
            <ul>
                {props.techSkills.map((skill) => {
                    return (
                        <li key={skill}>
                            {"✓ "}
                            {skill}
                        </li>
                    );
                })}
            </ul>
        );
    }

    function getSoftSkills() {
        if (!props.softSkills) return;

        return (
            <ul>
                {props.softSkills.map((skill) => {
                    return (
                        <li key={skill}>
                            {"✓ "}
                            {skill}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <div
            className="card"
            onClick={() => setShowingFront((showingFront) => !showingFront)}
            ref={parent}>
            {showingFront ? (
                getCardFront()
            ) : (
                <div className="back">
                    {props.category === Types.Interests && getInterests()}
                    {props.category === Types.WorkExperience && getWorkExperience()}
                    {props.category === Types.TechnicalSkills && getTechSkills()}
                    {props.category === Types.SoftSkills && getSoftSkills()}
                </div>
            )}
        </div>
    );
};

export default Card;
