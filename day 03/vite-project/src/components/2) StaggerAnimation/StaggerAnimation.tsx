import { motion, useAnimation } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const StaggerAnimation = () => {
  const controls = useAnimation();

  const handleClick = async () => {

    await controls.start("hidden");
    await controls.start("visible");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded mt-10 ml-10"
      >
        Play Animation
      </button>

      <motion.div
        className="mt-20 flex gap-12"
        variants={parentVariants}
        initial="hidden"
        animate={controls}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            className="box mt-[32px] w-20 h-20 bg-red-400 rounded"
            key={index}
            variants={childVariants}
          />
        ))}
      </motion.div>
    </>
  )
}

export default StaggerAnimation