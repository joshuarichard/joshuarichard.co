import styled from "styled-components";

export const SectionStrip = styled.div<{ $bg: string; $color: string }>`
  background: ${(p) => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px 24px;
    justify-content: flex-start;
  }
`;

export const StripLabel = styled.span<{ $color: string }>`
  font-family: "Staatliches", sans-serif;
  font-size: 22px;
  color: ${(p) => p.$color};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    transform: none;
  }
`;
