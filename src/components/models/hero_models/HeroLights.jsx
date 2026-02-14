import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* main lamp's light - increased intensity */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={150}
      color="white"
    />
    {/* pink overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={80}
      color="#ffb6d9"
    />
    {/* pink side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={100}
      color="#ff69b4"
    />
    {/* warm pink area light */}
    <primitive
      object={new THREE.RectAreaLight("#ffb6d9", 12, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={25}
    />
    {/* front fill light - pink */}
    <spotLight
      position={[0, 4, 8]}
      angle={0.5}
      penumbra={1}
      intensity={70}
      color="#ffc0d9"
    />
    {/* accent light from above */}
    <pointLight position={[0, 6, 0]} intensity={40} color="#ff69b4" />
    {/* left ambient fill */}
    <pointLight position={[-3, 2, -2]} intensity={25} color="#ffb6d9" />
    {/* right ambient fill */}
    <pointLight position={[3, 2, -2]} intensity={25} color="#ffc0d9" />
    {/* back rim light for depth */}
    <spotLight
      position={[0, 3, -8]}
      angle={0.6}
      penumbra={1}
      intensity={60}
      color="#ff69b4"
    />
  </>
);

export default HeroLights;
