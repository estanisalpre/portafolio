import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Vertical2Section = () => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);
  const bodyRef = useRef(document.body); // Referencia al body
  const proyectosRef = useRef(null); // Referencia a la palabra 'PROYECTOS'
  const newSectionRef = useRef(null); // Nueva sección que aparecerá
  const proyectosLettersRef = useRef([]); // Referencias a las letras de 'PROYECTOS'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación inicial para "colLeftRef"
    const timeln = gsap.timeline({ paused: true });

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

    // Animación de zoom sobre "PROYECTOS" durante el scroll
    const zoomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: proyectosRef.current,
        start: "top center", // Inicia la animación cuando "PROYECTOS" está en el centro
        end: "bottom top",  // Termina cuando "PROYECTOS" ya ha pasado el centro
        scrub: true,  // Hace que el efecto se sincronice con el scroll
        markers: true,  // Marca para depurar la animación (puedes quitarlo)
      },
    });

    // Zoom en la letra "P" de 'PROYECTOS'
    zoomTimeline.to(proyectosLettersRef.current[0], {
      scale: 30, // Escalar más fuerte la "P"
      color: "#ff6347", // Cambia el color de la letra
      ease: "none",
      duration: 0.5, // Duración del zoom de la P
    });

    // Aplicar zoom a toda la palabra "PROYECTOS"
    zoomTimeline.to(proyectosRef.current, {
      scale: 60, // Escala mucho más grande
      ease: "none", // Sin aceleración
      transformOrigin: "center center", // Enfocar el zoom sobre el centro
      duration: 15, // Aumentar la duración del zoom completo (más tiempo de scroll)
    });

    // Cambiar el fondo a blanco cuando la "P" se acerque al tamaño final
    zoomTimeline.to(bodyRef.current, {
      backgroundColor: "#fff",
      duration: 1,
      delay: 1, // Dejar un pequeño retraso para que el fondo cambie después de la "P"
    });

    // Mostrar la nueva sección después de que el zoom se complete
    zoomTimeline.to(newSectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
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
            <div style={{ backgroundColor: "#ffff" }} ref={proyectosRef} className="vertical__item">
              <h3 style={{ color: "#000", fontSize: "8rem" }}>
                {['P', 'R', 'O', 'Y', 'E', 'C', 'T', 'O', 'S'].map((letter, index) => (
                  <span key={index} ref={el => proyectosLettersRef.current[index] = el}>
                    {letter}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Nueva sección que aparecerá después del zoom */}
      <div
        ref={newSectionRef}
        className="new-section"
        style={{
          opacity: 0,
          transform: "translateY(50px)",
        }}
      >
        <h2>¡Nueva Sección Aparece!</h2>
      </div>
    </section>
  );
};

export default Vertical2Section;

