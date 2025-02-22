import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import { Suspense } from "react";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import { motion } from "framer-motion";

const Star = ({ initialPosition, velocity }) => {
  const meshRef = useRef();
  const startTime = useRef(Date.now());

  useFrame(() => {
    if (meshRef.current) {
      const elapsed = (Date.now() - startTime.current) / 1000;

      meshRef.current.position.x = initialPosition.x + velocity.x * elapsed;
      meshRef.current.position.y = initialPosition.y + velocity.y * elapsed;
      meshRef.current.position.z = initialPosition.z + velocity.z * elapsed;

      meshRef.current.rotation.x += 0.1;
      meshRef.current.rotation.y += 0.1;

      meshRef.current.position.y -= elapsed * elapsed * 2; // Simulates gravity effect
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[initialPosition.x, initialPosition.y, initialPosition.z]}
    >
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial
        color="#fff"
        emissive="#fff"
        emissiveIntensity={2}
      />
    </mesh>
  );
};

const Ball = ({ imgUrl, name }) => {
  const [decal] = useTexture([imgUrl]);
  const [scale] = useState(2.75);
  const [showStars, setShowStars] = useState(false);
  const [stars, setStars] = useState([]);

  // Generate random stars
  const generateStars = () => {
    const starArray = [];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const theta = (Math.PI * 2 * i) / count;
      const phi = Math.acos(-1 + (2 * i) / count);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      const speed = 4 + Math.random() * 3;

      starArray.push({
        id: i,
        initialPosition: new THREE.Vector3(0, 0, 0),
        velocity: new THREE.Vector3(x * speed, y * speed, z * speed),
      });
    }
    return starArray;
  };

  // Trigger star animation randomly
  useEffect(() => {
    const triggerRandomAnimation = () => {
      setStars(generateStars());
      setShowStars(true);
      setTimeout(() => {
        setShowStars(false);
      }, 1500);
    };

    const interval = 5000 + Math.random() * 5000; // Random interval between 5-10 seconds
    const timer = setInterval(triggerRandomAnimation, interval);

    return () => clearInterval(timer); // Cleanup interval
  }, []);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
      {showStars &&
        stars.map((star) => (
          <Star
            key={star.id}
            initialPosition={star.initialPosition}
            velocity={star.velocity}
          />
        ))}
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Delay hiding the hover text
  const [showHoverText, setShowHoverText] = useState(false);

  useEffect(() => {
    let timer;
    if (isHovered) {
      setShowHoverText(true); // Show immediately when hovered
    } else {
      timer = setTimeout(() => setShowHoverText(false), 300); // Delay hiding
    }

    return () => clearTimeout(timer); // Cleanup the timer
  }, [isHovered]);

  return (
    <motion.div
      className="w-24 h-24 sm:w-20 sm:h-20 lg:w-32 lg:h-32 flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas */}
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>

      {/* Hover Text */}
      {showHoverText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-2 text-gray-300 text-xs sm:text-sm text-center"
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BallCanvas;
