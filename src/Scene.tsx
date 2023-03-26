import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

const Box = (props: any) => {
  const mesh = useRef() as any;
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  const setHoverToTrue = () => {
    setIsHover(true);
  };

  const setHoverToFalse = () => {
    setIsHover(false);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={isActive ? 1.5 : 1}
      onClick={toggleActive}
      onPointerOver={setHoverToTrue}
      onPointerOut={setHoverToFalse}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHover ? "hotpink" : "pink"} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} castShadow />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
};

export default Scene;
