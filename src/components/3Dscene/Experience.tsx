import React, { useEffect, useRef } from "react";
import { ThreeScene } from "./scene/index";

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneInstance = useRef<ThreeScene | null>(null);

  useEffect(() => {
    const initializeScene = async () => {
      const container = containerRef.current;
      if (container) {
        // Await the async initialization of ThreeScene
        sceneInstance.current = await ThreeScene.getInstance(container);
      }
    };

    initializeScene(); // Call the async function

    return () => {
      sceneInstance.current?.dispose();
    };
  }, []); // Empty dependency array to run once on mount

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Experience;
