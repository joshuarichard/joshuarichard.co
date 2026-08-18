import { useRef, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const RED = "#ED1C24";
const GREEN = "#009B4D";
const BLUE = "#003DA5";
const BLACK = "#111111";
const WHITE = "#F4F1EC";
const CREAM = "#EDE8DF";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow: hidden;
    height: 100%;
    background: ${BLACK};
  }

  #root {
    height: 100vh;
    overflow: hidden;
  }
`;

const Viewport = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${BLACK};
`;

const ScrollTrack = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Panel = styled.div`
  flex-shrink: 0;
`;

// ── Nav Dots ──

const DotsContainer = styled.div`
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 100;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: ${(p) => (p.$active ? "28px" : "8px")};
  height: 8px;
  background: ${(p) => (p.$active ? GREEN : "rgba(244,241,236,0.3)")};
  transition: all 0.3s ease;
`;

function NavDots({ count, active }: { count: number; active: number }) {
  return (
    <DotsContainer>
      {Array.from({ length: count }).map((_, i) => (
        <Dot key={i} $active={i === active} />
      ))}
    </DotsContainer>
  );
}

// ── Panel 1 — Hero ──

const HeroContainer = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${BLACK};
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  position: relative;
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 52px 48px 52px 64px;
  border-right: 3px solid rgba(244, 241, 236, 0.1);
`;

const HeroTagline = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const RedSquare = styled.div`
  width: 32px;
  height: 32px;
  background: ${RED};
`;

const TaglineText = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: rgba(244, 241, 236, 0.45);
  text-transform: uppercase;
`;

const HeroName = styled.h1`
  font-family: "Staatliches", sans-serif;
  font-size: clamp(88px, 10vw, 148px);
  line-height: 0.88;
  color: ${WHITE};
  margin: 0 0 28px 0;
  letter-spacing: 0.01em;
`;

const HeroBio = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: rgba(244, 241, 236, 0.5);
  line-height: 1.7;
  max-width: 320px;
  margin: 0;
`;

const HeroLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const HeroLink = styled.a<{ $highlight?: boolean }>`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(p) => (p.$highlight ? GREEN : "rgba(244,241,236,0.4)")};
  text-decoration: none;
  border-bottom: 1px solid
    ${(p) => (p.$highlight ? GREEN : "rgba(244,241,236,0.2)")};
  padding-bottom: 2px;
`;

const HeroRight = styled.div`
  position: relative;
  overflow: hidden;
`;

const GeoCircle = styled.div`
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${BLUE};
`;

const GeoRedBar = styled.div`
  position: absolute;
  left: 40px;
  top: 60px;
  width: 110px;
  height: 280px;
  background: ${RED};
`;

const GeoYellowBox = styled.div`
  position: absolute;
  left: 150px;
  bottom: 0;
  width: 130px;
  height: 130px;
  background: ${GREEN};
`;

const GeoLine = styled.div`
  position: absolute;
  left: 40px;
  top: 50%;
  width: 55%;
  height: 3px;
  background: ${WHITE};
  opacity: 0.15;
`;

const GeoGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(244, 241, 236, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244, 241, 236, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`;

const HeroTechStack = styled.div`
  position: absolute;
  top: calc(50% + 20px);
  left: 40px;
  width: 55%;
  z-index: 2;
`;

const HeroTechLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.35);
  margin-bottom: 14px;
`;

const HeroTechGroup = styled.div`
  border-top: 1px solid rgba(244, 241, 236, 0.1);
  padding-top: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HeroTechGroupLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.3);
  margin-bottom: 4px;
`;

const HeroTechGroupItems = styled.div`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: rgba(244, 241, 236, 0.7);
  line-height: 1.6;
`;

function HeroPanel() {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroTagline>
          <RedSquare />
          <TaglineText>
            Engineering Team Lead &middot; 10 Yrs Experience
          </TaglineText>
        </HeroTagline>

        <div>
          <HeroName>
            JOSHUA
            <br />
            RICHARD
          </HeroName>
          <HeroBio>
            10 years in software, 5 in management. TypeScript, React, Postgres,
            containerization, and serverless.
          </HeroBio>
        </div>

        <HeroLinks>
          <HeroLink
            href="https://www.linkedin.com/in/joshuajrichard/"
            target="_blank"
            rel="noopener noreferrer"
            $highlight
          >
            LinkedIn
          </HeroLink>
          <HeroLink href="mailto:jobs@joshuarichard.co">
            jobs@joshuarichard.co
          </HeroLink>
        </HeroLinks>
      </HeroLeft>

      <HeroRight>
        <GeoCircle />
        <GeoRedBar />
        <GeoYellowBox />
        <GeoLine />
        <GeoGrid />

        <HeroTechStack>
          <HeroTechLabel>Tech Stack</HeroTechLabel>
          {techGroups.map((g) => (
            <HeroTechGroup key={g.label}>
              <HeroTechGroupLabel>{g.label}</HeroTechGroupLabel>
              <HeroTechGroupItems>{g.items}</HeroTechGroupItems>
            </HeroTechGroup>
          ))}
        </HeroTechStack>
      </HeroRight>
    </HeroContainer>
  );
}

// ── Panel 2 — Projects ──

const projects = [
  {
    key: "portfolio",
    title: "JOSHUARICHARD.CO",
    year: "2026",
    accent: RED,
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
    accent: BLUE,
    url: "https://github.com/joshuarichard/music-timeline",
    desc: "Personal music timeline tracking favorite records across the years. Data persisted in Airtable, deployed as a static site on AWS S3.",
    tags: ["TypeScript", "Airtable", "AWS S3"],
  },
  {
    key: "gybote",
    title: "GYBOTE",
    year: "2022",
    accent: RED,
    url: "https://github.com/joshuarichard/gybote",
    desc: "Twitter bot that posts Godspeed You! Black Emperor lyrics on a configurable interval. Supports custom lyric dictionaries.",
    tags: ["Python", "Tweepy", "Twitter API"],
  },
];

const ProjectsContainer = styled(Panel)`
  width: 160vw;
  height: 100vh;
  background: ${BLACK};
  display: grid;
  grid-template-columns: 56px 1fr;
  overflow: hidden;
`;

const SectionStrip = styled.div<{ $bg: string; $color: string }>`
  background: ${(p) => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StripLabel = styled.span<{ $color: string }>`
  font-family: "Staatliches", sans-serif;
  font-size: 22px;
  color: ${(p) => p.$color};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.1em;
`;

const ProjectsContent = styled.div`
  padding: 56px 64px;
  display: flex;
  flex-direction: column;
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid rgba(244, 241, 236, 0.1);
  padding-bottom: 20px;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 72px;
  color: ${WHITE};
  margin: 0;
  line-height: 1;
`;

const GithubLink = styled.a`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.35);
  text-decoration: none;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;
`;

const ProjectCard = styled.div<{ $accent: string; $hovered: boolean }>`
  height: 100%;
  background: ${(p) => (p.$hovered ? p.$accent : "rgba(244,241,236,0.04)")};
  border: 1px solid ${(p) => (p.$hovered ? p.$accent : "rgba(244,241,236,0.1)")};
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    background 0.25s,
    border-color 0.25s;
  cursor: pointer;
  min-height: 340px;
`;

function hoverFg() {
  return WHITE;
}

function hoverMuted(hovered: boolean) {
  return hovered ? "rgba(244,241,236,0.8)" : "rgba(244,241,236,0.5)";
}

function hoverDim(hovered: boolean) {
  return hovered ? WHITE : "rgba(244,241,236,0.2)";
}

function ProjectsPanel() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ProjectsContainer>
      <SectionStrip $bg={RED} $color={WHITE}>
        <StripLabel $color={WHITE}>01 — PROJECTS</StripLabel>
      </SectionStrip>

      <ProjectsContent>
        <ProjectsHeader>
          <SectionTitle>SELECTED PROJECTS</SectionTitle>
          <GithubLink
            href="https://github.com/joshuarichard"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/joshuarichard ↗
          </GithubLink>
        </ProjectsHeader>

        <ProjectsGrid>
          {projects.map((p) => {
            const isHovered = hovered === p.key;
            return (
              <a
                key={p.key}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                onMouseEnter={() => setHovered(p.key)}
                onMouseLeave={() => setHovered(null)}
              >
                <ProjectCard $accent={p.accent} $hovered={isHovered}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 24,
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          background: isHovered ? WHITE : p.accent,
                          transition: "background 0.25s",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Staatliches', sans-serif",
                          fontSize: 20,
                          color: hoverDim(isHovered),
                          transition: "color 0.25s",
                        }}
                      >
                        {p.year}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Staatliches', sans-serif",
                        fontSize: 48,
                        color: hoverFg(),
                        margin: "0 0 12px 0",
                        lineHeight: 1,
                        transition: "color 0.25s",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 300,
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: hoverMuted(isHovered),
                        margin: 0,
                        transition: "color 0.25s",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        height: 1,
                        background: isHovered
                          ? "rgba(244,241,236,0.2)"
                          : "rgba(244,241,236,0.08)",
                        marginBottom: 16,
                        transition: "background 0.25s",
                      }}
                    />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: isHovered
                              ? "rgba(244,241,236,0.7)"
                              : "rgba(244,241,236,0.35)",
                            border: `1px solid ${
                              isHovered
                                ? "rgba(244,241,236,0.3)"
                                : "rgba(244,241,236,0.1)"
                            }`,
                            padding: "3px 8px",
                            transition: "all 0.25s",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ProjectCard>
              </a>
            );
          })}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
}

// ── Panel 3 — Experience ──

const jobs = [
  {
    company: "Tulip",
    title: "Engineering Team Lead",
    period: "Feb 2021 – Jul 2026",
    location: "Somerville, MA",
    accent: RED,
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
    accent: BLUE,
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
    accent: RED,
    bullets: [
      "Built a portal and dashboard providing technical and financial insights into IBM Cloud offerings",
    ],
  },
];

const techGroups = [
  { label: "Languages", items: "TypeScript · JavaScript · Python" },
  {
    label: "Frameworks",
    items: "React · Node.js · Redux · Next.js · Jest · Cypress",
  },
  {
    label: "Databases",
    items: "PostgreSQL · MongoDB · Redis · ElasticSearch · Cassandra",
  },
  {
    label: "Infrastructure",
    items: "Kubernetes · Docker · AWS Lambda · AWS EC2 · GHA · Jenkins",
  },
];

const ExperienceContainer = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${CREAM};
  display: grid;
  grid-template-columns: 56px 1.2fr 0.8fr;
  overflow: hidden;
`;

const WorkColumn = styled.div`
  padding: 36px 48px 36px;
  border-right: 2px solid rgba(17, 17, 17, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const EducationColumn = styled.div`
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WorkTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 64px;
  color: ${BLACK};
  margin: 0 0 24px 0;
  line-height: 0.95;
`;

const JobRow = styled.div<{ $last: boolean }>`
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 20px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: ${(p) => (p.$last ? "none" : "1px solid rgba(17,17,17,0.12)")};
`;

const JobDot = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  background: ${(p) => p.$color};
  margin-top: 4px;
`;

const CompanyName = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 28px;
  color: ${BLACK};
  letter-spacing: 0.02em;
`;

const JobTitle = styled.span`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: rgba(17, 17, 17, 0.6);
  margin-left: 10px;
`;

const JobMeta = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.6);
  margin-bottom: 12px;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BulletItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const BulletIcon = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
  margin-top: 5px;
  font-size: 8px;
  flex-shrink: 0;
`;

const BulletText = styled.span`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.65);
  line-height: 1.65;
`;


function ExperiencePanel() {
  return (
    <ExperienceContainer>
      <SectionStrip $bg={GREEN} $color={BLACK}>
        <StripLabel $color={BLACK}>02 — EXPERIENCE</StripLabel>
      </SectionStrip>

      <WorkColumn>
        <WorkTitle>
          WORK
          <br />
          HISTORY
        </WorkTitle>

        {jobs.map((j, i) => (
          <JobRow key={i} $last={i === jobs.length - 1}>
            <div>
              <JobDot $color={j.accent} />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 4,
                }}
              >
                <div>
                  <CompanyName>{j.company}</CompanyName>
                  <JobTitle>{j.title}</JobTitle>
                </div>
              </div>
              <JobMeta>
                {j.period} &middot; {j.location}
              </JobMeta>
              <BulletList>
                {j.bullets.map((b, bi) => (
                  <BulletItem key={bi}>
                    <BulletIcon $color={j.accent}>
                      ■
                    </BulletIcon>
                    <BulletText>{b}</BulletText>
                  </BulletItem>
                ))}
              </BulletList>
            </div>
          </JobRow>
        ))}

      </WorkColumn>

      <EducationColumn>
        <div>
          <WorkTitle>EDUCATION</WorkTitle>
          <div style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 20 }}>
            <span
              style={{
                fontFamily: "'Staatliches', sans-serif",
                fontSize: 28,
                color: BLACK,
                letterSpacing: "0.02em",
              }}
            >
              Gordon College
            </span>
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(17,17,17,0.6)",
                marginTop: 4,
              }}
            >
              B.S. Computer Science
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.6)",
                marginTop: 12,
              }}
            >
              2012 – 2016 &middot; Wenham, MA
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
          <div style={{ width: 64, height: 64, background: RED }} />
          <div style={{ width: 64, height: 64, background: BLUE }} />
          <div style={{ width: 64, height: 64, background: GREEN }} />
        </div>
      </EducationColumn>
    </ExperienceContainer>
  );
}

// ── Panel 4 — Contact ──

const contactLinks = [
  {
    label: "Email",
    value: "jobs@joshuarichard.co",
    href: "mailto:jobs@joshuarichard.co",
  },
  {
    label: "Phone",
    value: "(508) 463-5796",
    href: "tel:+15084635796",
  },
  {
    label: "LinkedIn",
    value: "/in/joshuajrichard",
    href: "https://www.linkedin.com/in/joshuajrichard/",
  },
  {
    label: "GitHub",
    value: "github.com/joshuarichard",
    href: "https://github.com/joshuarichard",
  },
];

const ContactContainer = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${BLUE};
  display: grid;
  grid-template-columns: 56px 1fr;
  overflow: hidden;
  position: relative;
`;

const ContactContent = styled.div`
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const ContactTitle = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: clamp(80px, 10vw, 148px);
  color: ${WHITE};
  line-height: 0.88;
  margin: 0 0 56px 0;
`;

const ContactRow = styled.a<{ $first: boolean; $last: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-top: ${(p) =>
    p.$first
      ? "2px solid rgba(244,241,236,0.3)"
      : "1px solid rgba(244,241,236,0.12)"};
  border-bottom: ${(p) =>
    p.$last ? "2px solid rgba(244,241,236,0.3)" : "none"};
  text-decoration: none;
`;

const ContactLabel = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.4);
`;

const ContactValue = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 32px;
  color: ${WHITE};
  letter-spacing: 0.02em;
`;

const Copyright = styled.div`
  font-family: "Barlow", sans-serif;
  font-size: 11px;
  color: rgba(244, 241, 236, 0.25);
  letter-spacing: 0.08em;
`;

const ContactCircle = styled.div`
  position: absolute;
  right: -120px;
  bottom: -120px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 80px solid rgba(244, 241, 236, 0.05);
  pointer-events: none;
`;

const ContactSquare = styled.div`
  position: absolute;
  right: 80px;
  top: 60px;
  width: 160px;
  height: 160px;
  background: rgba(214, 40, 40, 0.18);
  pointer-events: none;
`;

function ContactPanel() {
  return (
    <ContactContainer>
      <SectionStrip $bg={BLACK} $color={WHITE}>
        <StripLabel $color={WHITE}>03 — CONTACT</StripLabel>
      </SectionStrip>

      <ContactContent>
        <div>
          <ContactTitle>
            GET IN
            <br />
            TOUCH
          </ContactTitle>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {contactLinks.map((l, i) => (
              <ContactRow
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                $first={i === 0}
                $last={i === contactLinks.length - 1}
              >
                <ContactLabel>{l.label}</ContactLabel>
                <ContactValue>{l.value}</ContactValue>
              </ContactRow>
            ))}
          </div>
        </div>

        <Copyright>&copy; 2026 Joshua Richard</Copyright>
      </ContactContent>

      <ContactCircle />
      <ContactSquare />
    </ContactContainer>
  );
}

// ── Root ──

export default function App() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
      const idx = Math.round(progress * 3);
      setActivePanel(Math.min(3, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY + e.deltaX;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Viewport>
        <ScrollTrack ref={trackRef}>
          <HeroPanel />
          <ProjectsPanel />
          <ExperiencePanel />
          <ContactPanel />
        </ScrollTrack>
        <NavDots count={4} active={activePanel} />
      </Viewport>
    </>
  );
}
