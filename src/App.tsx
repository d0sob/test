import Experience from "./components/3Dscene/Experience";

function App() {
  return (
    <div className="relative w-screen h-screen">
      {/* Overlay text in the bottom-left */}
      <div className="absolute bottom-4 left-4 text-white text-lg font-bold z-10 drop-shadow-md space-y-1">
        <p>Press W, A, S, D to move.</p>
        <p>Space to jump.</p>
        <p>Shift to boost.</p>
        <p>1 and 2 to switch animations.</p>
      </div>

      {/* Three.js Scene */}
      <Experience />
    </div>
  );
}

export default App;
