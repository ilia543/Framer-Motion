import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <div className='flex flex-col gap-8'>
        {[...Array(5)].map((_, i) => (
          <motion.div  key={i}
            className='box'
            style={{
              width: 100,
              height: 100
            }}
            animate={{x: 100, rotate: 90}}
            transition={{type: "spring", stiffness: 50, delay: i}}
          />
        ))}
      </div>
    </>
  )
}

export default App