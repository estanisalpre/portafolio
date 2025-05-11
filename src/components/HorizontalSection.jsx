import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HorizontalSection = () => {
  useEffect(() => {
    const boxItems = gsap.utils.toArray(".horizontal__item");

    gsap.to(boxItems, {
      xPercent: -100 * (boxItems.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 3,
        snap: 1 / (boxItems.length - 1),
        end: `+=${document.getElementById("horizontal").offsetWidth}`,
      },
    });

    return () => {
      // Cleanup de ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="horizontal">
      <div className="container">
        <div className="horizontal__content">
          <div className="horizontal__item">
            <div className="horizontal__num">1</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">2</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">3</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">4</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;
