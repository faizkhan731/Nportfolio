import { useEffect, useRef } from "react";
import * as THREE from "three";

const Glow = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, -50, 6);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Static Plane
    const geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -0.35;
    scene.add(plane);

    // Render once (NO animation loop)
    renderer.render(scene, camera);

    // Resize handler
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Glow;
