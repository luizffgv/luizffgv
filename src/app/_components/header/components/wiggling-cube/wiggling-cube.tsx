import { useToggle } from "@mantine/hooks";
import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, useEffect, useRef } from "react";
import { AmbientLight, Color, Euler, Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const WigglingCube = memo(function WigglingCube(): JSX.Element {
  const [shape, toggleShape] = useToggle(["sphere", "torus", "cube"] as const);
  const meshRef = useRef<Mesh>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<AmbientLight>(null);
  const secondsSinceFirstRender = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) {
      return;
    }

    let shouldStop = false;
    let lastTimestamp: number | undefined;

    const step = (timestamp: number): void => {
      if (shouldStop) {
        return;
      }

      const dt = lastTimestamp == null ? 0 : timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      requestAnimationFrame(step);

      // Update light color
      const directionalLight = lightRef.current;
      if (directionalLight != null) {
        const primaryColor = `hsl(${getComputedStyle(container).getPropertyValue("--color-primary")})`;

        directionalLight.color = new Color(primaryColor);
      }

      // Update mesh
      const mesh = meshRef.current;
      if (mesh == null) {
        secondsSinceFirstRender.current = 0;
        return;
      }

      secondsSinceFirstRender.current += dt / 1000;

      mesh.rotation.y -= dt / 2000;

      if (mesh.scale.x === 1) {
        return;
      }

      mesh.scale.setScalar(
        easeInOutCubic(Math.min(1, secondsSinceFirstRender.current / 2.5)),
      );
    };

    requestAnimationFrame(step);

    return () => {
      shouldStop = true;
    };
  }, []);

  return (
    // Non essential
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="w-16 h-16"
      onClick={() => {
        toggleShape();
      }}
      ref={containerRef}
    >
      <Canvas>
        <ambientLight ref={lightRef} intensity={3} />
        <directionalLight intensity={0.1} position={[0, 1, 1]} />
        {shape === "torus" ? (
          <mesh
            ref={meshRef}
            scale={0.1}
            rotation={new Euler(degToRad(30), 0, 0)}
          >
            <torusGeometry args={[1.5]} />
            <MeshWobbleMaterial color={new Color("#ffffff")} />
          </mesh>
        ) : null}
        {shape === "sphere" ? (
          <mesh
            ref={meshRef}
            scale={0.1}
            rotation={new Euler(degToRad(30), 0, 0)}
          >
            <icosahedronGeometry args={[1.5, 5]} />
            <MeshDistortMaterial color={new Color("#ffffff")} distort={0.5} />
          </mesh>
        ) : null}
        {shape === "cube" ? (
          <mesh
            ref={meshRef}
            scale={0.1}
            rotation={new Euler(degToRad(30), 0, 0)}
          >
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <MeshWobbleMaterial color={new Color("#ffffff")} />
          </mesh>
        ) : null}
      </Canvas>
    </div>
  );
});

export default WigglingCube;
