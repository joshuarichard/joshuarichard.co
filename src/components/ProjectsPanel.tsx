import { useState } from "react";
import styled from "styled-components";
import { BLACK, WHITE } from "../theme/colors";
import { Panel } from "./common/Layout";
import { SectionStrip, StripLabel } from "./common/SectionStrip";
import { GREEN } from "../theme/colors";
import { projects } from "../data/projects";

const Container = styled(Panel)`
  width: 160vw;
  height: 100vh;
  background: ${BLACK};
  display: grid;
  grid-template-columns: 56px 1fr;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    grid-template-columns: 1fr;
    overflow: hidden;
  }
`;

const Content = styled.div`
  padding: 56px 64px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 24px;
    min-width: 0;
    overflow: hidden;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid rgba(244, 241, 236, 0.1);
  padding-bottom: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Title = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 72px;
  color: ${WHITE};
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const GithubLink = styled.a`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.35);
  text-decoration: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div<{ $accent: string; $hovered: boolean }>`
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
  min-width: 0;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 24px;
  }
`;

const CardTitle = styled.h3`
  font-family: "Staatliches", sans-serif;
  font-size: 48px;
  color: ${WHITE};
  margin: 0 0 12px 0;
  line-height: 1;
  transition: color 0.25s;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

function hoverMuted(hovered: boolean) {
  return hovered ? "rgba(244,241,236,0.8)" : "rgba(244,241,236,0.5)";
}

function hoverDim(hovered: boolean) {
  return hovered ? WHITE : "rgba(244,241,236,0.2)";
}

export function ProjectsPanel() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Container>
      <SectionStrip $bg={GREEN} $color={WHITE}>
        <StripLabel $color={WHITE}>02 — PROJECTS</StripLabel>
      </SectionStrip>

      <Content>
        <Header>
          <Title>SELECTED PROJECTS</Title>
          <GithubLink
            href="https://github.com/joshuarichard"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/joshuarichard ↗
          </GithubLink>
        </Header>

        <Grid>
          {projects.map((p) => {
            const isHovered = hovered === p.key;
            return (
              <a
                key={p.key}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", minWidth: 0, overflow: "hidden" }}
                onMouseEnter={() => setHovered(p.key)}
                onMouseLeave={() => setHovered(null)}
              >
                <Card $accent={p.accent} $hovered={isHovered}>
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
                    <CardTitle>{p.title}</CardTitle>
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
                </Card>
              </a>
            );
          })}
        </Grid>
      </Content>
    </Container>
  );
}
