import styled from "styled-components";
import { RED } from "../../theme/colors";

const DotsContainer = styled.div`
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dot = styled.div<{ $active: boolean }>`
  width: ${(p) => (p.$active ? "28px" : "8px")};
  height: 8px;
  background: ${(p) => (p.$active ? RED : "rgba(244,241,236,0.3)")};
  transition: all 0.3s ease;
`;

export function NavDots({ count, active }: { count: number; active: number }) {
  return (
    <DotsContainer>
      {Array.from({ length: count }).map((_, i) => (
        <Dot key={i} $active={i === active} />
      ))}
    </DotsContainer>
  );
}
