import { motion } from "framer-motion";
import { cardBase, cardHover, cardColors } from "../components/shared/CardStyle";
function AdminMiniCard({ color = "blue", children }) {
  return (
    <div>
        <motion.div
      whileHover={{ scale: 1.02 , y: -5, boxShadow: "0 10px 25px -5px rgba(1, 1, 1, 0.1)" }}
      className={`${cardBase} ${cardHover} ${cardColors[color]}`}
    >
      {children}
    </motion.div>
    </div>
  )
}

export default AdminMiniCard