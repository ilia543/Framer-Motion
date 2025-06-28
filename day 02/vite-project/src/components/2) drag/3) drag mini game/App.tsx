import { motion } from "framer-motion";
import { useRef } from "react";

function App() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      drag
      style={{
        width: 300,
        height: 300,
        background: "gray",
        position: "relative",
        overflow: "hidden",
        borderRadius: "20%"
      }}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="box"
      />
    </motion.div>
  );
}

export default App