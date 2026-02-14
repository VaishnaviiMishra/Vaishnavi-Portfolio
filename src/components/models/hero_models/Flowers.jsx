import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Snowflakes = ({ count = 100 }) => {
  const groupRef = useRef();

  const snowflakes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.003 + Math.random() * 0.002,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        rotationSpeed: [Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01],
        swayAmount: Math.random() * 0.5 + 0.2,
        swaySpeed: Math.random() * 0.01 + 0.005,
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const snowflakes_group = groupRef.current.children;
    snowflakes.forEach((snowflake, i) => {
      if (snowflakes_group[i]) {
        let y = snowflakes_group[i].position.y;
        y -= snowflake.speed;
        if (y < -2) y = Math.random() * 10 + 5;
        
        // Add swaying motion for snowflake drift
        const sway = Math.sin(clock.getElapsedTime() * snowflake.swaySpeed + i) * snowflake.swayAmount;
        snowflakes_group[i].position.y = y;
        snowflakes_group[i].position.x = snowflake.position[0] + sway;
        
        // Gentle rotation
        snowflakes_group[i].rotation.x += snowflake.rotationSpeed[0];
        snowflakes_group[i].rotation.y += snowflake.rotationSpeed[1];
        snowflakes_group[i].rotation.z += snowflake.rotationSpeed[2];
      }
    });
  });

  const createSnowflakeGeometry = () => {
    // Create a simple snowflake using lines/wireframe effect
    return <octahedronGeometry args={[0.08, 0]} />;
  };

  return (
    <group ref={groupRef}>
      {snowflakes.map((snowflake, i) => (
        <group key={i} position={snowflake.position}>
          {/* Main snowflake */}
          <mesh rotation={snowflake.rotation}>
            {createSnowflakeGeometry()}
            <meshPhongMaterial 
              color="#ffb6d9" 
              emissive="#ff69b4"
              emissiveIntensity={0.6}
              wireframe={false}
            />
          </mesh>
          
          {/* Sparkle effect - smaller glowing spheres */}
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshPhongMaterial 
              color="#fff0f5"
              emissive="#ffb6d9"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default Snowflakes;
