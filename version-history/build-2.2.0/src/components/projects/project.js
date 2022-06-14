import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
    const features = props.features;
    const structure = props.structure;

    return (
        <div className="py-40 px-10 md:px-0 md:w-3/5 mx-auto space-y-10">
            <div className="space-y-3">
                <h1 className="text-center underline decoration-primary font-semibold mb-16">{props.heading}</h1>
                <Link className="text-quaternary-text hover:underline decoration-quaternary-text-hover hover:text-quaternary-text-hover" to="/projects">← Go Back</Link>

                <div className="flex flex-row justify-between">
                    <a id="projectLink" className="text-quaternary-text" href={props.projectLink}>View project</a>
                    <a id="projectLink" className="text-quaternary-text" href={props.repoLink}>View Code</a>
                </div>
            </div>
            
            <div className="space-y-10">
                <p>{props.overview}</p>
     
                <img className="mx-auto"  src={props.projectImage} alt="Image of project"/>

                <div className="py-10 space-y-10 md:space-y-0 md:flex md:space-x-20 border-y-2 border-primary">
                    <div className="space-y-10">
                        <h3 className="font-semibold">Features</h3>
                        <ul className="space-y-10">
                            {features.map((features) =>
                                <li className="list-disc marker:text-primary ml-4 text-2xl">{features}</li>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h3 className="font-semibold">Structure</h3>
                        <ul className="space-y-10">
                            {structure.map((structure) =>
                                <li className="list-disc marker:text-primary ml-4 text-2xl">{structure}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Target</h3>
                        <p>{props.target}</p>
                    </div>

                    <div className="image-container"><img className="mx-auto" src={props.targetImage} alt="Image of project" /></div>
                </section>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Issues</h3>
                        <p>{props.issues}</p>
                    </div>

                    <div className="image-container"><img className="mx-auto"  src={props.issuesImage} alt="Image of project" /></div>
                </section>

                <section className="space-y-10">
                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Resolutions</h3>
                        <p>{props.resolutions}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}