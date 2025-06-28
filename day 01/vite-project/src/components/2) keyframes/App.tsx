import { motion } from "framer-motion"

function App() {
  return (
    <>
      <motion.div className="box" 
        initial={{x: 0}}
        animate={{x: 100}}
        transition={{delay: 2, duration: 0.5, ease: "easeInOut"}}
      />
    </>
  )
}

export default App