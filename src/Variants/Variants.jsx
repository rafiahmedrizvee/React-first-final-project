export const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  <motion.div
    className="bg-green-400 p-4 rounded"
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.4 }}
  >
    Smooth entrance
  </motion.div>
  