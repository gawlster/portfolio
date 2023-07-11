import React from "react";
import "./index.scss";
import Project from "./components/Project";
import rosewald from "../../images/rosewald-thumbnail.jpg";
import nvim from "../../images/nvim-thumbnail.jpg";
import cf from "../../images/cocktail-website-thumbnail.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h1>These are some projects I have been working on:</h1>
      <Project
        img={rosewald}
        title="Rosewald Studios"
        desc="A portfolio site for Rosewald Studios, a local photography studio"
        tech={["NextJS", "Tailwind"]}
        liveLink="https://rosewaldstudios.ca"
        sourceLink="https://github.com/gawlster/rosewald"
      />

      <Project
        img={nvim}
        title="Nvim config"
        desc="A custom Neovim configuration consisting of plugins and custom scripts"
        tech={["Lua", "VimScript"]}
        onlySourceCodeLink="https://github.com/gawlster/nvim"
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
