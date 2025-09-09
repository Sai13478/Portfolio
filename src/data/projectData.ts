import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Blog Application",
    description: "A modern application for effortless blogging and content sharing. Designed with a sleek UI and smooth navigation, it provides a distraction-free environment for writers and creators.",
    image: "/images/blog application.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Web Application",
    featured: true
  },
  {
    id: 2,
    title: "GenChat",
    description: "A dynamic chat platform that enables instant messaging between users. This project showcases my skills in creating seamless, real-time communication systems using modern web technologies.",
    image: "/images/GenC.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "TypeScript", "Socket.io", "Node.js"],
    category: "Real-time Application"
  },
  {
    id: 3,
    title: "Keep Notes Clone",
    description: "A simple and intuitive note-taking application designed to quickly capture and store notes, ideas, and reminders, syncing them across devices for effortless productivity.",
    image: "/images/to do.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: ["React", "TypeScript", "Local Storage", "CSS3"],
    category: "Productivity Tool"
  }
];
