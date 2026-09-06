export const SITE_TITLE = 'varaprasadh.dev';
export const SITE_DESCRIPTION = 'Associate Software Architect. Building enterprise systems from design to deployment.';

export const SOCIAL_LINKS = {
  github: 'https://github.com/varaprasadh',
  twitter: 'https://twitter.com/consious_coder',
  linkedin: 'https://www.linkedin.com/in/varaprasadh',
};

export type Project = {
  title: string;
  desc: string;
  url: string;
  badge?: string;
  image?: string;
};

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    title: "Fleetenable",
    desc: "Fleet management platform. Currently building Able — the AI engine powering fleet intelligence and automation.",
    url: "https://fleetenable.com/",
    badge: "ONGOING",
  },
  {
    title: "PGT Services",
    desc: "Built the platform from foundation — load board, rating, BOL generation.",
    url: "https://www.pgt-services.com/",
    image: "/images/projects/pgt_services.png",
  },
  {
    title: "Uber Freight × Transplace",
    desc: "Logistics solutions for managing supply chain and transportation.",
    url: "https://www.uberfreight.com/",
    image: "/images/projects/uberfreight.png",
  },
  {
    title: "Becker Logistics",
    desc: "Rating engine that streamlines pricing team's rating and bidding workflows.",
    url: "https://www.beckerlogistics.com/",
    image: "/images/projects/becker.png",
  },
  {
    title: "Blended Sense",
    desc: "Media production platform for brands and agencies to create content at scale.",
    url: "https://www.blendedsense.com/",
    image: "/images/projects/blendedsense.png",
  },
  {
    title: "Leverage",
    desc: "Automated end-to-end supply chain visibility across purchase orders, shipments, and inventory.",
    url: "https://www.tryleverage.ai/",
    image: "/images/projects/leverage.png",
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    title: "Sparkly",
    desc: "Your Chrome new tab, finally at full power. Universal search across tabs, history, and the web. Google Workspace integration, tab manager, dev news feed, launchpad — all in one free extension.",
    url: "https://sparklytab.dev",
    badge: "FEATURED",
    image: "/images/projects/sparkly.png",
  },
  {
    title: "Packify",
    desc: "3D container load planner and visualizer for the bin packing problem. Hackathon winner.",
    url: "https://github.com/varaprasadh/Packify",
    image: "/images/projects/packify.png",
  },
  {
    title: "AlienBook",
    desc: "An enhanced social media platform.",
    url: "https://github.com/varaprasadh/Alienbook",
    image: "/images/projects/alienbook.png",
  },
  {
    title: "Chain Reaction 3D",
    desc: "3D version of Chain Reaction game using BFS algorithm and Three.js.",
    url: "https://github.com/varaprasadh/ChainReaction-web-algorithm",
  },
];
