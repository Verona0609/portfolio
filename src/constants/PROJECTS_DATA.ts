export interface Project {
  id: number;
  title: string;
  description: string;
  imageMob?: string;
  imageDesk?: string;
  github: string;
  liveDemo: string;
}
export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'TRAVEL TRUCKS',
    description:
      'is web application for browsing and renting campers. The app is built with React, Redux Toolkit, and CSS Module and deployed on Vercel. It features a camper catalog, filtering, and a favorites system — all within a clean, responsive UI.',
    imageMob: '/src/assets/images/projects/project1-mob.webp',
    imageDesk: '/src/assets/images/projects/project1-desk.webp',
    github: 'https://github.com/Verona0609/TravelTrucks',
    liveDemo: 'https://travel-trucks-pied-three.vercel.app/',
  },
  {
    id: 2,
    title: 'ADOPTLY',
    description:
      'is react frontend application providing a clean, user-friendly interface to interact with a Gitea backend. Built with modern web development tools, it follows best practices for scalability and maintainability.',
    imageMob: '/src/assets/images/projects/project2-mob.webp',
    imageDesk: '/src/assets/images/projects/project2-desk.webp',
    github: 'https://github.com/DFurtune/adoptly-frontend',
    liveDemo: 'https://dfurtune.github.io/adoptly-frontend/',
  },
  {
    id: 3,
    title: 'AQUATRACK',
    description:
      'is modern water tracker built with React and Redux Toolkit. Allows users to monitor daily water intake, set personal goals, and track progress. Features user authentication, data persistence, and responsive design.',
    imageMob: '/src/assets/images/projects/project3-mob.webp',
    imageDesk: '/src/assets/images/projects/project3-desk.webp',
    github: 'https://github.com/Verona0609/aqua-track-project',
    liveDemo: 'https://aqua-track-project.netlify.app/',
  },
  {
    id: 4,
    title: 'SAVORY STORIES',
    description:
      'is a web application that allows users to browse and add recipes accompanied by personal stories. Each recipe is paired with a story, adding context and an emotional touch to the dish.',
    imageMob: '/src/assets/images/projects/project4-mob.webp',
    imageDesk: '/src/assets/images/projects/project4-desk.webp',
    github: 'https://github.com/Verona0609/Savory-stories',
    liveDemo: 'https://savory-stories.netlify.app/',
  },
  {
    id: 5,
    title: 'PORTFOLIO',
    description:
      'is modern water tracker built with React and Redux Toolkit. Allows users to monitor daily water intake, set personal goals, and track progress. Features user authentication, data persistence, and responsive design.',
    imageMob: '/src/assets/images/projects/project5-mob.webp',
    imageDesk: '/src/assets/images/projects/project5-desk.webp',
    github: 'https://github.com/mrBidone/team-js-project-portfolio',
    liveDemo: 'https://mrbidone.github.io/team-js-project-portfolio/',
  },
];
