import './App.css'
import { motion } from 'framer-motion'

function App() {

  return (
    <div>
      <h1 className='text-center text-3xl mt-32 text-white'>scroll down to see animation</h1>


      <div className=' h-screen'></div>

      <div className='flex justify-center items-start mt-[30rem]'>
        <div className='h-[200vh] w-full flex justify-center items-center'>
          <motion.div
            className='bg-white rounded-lg p-6 text-center'
            initial={{
              scale: 0.5,
              opacity: 0
            }}
            transition={{ duration: 0.5 }}
            whileInView={{
              scale: 1.2,
              opacity: 1,
              y: -100
            }}
          >
            <h2 className='text-2xl font-bold mb-2 text-black'>Amazing Sigma Card</h2>
            <p className='text-gray-600'>This card animates scroll</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App