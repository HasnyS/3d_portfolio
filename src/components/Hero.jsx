import {motion} from "framer-motion";
import {styles} from "../style.js";
import {ComputersCanvas} from "./canvas";


const Hero = () => {
  return (
      //background
      <section className={'relative w-full h-screen mx-auto'}>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max w-7xl mx-auto flex flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5'>
                {/*circle */}
                <div className={'w-5 h-5 rounded-full bg-[#915eff]'}/>
                {/*line */}
                <div className={'w-1 sm:h-80 h-40 violet-gradient'}/>
                {/* Title */}
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className={'text-[#915eff]'}>
                        Syed
                    </span>
                    </h1>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Hero