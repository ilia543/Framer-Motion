import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div 
        className='box'
        whileTap={{skewX: 10, skewY: 10}}
      />
    </>
  )
}

export default App