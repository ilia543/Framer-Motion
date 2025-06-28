import { motion } from "framer-motion"

function App() {

  return (
    <>
      <motion.div 
        className="box" 
        drag 
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} />
    </>
  )
}

export default App