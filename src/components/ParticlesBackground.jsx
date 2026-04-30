import Particles from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
      }}
      options={{
        background: {
          color: {
            value: '#000000',
          },
        },

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: '#74eca0', // 🟢 verde moderno
          },

          shape: {
            type: 'star', // ⭐ estrellas
          },

          opacity: {
            value: 0.7,
          },

          size: {
            value: { min: 2, max: 4 },
          },

          links: {
            enable: true,
            color: '#22c55e',
            distance: 140,
            opacity: 0.4,
          },

          move: {
            enable: true,
            speed: 1,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
      }}
    />
  );
};
