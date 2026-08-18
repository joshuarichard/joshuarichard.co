import styled from "styled-components";
import { BLUE, RED, WHITE } from "../theme/colors";
import { Panel } from "./common/Layout";
import { SectionStrip, StripLabel } from "./common/SectionStrip";
import { contactLinks } from "../data/contactLinks";

const Container = styled(Panel)`
  width: 100vw;
  height: 100vh;
  background: ${BLUE};
  display: grid;
  grid-template-columns: 56px 1fr;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const Title = styled.h2`
  font-family: "Staatliches", sans-serif;
  font-size: clamp(80px, 10vw, 148px);
  color: ${WHITE};
  line-height: 0.88;
  margin: 0 0 56px 0;

  @media (max-width: 768px) {
    font-size: 56px;
    margin: 0 0 32px 0;
  }
`;

const Row = styled.a<{ $first: boolean; $last: boolean }>`
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4px;
    padding: 16px 0;
  }
`;

const Label = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(244, 241, 236, 0.4);
`;

const Value = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 32px;
  color: ${WHITE};
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Copyright = styled.div`
  font-family: "Barlow", sans-serif;
  font-size: 11px;
  color: rgba(244, 241, 236, 0.25);
  letter-spacing: 0.08em;
`;

export function ContactPanel() {
  return (
    <Container>
      <SectionStrip $bg={RED} $color={WHITE}>
        <StripLabel $color={WHITE}>03 — CONTACT</StripLabel>
      </SectionStrip>

      <Content>
        <div>
          <Title>
            GET IN
            <br />
            TOUCH
          </Title>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {contactLinks.map((l, i) => (
              <Row
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                $first={i === 0}
                $last={i === contactLinks.length - 1}
              >
                <Label>{l.label}</Label>
                <Value>{l.value}</Value>
              </Row>
            ))}
          </div>
        </div>

        <Copyright>&copy; 2026 Joshua Richard</Copyright>
      </Content>
    </Container>
  );
}
