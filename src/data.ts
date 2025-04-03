import image from "../public/cocktail-website-thumbnail.jpg";

export const homepage = {
  preTitle: "Hello, World! I'm",
  title: "CONNOR GAWLEY,",
  postTitle:
    "a developer passionate about crafting exciting and immersive software experiences.",
  imagePath: "avatar.png",
};

export type ProjectInfo = {
  title: string;
  description: string;
  imageObject: string;
};

export const projects = {
  title: "Here are some projects I've been working on:",
  items: [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageObject: image,
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageObject: image,
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      imageObject: image,
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      imageObject: image,
    },
    {
      title: "Project 5",
      description: "Description of project 5",
      imageObject: image,
    },
    {
      title: "Project 6",
      description: "Description of project 6",
      imageObject: image,
    },
    {
      title: "Project 7",
      description: "Description of project 7",
      imageObject: image,
    },
  ],
};
