import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardProject from "./CardProject";

const projects = [
  {
    title: "Social Media application",
    description:
      "A simple Social Media application (Twitter based/inspired) built with React.js and developed in the Node.js environment. MongoDB, Express.js, CSS, Bootstrap, and JWT tokens was also used.",
    getImageSrc: () => require("../images/social-media-app.png"),
    url: "https://github.com/skavvathas/Social-Media-App-React.js",
  },
  {
    title: "Login and Register Application",
    description:
      "The project is a simple Login and Register website built with React.js with Authentication.",
    getImageSrc: () => require("../images/login-register.png"),
    url: "https://github.com/skavvathas/Login-Register-with-Authentication-built-with-React.js",
  },
  {
    title: "To-Do List",
    description:
      "A simple to do list, built with Javascript, CSS, HTML",
    getImageSrc: () => require("../images/to-do-list.png"),
    url:"https://github.com/skavvathas/To-Do-List",
  },
  {
    title: "Project with Bootstrap",
    description:
      "TinDog website preview. A small project to practise Bootstrap.",
    getImageSrc: () => require("../images/bootstrap.jpg"),
    url: "https://github.com/skavvathas/TinDog-with-Bootstrap",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#18FFC1"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <CardProject
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
