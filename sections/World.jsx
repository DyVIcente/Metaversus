'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute top-1/3 left-[18%] w-[217px] h-[167px] p-[9px] rounded-[24px] bg-[#5D6680]"
        >
          <img src="/planet-10.png" alt="planet-10" className="w-full h-full rounded-[24px]" />
          <p className="font-medium sm:text-[18px] text-[18px] leading-[22px] text-white absolute bottom-[24px] left-[26px]">The Upside Down</p>
          <p className="font-normal sm:text-[12px] text-[12px] leading-[15px] text-white absolute bottom-[55px] right-[42px]">+264 has joined</p>
          <img src="/Ellipse-39.png" alt="ellipse-39" className="absolute bottom-[52px] left-[26px] z-20" />
          <img src="/Ellipse-40.png" alt="ellipse-39" className="absolute bottom-[52px] left-[36px] z-10" />
          <img src="/Ellipse-41.png" alt="ellipse-39" className="absolute bottom-[52px] left-[46px]" />
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute top-9 right-[18%] w-[217px] h-[167px] p-[9px] rounded-[24px] bg-[#5D6680]"
        >
          <img src="/planet-11.png" alt="planet-11" className="w-full h-full rounded-[24px]" />
          <p className="font-medium sm:text-[18px] text-[18px] leading-[22px] text-white absolute bottom-[24px] left-[26px]">Hawkins Labs</p>
          <p className="font-normal sm:text-[12px] text-[12px] leading-[15px] text-white absolute bottom-[55px] right-[42px]">+264 has joined</p>
          <img src="/Ellipse-39.png" alt="ellipse-39" className="absolute bottom-[52px] left-[26px] z-20" />
          <img src="/Ellipse-40.png" alt="ellipse-39" className="absolute bottom-[52px] left-[36px] z-10" />
          <img src="/Ellipse-41.png" alt="ellipse-39" className="absolute bottom-[52px] left-[46px]" />
        </motion.div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
