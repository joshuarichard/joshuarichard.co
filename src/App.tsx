import { useRef, useState, useEffect } from "react";
import { GlobalStyle } from "./components/common/GlobalStyle";
import { Viewport, ScrollTrack } from "./components/common/Layout";
import { NavDots } from "./components/common/NavDots";
import { HeroPanel } from "./components/HeroPanel";
import { ExperiencePanel } from "./components/ExperiencePanel";
import { ProjectsPanel } from "./components/ProjectsPanel";
import { ContactPanel } from "./components/ContactPanel";

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
    const track = trackRef.current;
    if (!track) return;
    const mq = window.matchMedia("(max-width: 768px)");
    const onWheel = (e: WheelEvent) => {
      if (mq.matches) return;
      e.preventDefault();
      track.scrollLeft += e.deltaY + e.deltaX;
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Viewport>
        <ScrollTrack ref={trackRef}>
          <HeroPanel />
          <ExperiencePanel />
          <ProjectsPanel />
          <ContactPanel />
        </ScrollTrack>
        <NavDots count={4} active={activePanel} />
      </Viewport>
    </>
  );
}
