import { motion } from "framer-motion"

const Back = () => {
  return (
    <motion.div initial={{height:'100vh',backgroundColor:'black'}} animate={{height:'0',backgroundColor:'black '}} transition={{ease: "linear", duration:1}} className=" h-screen w-full bg-black -z-10 absolute top-0 left-0">
      
    </motion.div>
  )
}

export default Back
