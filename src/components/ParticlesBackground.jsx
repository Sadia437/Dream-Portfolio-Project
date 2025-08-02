import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: "out",
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                },
                background: {
                    color: "#0d47a1",
                },
            }}
        />
    );
};

export default ParticlesBackground;
