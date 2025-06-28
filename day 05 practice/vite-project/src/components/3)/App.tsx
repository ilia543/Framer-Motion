import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div 
        className='box'
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </>
  )
}

export default App