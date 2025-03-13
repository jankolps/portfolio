<template>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particlesOptions"
      class="absolute top-0 left-0 w-full h-full"
    />
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { loadSlim } from "tsparticles-slim"; // Version légère de tsparticles
  
  export default defineComponent({
    name: "BackgroundParticles",
    setup() {
      const particlesInit = async (engine: any) => {
        // Charge la version slim de tsparticles
        await loadSlim(engine);
      };
  
      const particlesOptions = {
        background: {
          color: { value: "#000000" }, // Couleur de fond blanc
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#FFFFFF" }, // Couleur des particules noire
          links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2, // Vitesse des particules
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Nombre de particules
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Forme des particules (peut être `circle`, `star`, etc.)
          },
          size: {
            random: true,
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true, // Étendre la prise en charge des écrans Retina
      };
  
      return { particlesInit, particlesOptions };
    },
  });
  </script>
  
  <style scoped>
  /* Couche de fond pour les particules */
  #tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place en arrière-plan */
  }
  </style>
  