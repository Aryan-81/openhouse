"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine"; 

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine); 
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#f3f4f6" }, 
                particles: {
                    number: { value: 100 },
                    shape: { type: "circle" },
                    opacity: { value: 0.7 },
                    size: { value: 3 },
                    move: { enable: true, speed: 2 },
                    links: { enable: true, distance: 150, color: "#000" }
                }
            }}
            style={{position:'fixed',top:'0',left:"0",bottom:"0",right:"0",height:"100vh",width:"100vw",zIndex:'-1'}}
        />
    );
}