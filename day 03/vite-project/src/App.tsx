import './App.css'
import { useTransform, useMotionValue, motion } from 'framer-motion'

function App() {
  const x =  useMotionValue(0);

  const backgroundColor = useTransform(x, [-200, 200], ['#ff0000', '#00ff00']);

  return (
    <>
      <motion.div 
        className='w-32 h-32 flex justify-center items-center rounded-lg cursor-pointer'
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200
        }}
        style={{x, backgroundColor}}
      >
        <span className='text-white'>Drag me</span>
      </motion.div>
    </>
  )
}

export default App