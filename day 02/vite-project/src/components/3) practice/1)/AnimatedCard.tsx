import "./AnimatedCard.css";
import { motion, spring } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div 
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{
        scale: 1, rotate: 0
      }}
      whileHover={{
        scale:1.1, rotate: 2
      }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50
      }}
      dragElastic={0.2}
      transition={{type: spring, stiffness: 300}}
    >
      
      <img className="w-full h-48 object-cover" src="data:image/jpeg;base64,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" alt="" />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Title</h2>

        <p className="text-gray-700 bm-4">
          simple card with framer motion plus tailwindcss plus reactTs
        </p>

        <button className="px-4 p-2 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition">
          learn more
        </button>
      </div>

    </motion.div>
  )
}

export default AnimatedCard