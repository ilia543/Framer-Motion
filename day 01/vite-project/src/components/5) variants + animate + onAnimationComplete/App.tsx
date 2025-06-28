import { motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const phases: string[] = ["hidden", "visible", "exit"];
  const [phaseIndex, setPhaseIndex] = useState(0);

  const nextPhase = () => {
    setPhaseIndex((prev) => (prev + 1) % phases.length);
  };

  return (
    <motion.div
      className="box"
      variants={{
        hidden: { opacity: 0.5, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0}
      }}
      initial="hidden"
      animate={phases[phaseIndex]}
      onAnimationComplete={nextPhase}
    />
  );
};

export default App