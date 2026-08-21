import styled from "styled-components";
import { BLUE, GREEN, RED, BLACK, WHITE, CREAM } from "../theme/colors";
import { Panel } from "./common/Layout";
import { SectionStrip, StripLabel } from "./common/SectionStrip";
import { jobs } from "../data/jobs";
import gordonLogo from "../assets/gordon_college_logo.png";

const Container = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${CREAM};
  display: grid;
  grid-template-columns: 56px 1.2fr 0.8fr;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
    overflow: visible;
  }
`;

const WorkColumn = styled.div`
  padding: 36px 48px 36px;
  border-right: 2px solid rgba(17, 17, 17, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 24px;
    border-right: none;
    overflow: visible;
  }
`;

const EducationColumn = styled.div`
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 24px 40px;
    gap: 32px;
  }
`;

const SectionHeading = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: 64px;
  color: ${BLACK};
  margin: 0 0 24px 0;
  line-height: 0.95;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const JobRow = styled.div<{ $last: boolean }>`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: ${(p) => (p.$last ? "none" : "1px solid rgba(17,17,17,0.12)")};
`;

const JobLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  margin-top: 2px;
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

export function ExperiencePanel() {
  return (
    <Container>
      <SectionStrip $bg={BLUE} $color={WHITE}>
        <StripLabel $color={WHITE}>01 — EXPERIENCE</StripLabel>
      </SectionStrip>

      <WorkColumn>
        <SectionHeading>WORK HISTORY</SectionHeading>

        {jobs.map((j, i) => (
          <JobRow key={i} $last={i === jobs.length - 1}>
            <div>
              <JobLogo src={j.logo} alt={j.company} />
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
          <SectionHeading>EDUCATION</SectionHeading>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
            <img src={gordonLogo} alt="Gordon College" style={{ width: 36, height: 36, objectFit: "contain" }} />
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
          </div>
          <div style={{ marginLeft: 48 }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.6)",
              }}
            >
              2012 – 2016 &middot; Wenham, MA
            </div>
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
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
          <div style={{ width: 64, height: 64, background: BLUE }} />
          <div style={{ width: 64, height: 64, background: GREEN }} />
          <div style={{ width: 64, height: 64, background: RED }} />
        </div>
      </EducationColumn>
    </Container>
  );
}
