"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Photo.module.css"; // Ensure this path is correct and matches the location of your CSS module

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-start"> {/* Align items to the start to bring image closer to the text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className={styles.hoverGlow}
      >
        {/* Center Image with Glow */}
        <div className={styles.centerImage}>
          <Image
            src="/assets/image4.png"
            priority
            quality={100}
            width={400}  /* Maintain increased image size */
            height={400} /* Maintain increased image size */
            alt=""
            className={`object-cover rounded-full ${styles.glow}`} // Ensure the image is circular
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
