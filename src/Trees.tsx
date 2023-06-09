import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { ToonShader } from "./ToonShader";

export const Trees = forwardRef((props: any, ref) => {
  const { nodes } = useGLTF("/trees.glb") as any;

  const uniforms = useMemo(() => {
    return {
      ...ToonShader.uniforms,
      uBaseColor: { value: new Color("#49897C") },
      uAmbientLightColor: { value: new Color("#050505") },
      uDirLightColor: { value: new Color("white") },
      uDirLightPos: { value: new Vector3(15, 15, 15) },
      uLineColor1: { value: new Color("#808080") },
      uLineColor2: { value: new Color("black") },
    };
  }, []);

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 0, 0]}
      >
        <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
