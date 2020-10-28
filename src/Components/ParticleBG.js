import React from "react";
import Particles from "react-particles-js";

//This is a cool ParticleBG using particles.js. 
// See here for more details: https://github.com/Wufe/react-particles-js

const ParticleBG = (props) => {

  // we want to use 2 different types of backgrounds: primary and secondary
  const params = (props.type === "primary") ? (
    {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800,
          }
        },
        color: {
          value: "#C8C5C5"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#C8C5C5"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.4008530152163807,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 125,
          color: "#000",
          opacity: 0.3687847739990702,
          width: 0.6413648243462091
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "bubble"
          },
          resize: false
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    }
  ) : (
    {
      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
            value_area: 100,
          }
        },
        color: {
          value: "#99FB15"
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 14,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.3687847739990702,
          width: 2
        },
        move: {
          enable: true,
          speed: 10,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 8000,
            rotateY: 8000
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "bubble"
          },
          resize: false
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: .3,
            opacity: 1,
            speed: .3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
        }
      },
      retina_detect: true
    }
  )

  //To change this in the future, use this tool to better understand the params:
  // https://vincentgarreau.com/particles.js/#default
  return(
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: props.width,
          height: props.height,
        }}
        params={params}
      />
  );
};

export default ParticleBG;
