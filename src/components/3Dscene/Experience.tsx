// src/components/ThreeJSScene.tsx
import React, { useEffect, useRef } from "react";
import { ThreeScene } from "./scene/ThreeScene";

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneInstance = useRef<ThreeScene | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Use the singleton getInstance method to create/retrieve the instance
      sceneInstance.current = ThreeScene.getInstance(container);
    }

    return () => {
      sceneInstance.current?.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Experience;
