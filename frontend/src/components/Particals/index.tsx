"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine"; 

export default function ParticlesBackground() {
    const [particleConfig, setParticleConfig] = useState({
        count: 100,
        speed: 2,
        opacity: 0.7,
        fpsLimit: 60,
        linkDistance: 150
    });

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        const updateParticles = () => {
            if (window.innerWidth < 768) {
                setParticleConfig({
                    count: 40,         // 🔽 Lower particle count
                    speed: 1,          // 🔽 Reduce speed for better mobile performance
                    opacity: 0.5,      // 🔽 Reduce opacity for smooth rendering
                    fpsLimit: 30,      // 🔽 Lower FPS limit on mobile
                    linkDistance: 100  // 🔽 Reduce link distance
                });
            } else {
                setParticleConfig({
                    count: 100,
                    speed: 2,
                    opacity: 0.7,
                    fpsLimit: 60,
                    linkDistance: 150
                });
            }
        };

        updateParticles();
        window.addEventListener("resize", updateParticles);

        return () => {
            window.removeEventListener("resize", updateParticles);
        };
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fps_limit: particleConfig.fpsLimit,
                background: { color: "#f3f4f6" },
                particles: {
                    number: { value: particleConfig.count },
                    shape: { type: "circle" },
                    opacity: { value: particleConfig.opacity },
                    size: { value: 3 },
                    move: { enable: true, speed: particleConfig.speed },
                    links: { enable: true, distance: particleConfig.linkDistance, color: "#000" }
                },
                detectRetina: false, // ✅ Helps performance on high-res screens
                reduceMotion: { enable: true } // ✅ Reduces animation on low-power devices
            }}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                height: "100vh",
                width: "100vw",
                zIndex: "-1"
            }}
        />
    );
}
