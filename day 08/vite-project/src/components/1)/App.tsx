import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <div className='flex gap-2'>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            repeatDelay: 0.5,
          }}
          className='box'
        />
      ))}
    </div>
  )
}

export default App