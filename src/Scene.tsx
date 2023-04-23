import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Trees } from "./Trees";

const Scene = () => {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      // @ts-ignore
      group.rotation.x = group.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Trees ref={refTrees} />
    </>
  );
};

export default Scene;
