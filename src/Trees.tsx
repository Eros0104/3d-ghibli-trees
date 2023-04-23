import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { RedFormat, DataTexture } from "three";

export const Trees = forwardRef((props: any, ref) => {
  const { nodes } = useGLTF("/trees.glb") as any;
  const toneMap = useMemo(() => {
    const format = RedFormat;
    const colors = new Uint8Array(4);
    for (let i = 0; i <= colors.length; i++) {
      colors[i] = (i / colors.length) * 256;
    }
    const gradientMap = new DataTexture(colors, colors.length, 1, format);
    gradientMap.needsUpdate = true;
    return gradientMap;
  }, []);
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 0, 0]}
      >
        <meshToonMaterial gradientMap={toneMap} color={"#234549"} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
