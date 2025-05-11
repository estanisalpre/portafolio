import { useEffect } from "react";
import VerticalSection from "../../../components/VerticalSection";
import HorizontalSection from "../../../components/HorizontalSection";
import Vertical2Section from "../../../components/Vertical2Section";
import Lenis from "lenis";

const HomeView = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup de Lenis
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <VerticalSection />
      <HorizontalSection />
      <Vertical2Section />
    </div>
  );
};

export default HomeView;
