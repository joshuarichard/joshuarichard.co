import { BLUE, GREEN, RED } from "../theme/colors";

export const projects = [
  {
    key: "portfolio",
    title: "JOSHUARICHARD.CO",
    year: "2026",
    accent: BLUE,
    url: "https://github.com/joshuarichard/joshuarichard.co",
    desc: "This portfolio — a Bauhaus-themed horizontally-scrolling site built with React, Vite, and styled-components.",
    tags: ["React", "TypeScript", "Vite", "styled-components"],
  },
  {
    key: "statsplus",
    title: "STATSPLUS MCP",
    year: "2026",
    accent: GREEN,
    url: "https://github.com/joshuarichard/StatsPlus-MCP",
    desc: "MCP server exposing the StatsPlus API as 13 tools for Claude — covering player stats, ratings, contracts, draft picks, and game history for OOTP baseball.",
    tags: ["TypeScript", "MCP", "Node 18+", "Vitest"],
  },
  {
    key: "music",
    title: "MUSIC TIMELINE",
    year: "2023",
    accent: RED,
    url: "https://music-timeline.s3.amazonaws.com/index.html",
    desc: "Personal music timeline tracking favorite records across the years. Data persisted in Airtable, deployed as a static site on AWS S3.",
    tags: ["TypeScript", "Airtable", "AWS S3"],
  },
  {
    key: "gybote",
    title: "GYBOTE",
    year: "2015",
    accent: BLUE,
    url: "https://x.com/gybote",
    desc: "Twitter bot that posts Godspeed You! Black Emperor lyrics on a configurable interval. Supports custom lyric dictionaries.",
    tags: ["Python", "Tweepy", "Twitter API"],
  },
];
