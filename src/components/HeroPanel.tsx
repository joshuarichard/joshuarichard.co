import styled from "styled-components";
import { BLUE, GREEN, RED, BLACK, CREAM } from "../theme/colors";
import { Panel } from "./common/Layout";
import { techGroups } from "../data/techGroups";
import resumePdf from "../assets/joshua_richard_resume_2025.pdf";

const Container = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${CREAM};
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 52px 48px 52px 64px;
  border-right: 3px solid rgba(17, 17, 17, 0.1);

  @media (max-width: 768px) {
    padding: 40px 24px;
    border-right: none;
    gap: 40px;
  }
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ColorSquare = styled.div`
  width: 32px;
  height: 32px;
`;

const TaglineText = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: rgba(17, 17, 17, 0.45);
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-family: "Staatliches", sans-serif;
  font-size: clamp(88px, 10vw, 148px);
  line-height: 0.88;
  color: ${BLACK};
  margin: 0 0 28px 0;
  letter-spacing: 0.01em;

  @media (max-width: 768px) {
    font-size: 64px;
    margin: 0 0 20px 0;
  }
`;

const Bio = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: rgba(17, 17, 17, 0.5);
  line-height: 1.7;
  max-width: 320px;
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled.a<{ $highlight?: boolean }>`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(p) => (p.$highlight ? RED : "rgba(17,17,17,0.4)")};
  text-decoration: none;
  border-bottom: 1px solid
    ${(p) => (p.$highlight ? RED : "rgba(17,17,17,0.2)")};
  padding-bottom: 2px;
`;

const Right = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 24px 40px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const GeoRedBar = styled.div`
  position: absolute;
  left: 40px;
  top: 60px;
  width: 110px;
  height: 280px;
  background: ${RED};

  @media (max-width: 768px) {
    display: none;
  }
`;

const GeoGreenBox = styled.div`
  position: absolute;
  left: 150px;
  bottom: 0;
  width: 130px;
  height: 130px;
  background: ${GREEN};

  @media (max-width: 768px) {
    display: none;
  }
`;

const GeoLine = styled.div`
  position: absolute;
  left: 40px;
  top: 50%;
  width: 45%;
  height: 3px;
  background: ${BLACK};
  opacity: 0.15;

  @media (max-width: 768px) {
    display: none;
  }
`;


const TechStack = styled.div`
  position: absolute;
  top: calc(50% + 20px);
  left: 40px;
  width: 45%;
  z-index: 2;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const TechLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.35);
  margin-bottom: 14px;
`;

const TechGroup = styled.div`
  border-top: 1px solid rgba(17, 17, 17, 0.1);
  padding-top: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TechGroupLabel = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.3);
  margin-bottom: 4px;
`;

const TechGroupItems = styled.div`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.7);
  line-height: 1.6;
`;

export function HeroPanel() {
  return (
    <Container>
      <Left>
        <Tagline>
          <ColorSquare style={{ background: BLUE }} />
          <ColorSquare style={{ background: GREEN }} />
          <ColorSquare style={{ background: RED }} />
          <TaglineText>
            Engineering Team Lead &middot; 10 Yrs Experience
          </TaglineText>
        </Tagline>

        <div>
          <Name>
            JOSHUA
            <br />
            RICHARD
          </Name>
          <Bio>
            10 years in software, 5 in management. TypeScript, React, Postgres,
            containerization, and serverless.
          </Bio>
        </div>

        <Links>
          <Link
            href="https://www.linkedin.com/in/joshuajrichard/"
            target="_blank"
            rel="noopener noreferrer"
            $highlight
          >
            LinkedIn
          </Link>
          <Link href="mailto:jobs@joshuarichard.co">
            jobs@joshuarichard.co
          </Link>
          <Link href={resumePdf} target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </Links>
      </Left>

      <Right>
        <GeoCircle />
        <GeoRedBar />
        <GeoGreenBox />
        <GeoLine />

        <TechStack>
          <TechLabel>Tech Stack</TechLabel>
          {techGroups.map((g) => (
            <TechGroup key={g.label}>
              <TechGroupLabel>{g.label}</TechGroupLabel>
              <TechGroupItems>{g.items}</TechGroupItems>
            </TechGroup>
          ))}
        </TechStack>
      </Right>
    </Container>
  );
}
