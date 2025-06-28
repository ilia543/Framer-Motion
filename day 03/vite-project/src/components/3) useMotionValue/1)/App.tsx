import './App.css'
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion'

function App() {
  const x = useMotionValue(200);
  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("change x", latest);
  });



  return (
    <>
      <motion.div
        className='box'
        style={{x}}
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: 0,
          bottom: 0
        }}
      />
    </>
  )
}

export default App