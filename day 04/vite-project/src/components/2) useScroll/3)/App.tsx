import './App.css';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "100%"]);

  return (
    <div>
      <div className='relative h-screen overflow-hidden flex items-center justify-center'>
        <motion.div
          className='box'
          style={{ scale, borderRadius }}
        />

        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h1 className='text-white text-4xl' ></h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
