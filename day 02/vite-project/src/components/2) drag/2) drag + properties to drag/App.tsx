import { motion } from "framer-motion"

function App() {

  return (
    <>
      <motion.div
        drag
        dragTransition={{
          // type: "inertia",
          power: 0.8,           // ძალა
          bounceStiffness: 300, // bounceStiffness განსაზღვრავს თუ რამდენად ძლიერ ან მკვეთრად დააბრუნოს ელემენტი უკან, როცა ის ეჯახება dragConstraints-ს ან სხვა საზღვრებს inertia-ს დროს.
          bounceDamping: 20,    // bounce-ის ჩახშობა
          timeConstant: 200     // შეჩერების დრო
        }}
        className="box"
      />
    </>
  )
}

export default App
