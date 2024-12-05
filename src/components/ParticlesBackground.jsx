


// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particlesConfig'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the full tsParticles bundle (required for full features)
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can interact with the loaded particles instance here if needed
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
 
    />
  );
};

export default ParticlesBackground;

