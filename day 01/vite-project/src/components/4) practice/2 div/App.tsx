import { motion } from "framer-motion"
import "./App.css"

function App() {
  return (
    <>
    <div className="flex gap-4">
      {[...Array(3)].map((_, index) => (
        <motion.div key={index} 
        className="rounded-full bg-blue-500 w-[70px] h-[70px]" 
        animate={{y: [0, -60, 0]}}
        transition={{
          repeat: Infinity,
          delay: index
        }}
        />
      ))}
    </div>
      
    </>
  )
}

export default App