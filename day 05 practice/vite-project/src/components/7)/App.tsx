import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [leftRight, setleftRight] = useState(false);
  const [hideShow, setHideShow] = useState(false);
  

  return (
    <>
      <div>
        <motion.div
          className='flex flex-col gap-4'
          animate={{
            opacity: hideShow ? 0.1 : 1,
          }}
          style={{
            justifySelf: leftRight ? "flex-end" : "flex-start",
            marginLeft: leftRight ? -10 : 10,
          }}
        >

          <div className='flex flex-col gap-2'>

            <motion.button
              whileHover={{y: -5}}
              whileTap={{y: 5}}
              transition={{type: "spring", stiffness: 300}}
              onClick={() => setleftRight(!leftRight)}
              className='w-24 h-8 border-2 border-white rounded-xl bg-sky-500 text-white font-bold'
            >
              {leftRight ? "to Left" : "to Right"}
            </motion.button>

            <motion.button
              whileHover={{y: -5}}
              whileTap={{y: 5}}
              transition={{type: "spring", stiffness: 300}}
              onClick={() => setHideShow(!hideShow)}
              className='w-24 h-8 border-2 border-white rounded-xl bg-green-500 text-white font-bold'
            >
              {hideShow ? "Show" : "Hide"}
            </motion.button>

          </div>

          <motion.div
            className='border-2 border-white w-24 h-72 rounded-xl bg-yellow-400'
          />

        </motion.div>
      </div>
    </>
  )
}

export default App