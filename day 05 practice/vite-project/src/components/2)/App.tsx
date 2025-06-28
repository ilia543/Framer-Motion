import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div 
        className='box'
        animate={{ y: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
    </>
  )
}

export default App