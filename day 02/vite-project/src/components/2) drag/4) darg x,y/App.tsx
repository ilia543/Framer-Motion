import { motion } from "framer-motion";

function App() {

  return (
    <>
      <motion.div
        drag="y"
        className="box"
      />
      <motion.div
        drag="x"
        className="box"
      />
    </>
  );
}

export default App