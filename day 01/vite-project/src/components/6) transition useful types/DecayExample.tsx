import { motion, useMotionValue, animate } from "framer-motion";

function DecayOnHover() {
  const x = useMotionValue(0);

  return (
    <motion.div
      style={{
        x,
      }}
      className="box"
      onHoverStart={() =>
        animate(x, 1000, {
          type: "decay",
          velocity: 100,     // საწყისი სიჩქარე
          power: 0.8,        // ინერციის ძალა
          timeConstant: 100, // შენელების დრო
          restDelta: 0.5,    // გაჩერების სიზუსტე
        })
      }
    />
  );
}

export default DecayOnHover;