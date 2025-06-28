import { motion } from "framer-motion"

const AnimatedShape = () => {

  const boxvariants = {
    initial:{
      scale: 1, rotate: 0, skew: 0
    },
    hover: {
      scale: 1.2, rotate: 5, skew: '10deg', transition: {duration: 0.3}
    },
    click: {
      scale: 0.9, rotate: -5, skew: "-10deg", transition: {duration: 0.1}
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="w-40 h-40 bg-blue-500 rounded-lg"
          variants={boxvariants}
          initial="initial"
          whileHover="hover"
          whileTap="click"
        />
      </div>
    </>
  )
}

export default AnimatedShape