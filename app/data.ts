type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
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
    name: "Motion Primitives Pro",
    description:
      "Advanced components and templates to craft beautiful websites.",
    link: "https://pro.motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
    id: "project1",
  },
  {
    name: "Motion Primitives",
    description: "UI kit to make beautiful, animated interfaces.",
    link: "https://motion-primitives.com/",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
    id: "project2",
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
