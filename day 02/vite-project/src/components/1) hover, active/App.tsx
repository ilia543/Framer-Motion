import { motion } from "framer-motion"

function App() {

  return (
    <>
      <motion.div 
        className="box"
        whileHover={{scale: 1.5, rotate: 45}}
      />

      <motion.div 
        className="box"
        whileTap={{scale: 1.5, background: "yellow"}}
      />
    </>
  )
}

export default App
