import { motion } from "framer-motion"

function App() {
  return (
    <>

      <motion.div
        className="box"
        animate={{ x: 100, y:10}}
      />

      <motion.div
        className="box"
        animate={{rotate: 45}}
      />

      <motion.div
        className="box"
        animate={{rotateX: 50, rotateY:20}}
      />

      <motion.div
        className="box"
        animate={{scale:0.5}}
      />

      <motion.div
        className="box"
        animate={{scaleX:2, scaleY: 0.5}}
      />

      <motion.div
        className="box"
        animate={{skewX:30}}
      />

      <motion.div
        className="box"
        animate={{skewY:30}}
      />


    </>
  )
}

export default App