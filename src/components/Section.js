import { motion } from "framer-motion";

const animations = {
      initial: {opacity: 0, y:10},
      animate: {opacity: 1, y:0},
      exit: {opacity: 0, y: 10}
}

function Section(props){
      return (
            <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5}}>
                  <div style={{
                        marginTop: "1em",
                  }}>{props.content}</div>
            </motion.div> 
      );
}

export default Section;