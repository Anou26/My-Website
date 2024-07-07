import {animate,motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
       top: ["100%","0%"],
    },
};
//reverse index for staggered effect

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;
};

const Stairs = () => {
    return (
     <>
     {[...Array(6)].map((_, index) => {
        return(
            <motion.div
            key={index}
            variants={stairAnimation}
            nitial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-customGreen relative"

            />
        );
     })}
     </>
    );

    
} ;

export default Stairs