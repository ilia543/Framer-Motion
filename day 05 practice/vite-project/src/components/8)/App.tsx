import React, { useState } from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { div, line } from 'motion/react-client';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(
    "data:image/jpeg;base64,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"
  );
  const [changeImage, setChangeImage] = useState(false);
  
  function imageChangeOnClick(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formEl = new FormData(e.currentTarget);
    const img = formEl.get("img");

    if(typeof img === "string"){
      setImage(img);
    };


    e.currentTarget.reset();
  }

  return (
    <div className='flex flex-col items-center'>
      <button 
        className='italic self-center w-48 h-14 text-3xl font-bold mt-4 bg-teal-500 text-white rounded'
        onClick={() => setIsOpen(!isOpen)}
      >
        open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black flex justify-center items-center'
          >

            <motion.div
              className='flex flex-col gap-1 bg-white p-4 rounded'
              onClick={(e) => e.stopPropagation}
              initial={{y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 75}}
            >
              <h2 className='font-bold text-3xl'>Modal TiTle</h2>
              <p>some random modal text:</p>
              <p className='text-pink-500 font-bold'>walter heisenburger is sigma</p>

              <img 
                src={`${image}`}
                alt="image"
                className='rounded-xl mt-2' 
              />

              <div className='flex justify-around items-center'>
                <motion.button
                  whileHover={{scale: 1.2, rotate: 5}}
                  whileTap={{scale: 0.8, rotate: -5}}
                  transition={{type: "spring", stiffness: 200}}
                  onClick={() => setChangeImage(!changeImage)}
                  className='mt-2 w-32 h-8 font-bold bg-green-400 text-white rounded cursor-pointer'
                >change image</motion.button>

                {changeImage && 
                  <form onSubmit={imageChangeOnClick}>
                    <motion.input type="text" name="img"
                      whileHover={{ skewX: 5, skewY: 5, }}
                      whileTap={{ skewX: -5, skewY: -5 }}
                      className='border-2 border-black h-8 mt-2 w-30 rounded-lg'
                      placeholder='  image addres'
                    />
                    
                    <motion.button 
                      type='submit' 
                      className='border-1 rounded-lg opacity-60 rotate-180'
                      whileHover={{scale: 1.2, opacity: 1, rotate: 180}}
                      whileTap={{scale: 0.8}}
                      transition={{type: "spring", stiffness: 100}}
                    >Submit</motion.button>
                  </form>
                }
              </div>

              <button
                className=' italic mt-4 w-24 h-14 text-3xl font-bold p-2 bg-red-500 text-white rounded cursor-pointer'
                onClick={() => setIsOpen(false)}
              >close</button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default App