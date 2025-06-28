import './App.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

function App() {

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (l) => {
    console.log(l);
  });

  return (
    <div>
      
    </div>
  )
}

export default App