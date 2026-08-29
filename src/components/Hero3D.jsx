import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial, Sphere, Box, Cylinder, Torus, Ring, Text } from '@react-three/drei';
import * as THREE from 'three';

// 3D Robotic Space Probe / Mecha AI Drone
const RoboticSpaceDrone = () => {
  const droneGroup = useRef();
  const eyeSensor = useRef();
  const leftWing = useRef();
  const rightWing = useRef();
  const thrusterRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = (state.mouse.x * Math.PI) / 6;
    const mouseY = (state.mouse.y * Math.PI) / 8;

    if (droneGroup.current) {
      // Smooth tracking of mouse with robotic gyro damping
      droneGroup.current.rotation.y = THREE.MathUtils.lerp(droneGroup.current.rotation.y, mouseX, 0.05);
      droneGroup.current.rotation.x = THREE.MathUtils.lerp(droneGroup.current.rotation.x, -mouseY, 0.05);
      droneGroup.current.position.y = Math.sin(t * 1.5) * 0.15;
    }

    if (eyeSensor.current) {
      // Pulsing robotic optical sensor
      const pulse = 1 + Math.sin(t * 4) * 0.15;
      eyeSensor.current.scale.set(pulse, pulse, pulse);
    }

    if (leftWing.current && rightWing.current) {
      // Dynamic solar / armor fin articulation
      leftWing.current.rotation.z = 0.2 + Math.sin(t * 2) * 0.08;
      rightWing.current.rotation.z = -0.2 - Math.sin(t * 2) * 0.08;
    }

    if (ring1.current && ring2.current) {
      ring1.current.rotation.x += 0.015;
      ring1.current.rotation.y += 0.02;
      ring2.current.rotation.z += 0.018;
      ring2.current.rotation.y -= 0.012;
    }

    if (thrusterRef.current) {
      thrusterRef.current.scale.y = 1 + Math.sin(t * 12) * 0.25;
    }
  });

  return (
    <group ref={droneGroup} position={[0, 0.2, 0]}>
      {/* --- Main Mecha Head / Body Chassis --- */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.3, 1.1, 1.3]} />
        <meshStandardMaterial
          color="#0b1329"
          roughness={0.2}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Cybernetic Bevel Armor Plates */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.3, 8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Optical Robotic Visor / Eye */}
      <group position={[0, 0.05, 0.66]}>
        {/* Visor Frame */}
        <mesh>
          <boxGeometry args={[1.0, 0.35, 0.1]} />
          <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Glowing Ocular Lens */}
        <mesh ref={eyeSensor} position={[0, 0, 0.06]}>
          <cylinderGeometry args={[0.16, 0.16, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>

        {/* Side Auxiliary Target Beacons */}
        <mesh position={[-0.38, 0, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
        <mesh position={[0.38, 0, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* Mechanical Solar / Thruster Wings */}
      {/* Left Wing */}
      <group ref={leftWing} position={[-0.85, 0.1, 0]}>
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[1.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-0.6, 0, 0.06]}>
          <boxGeometry args={[0.95, 0.18, 0.02]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Right Wing */}
      <group ref={rightWing} position={[0.85, 0.1, 0]}>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[1.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.6, 0, 0.06]}>
          <boxGeometry args={[0.95, 0.18, 0.02]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Rear Space Propulsion Thruster */}
      <group position={[0, -0.65, 0]}>
        <mesh rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.55, 0.35, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Plasma Thruster Flame */}
        <mesh ref={thrusterRef} position={[0, -0.4, 0]}>
          <coneGeometry args={[0.3, 0.8, 16]} rotation={[Math.PI, 0, 0]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} />
        </mesh>
        {/* Inner Hot Core */}
        <mesh position={[0, -0.25, 0]}>
          <coneGeometry args={[0.15, 0.45, 16]} rotation={[Math.PI, 0, 0]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
        </mesh>
      </group>

      {/* Sub-Space Plasma Quantum Rings */}
      <group ref={ring1}>
        <Torus args={[1.65, 0.02, 16, 64]} rotation={[Math.PI / 4, 0, 0]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.5} />
        </Torus>
      </group>

      <group ref={ring2}>
        <Torus args={[1.9, 0.015, 16, 64]} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
        </Torus>
      </group>
    </group>
  );
};

// Autonomous Space Orbit Satellite Beacons
const OrbitingSatellite = ({ text, radius, speed, initialAngle, color, yOffset = 0 }) => {
  const satRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + initialAngle;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = yOffset + Math.sin(t * 2.5) * 0.3;

    if (satRef.current) {
      satRef.current.position.set(x, y, z);
      satRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={satRef}>
      {/* Satellite Body */}
      <mesh>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Sensor Antenna */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.32, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* 3D Cyber HUD Label */}
      <Text
        position={[0, 0.45, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
      >
        {text}
      </Text>
    </group>
  );
};

// Floating Cosmic Space Asteroids & Debris
const SpaceDebris = () => {
  const asteroids = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 35; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 3.5 + 3.0;
      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);
      const scale = Math.random() * 0.12 + 0.04;
      arr.push({ pos: [x, y, z], scale, rotSpeed: Math.random() * 0.02 + 0.005 });
    }
    return arr;
  }, []);

  return (
    <group>
      {asteroids.map((ast, idx) => (
        <mesh key={idx} position={ast.pos} scale={ast.scale}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#334155"
            roughness={0.9}
            metalness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full relative min-h-[440px] md:min-h-[580px]">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={['#02040d']} />
        
        {/* Deep Space Star Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#e0f2fe" />
        <pointLight position={[-6, -4, 4]} intensity={2.0} color="#00f0ff" />
        <pointLight position={[6, 4, -4]} intensity={1.5} color="#a855f7" />

        {/* Cosmic Starfield & Nebula Dust */}
        <Sparkles count={220} scale={10} size={2.2} speed={0.25} color="#00f0ff" opacity={0.8} />
        <Sparkles count={150} scale={12} size={1.8} speed={0.18} color="#c084fc" opacity={0.6} />
        <Sparkles count={80} scale={8} size={3.0} speed={0.3} color="#ffffff" opacity={0.9} />

        {/* 3D Robotic Space AI Drone */}
        <Float speed={2.0} rotationIntensity={0.8} floatIntensity={1.2}>
          <RoboticSpaceDrone />
        </Float>

        {/* Orbiting Tech Satellite Probes */}
        <OrbitingSatellite text="AI Engine" radius={3.1} speed={0.4} initialAngle={0} color="#00f0ff" yOffset={0.2} />
        <OrbitingSatellite text="FastAPI" radius={3.3} speed={0.32} initialAngle={Math.PI * 0.4} color="#a855f7" yOffset={-0.3} />
        <OrbitingSatellite text="React 18" radius={2.9} speed={0.45} initialAngle={Math.PI * 0.8} color="#38bdf8" yOffset={0.4} />
        <OrbitingSatellite text="Gemini AI" radius={3.4} speed={0.36} initialAngle={Math.PI * 1.2} color="#10b981" yOffset={-0.2} />
        <OrbitingSatellite text="Django" radius={3.2} speed={0.38} initialAngle={Math.PI * 1.6} color="#f59e0b" yOffset={0.3} />
        <OrbitingSatellite text="WebRTC" radius={2.8} speed={0.48} initialAngle={Math.PI * 0.2} color="#ec4899" yOffset={-0.4} />

        {/* Floating Asteroid Belt */}
        <SpaceDebris />
      </Canvas>

      {/* Robotic HUD Telemetry Overlay */}
      <div className="absolute top-3 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-cyan-400/80 pointer-events-none">
        <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>ORBIT: DEEP SPACE LEO-07</span>
        </div>
        <div className="bg-black/60 px-2 py-0.5 rounded border border-cyan-500/20 text-slate-300">
          THRUST: 98.4% PLASMA
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-cyan-500/20 pt-2 pointer-events-none">
        <span className="text-cyan-300 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
          AI MECHA PROBE
        </span>
        <span className="hidden sm:inline-block text-slate-500">CURSOR TRACKING ACTIVE</span>
        <span className="text-purple-400">SECTOR: MUMBAI-IN</span>
      </div>
    </div>
  );
};

export default Hero3D;
