import type { ChangeEvent } from 'react';
import './App.css'
import { motion, useSpring } from 'framer-motion'

function App() {
  const scale = useSpring(1);

  const changehandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <motion.button
          className='box'
          style={{scale}}
        />

        <div className='mt-[6rem]'>
          <input 
            type="range" 
            min={0.5} 
            max={2} 
            step={0.01} 
            defaultValue={1} 
            onChange={changehandler}
          />
        </div>
      </div>
    </>
  )
}

export default App