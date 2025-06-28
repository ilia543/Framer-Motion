import { motion } from "framer-motion"

function App() {
  return (
    <>
      <motion.div 
        className="box"
        whileHover={{scale: 1.5, rotate: 90, x: 50}}
        transition={{
          type: "spring",     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          stiffness: 300,     // bounce-ის სიძლიერე
          damping: 25,        // რამდენად ჩახშოს bounce
          mass: 1.5,          // რამდენად "მძიმეა" ელემენტი
          velocity: 2,        // საწყისი სიჩქარე
          restDelta: 0.01     // ბოლოს გაჩერების სიზუსტე (0.01 = თითქმის ზუსტად)
        }}
      />

      <motion.div 
        className="box"
        whileHover={{scale: 1.5, rotate: 90, x: 50}}
        transition={{
          type: "keyframes",  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          duration: 0.2,      // რამდენი წამი გაგრძელდეს
          ease: "easeOut",    // სიჩქარის მრუდი (easeIn, easeOut, easeInOut, linear)
          // delay: 1,           // დაწყების დაყოვნება წამებში
          // repeat: 1,          // რამდენჯერ განმეორდეს
          // repeatType: "loop"  // 'loop', 'reverse', 'mirror'
        }}
      />
      
    </>
  )
}

export default App