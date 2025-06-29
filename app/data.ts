type Project = {
  name: string;
  description: string;
  link: string;
  mediaType: "video" | "image";
  mediaUrl: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Stormhacks website",
    description:
      "Main promotional website for Stormhacks, Simon Fraser University's largest MLH-accredited hackathon",
    link: "https://github.com/ChrisFong604/Qwiki",
    mediaType: "image",
    mediaUrl: "/stormhacks.png",
    id: "1",
  },
  {
    name: "SFU Surge website",
    description:
      "Main promotional website for SFU Surge, An all-inclusive club designated to empower students for success in the tech industry",
    link: "https://github.com/ChrisFong604/Qwiki",
    mediaType: "image",
    mediaUrl: "/sfusurge.png",
    id: "2",
  },
  {
    name: "Battle To-do",
    description:
      "A functional to-do list application that additionally serves as a simple but effective multiplayer game",
    link: "https://github.com/ChrisFong604/battle-todo",
    mediaType: "image",
    mediaUrl:
      "https://github.com/patrick-5546/battle-todo/raw/main/Screenshots/Login.png",
    id: "3",
  },
  {
    name: "Qwiki - Multiplayer Wikipedia Racer",
    description:
      "Race friends or join a quick queue and play with other wikipedia enthusiasts! Building in NextJS and Golang",
    link: "https://github.com/ChrisFong604/Qwiki",
    mediaType: "image",
    mediaUrl: "/qwiki.png",
    id: "4",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Insurance Corporation of British Columbia",
    title: "Co-op Student Developer",
    start: "May 2024",
    end: "Present",
    link: "https://icbc.com/",
    id: "work1",
  },
  {
    company: "BGC Engineering",
    title: "Co-op Web Developer",
    start: "January 2022",
    end: "August 2024",
    link: "https://www.bgcengineering.ca/",
    id: "work2",
  },
  {
    company: "SFU Surge",
    title: "Logistics/Technology Director",
    start: "2021",
    end: "Present",
    link: "https://www.sfusurge.com",
    id: "work3",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "No blog post yet",
    description: "Coming soon!",
    link: "/",
    uid: "1",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/ChrisFong604",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ChrisFong604",
  },
];

export const EMAIL = "ccffoonngg@hotmail.ca";
