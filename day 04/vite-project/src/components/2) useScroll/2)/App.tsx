import './App.css';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [0, 6]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  
  return (
    <motion.div style={{scale, opacity}} className='box'/>
  )
}

export default App