import React from "react";
import "./index.scss";

type PropType = {
  img: any;
  title: string;
  desc: string;
  tech: string[];
  liveLink?: string;
  sourceLink?: string;
  private?: true;
  onlySourceCodeLink?: string;
};

const Project = (props: PropType) => {
  return (
    <div className="project">
      <div className="image">
        <div className="overlay">
          <img src={props.img} />
        </div>
      </div>
      <div className="content">
        {props.private && <span className="private-banner">Private</span>}
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        <div className="techs">
          {props.tech.map((tech) => (
            <p className="tech">{tech}</p>
          ))}
        </div>
        <div className="buttons">
          {props.private ? (
            <a href="#contact" className="button" style={{width: "100%"}}>
              Request Access
            </a>
          ) : props.onlySourceCodeLink ? (
            <a
              href={props.onlySourceCodeLink}
              target="_blank"
              className="button"
              style={{width: "100%"}}
            >
              Source Code
            </a>
          ) : (
            <>
              <a href={props.liveLink} target="_blank" className="live button">
                Live Site
              </a>
              <a
                href={props.sourceLink}
                target="_blank"
                className="source button"
              >
                Source Code
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
