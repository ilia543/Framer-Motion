import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div 
        className='box'
        whileTap={{x: 100, y: 100, rotate: 360, scale: 0.5}}
        transition={{type: "spring", stiffness: 50}}
      />
    </>
  )
}

export default App