import cf from "../../images/cocktail-website-thumbnail.jpg";
import rayTracer from "../../images/RayTracerSample.png";
import rosewald from "../../images/rosewald-thumbnail.jpg";
import Project from "./components/Project";
import "./index.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Some projects I have been working on:</h1>
      <Project
        img={rosewald}
        title="Rosewald Studios"
        desc="A portfolio site for Rosewald Studios, a local photography studio"
        tech={["NextJS", "Tailwind"]}
        liveLink="https://rosewaldstudios.ca"
        sourceLink="https://github.com/gawlster/rosewald"
      />

      <Project
        img={rayTracer}
        title="Ray Tracer"
        desc="A dynamic, recursive ray tracing program which can render arbitrary spheres and ellipsoids"
        tech={["Python", "OOP"]}
        private
      />

      <Project
        img={cf}
        title="Cocktail Finder"
        desc="A webapp to explore and search for cocktail recipes"
        tech={["HTML5", "SCSS", "JS"]}
        liveLink="https://webhome.csc.uvic.ca/~connorgawley/project2"
        sourceLink="https://github.com/gawlster/cocktail-website"
      />
      <a href="https://github.com/gawlster" className="button">
        More of my projects
      </a>
    </div>
  );
};

export default Projects;
