import { motion } from 'framer-motion';
 
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* this is purple dot and its tail */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 bg-[#9152ff] rounded-full' />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* this is now the name */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#9152ff]'>Bibek Jha</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am software developer who is good at using python <br className="sm:block hidden" /> and its different libraries.</p>
        </div>
      </div>
      <ComputersCanvas />

    </section>
  );
}

export default Hero