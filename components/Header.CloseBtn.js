import { motion } from "framer-motion";

export const HeaderCloseBtn = (props) => {
  return (
    <motion.div
      className="w-full h-1 bg-black rounded-full dark:bg-white"
      animate={props.animate}
    />
  )
}