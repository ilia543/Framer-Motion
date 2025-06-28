import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div 
        className='box'
        initial={{x: -625}}
        whileTap={{x: 525}}
        transition={{ type: "spring", stiffness: 50 }}
      />
    </>
  )
}

export default App