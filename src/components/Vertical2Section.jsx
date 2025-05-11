import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VerticalSection = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeln = gsap.timeline({ paused: true });

    // Inicializa la animación con opacidad 0 y desplazamiento hacia abajo
    timeln.fromTo(
      colLeftRef.current,
      { opacity: 0, y: "50vh" }, // Comienza con opacidad 0 y desplazado desde abajo
      {
        opacity: 1,  // Al final de la animación, la opacidad será 1
        y: "0",  // Desplaza a la posición centrada
        duration: 1,
        ease: "power1.out",  // Desvanecimiento suave
      },
      0
    );

    ScrollTrigger.create({
      animation: timeln,
      trigger: sectionRef.current,
      start: "top bottom", // Comienza cuando la parte superior del trigger alcanza el final de la ventana
      end: "bottom center", // Termina cuando el final del trigger llega al centro de la ventana
      scrub: true,
    });

    return () => {
      // Cleanup en desmontaje
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="vertical">
      <div className="container">
        <div className="vertical__content">
          <div ref={colLeftRef} className="col col_left">
            <h2 className="vertical__heading">
              <span>About</span>
              <span>Smooth</span>
              <span>Scroll</span>
            </h2>
          </div>
          <div className="col col_right">
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSection;

