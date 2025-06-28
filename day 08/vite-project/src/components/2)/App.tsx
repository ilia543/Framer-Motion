import './App.css'
import { motion } from 'framer-motion'

function App() {
  let n = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

  return (
    <div className='flex gap-1'>
      {n.map((el, i) => (
        <motion.p
          key={i}
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
          }}
          className='text-white text-6xl font-bold'
        >{el}</motion.p>
      ))}
    </div>
  )
}

export default App