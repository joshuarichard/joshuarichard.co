import { BLUE, GREEN, RED } from "../theme/colors";
import tulipLogo from "../assets/tulip_logo.png";
import shopadvisorLogo from "../assets/shopadvisor_logo.avif";
import ibmLogo from "../assets/IBM_logo.svg";

export const jobs = [
  {
    company: "Tulip",
    title: "Engineering Team Lead",
    period: "Feb 2021 – Jul 2026",
    location: "Somerville, MA",
    accent: BLUE,
    logo: tulipLogo,
    bullets: [
      "People lead for 2 full-stack engineering teams (5–10 engineers)",
      "Hired 7 FTEs and 2 interns",
      "Built and maintained Tulip Library, tulip.co, and features for the Tulip Platform",
      "Managed cross-functional stakeholders across PM, Design, Marketing, CS, and Exec",
    ],
  },
  {
    company: "Tulip",
    title: "Application Engineer",
    period: "Feb 2019 – Feb 2021",
    location: "Somerville, MA",
    accent: GREEN,
    logo: tulipLogo,
    bullets: [
      "Delivered customer success for multi-million dollar Enterprise accounts",
      "Owned technical implementations for strategic partnerships",
      "Built new product features supporting product maturity",
    ],
  },
  {
    company: "ShopAdvisor",
    title: "Lead Software Engineer",
    period: "Feb 2017 – Feb 2020",
    location: "Concord, MA",
    accent: RED,
    logo: shopadvisorLogo,
    bullets: [
      "Rebuilt the Product Search API to increase performance, scalability, and reduce cost",
      "Managed customer relationships across all technical engagements",
    ],
  },
  {
    company: "IBM",
    title: "Software Developer Intern",
    period: "Jun – Dec 2015",
    location: "Boston, MA",
    accent: BLUE,
    logo: ibmLogo,
    bullets: [
      "Built a portal and dashboard providing technical and financial insights into IBM Cloud offerings",
    ],
  },
];
