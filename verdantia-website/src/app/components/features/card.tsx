'use client'
import classNames from "classnames"
import { useFeatureStore } from "./store"
import tech from "../../../../public/images/tech.svg"
import path from "../../../../public/images/path.svg"
import community from "../../../../public/images/community.svg"
import hours from "../../../../public/images/hours.svg"
import health from "../../../../public/images/health.svg"



type FeatureCardProps = {
    gradient : string,
    children : React.ReactNode
} & CardProps
type CardProps = {
    id : string
}

 const FeatureCard = ({gradient, children, id} : FeatureCardProps) => {
    const inViewfeature = useFeatureStore((state) => state.inViewFeature)
    return (
        <div 
            className={classNames(
                "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
                gradient,
                inViewfeature === id ? "opacity-100" : "opacity-0"
                )}>
            {children}
        </div>)
}



  export const Tech = ({id} : CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-[#e4ede8] to-[#e4ede8]">
            <img className="rounded-xl shadow-lg absolute w-[80%] top-[22%] left-[10%] sm:left-[18%] sm:top-[7%] sm:w-[65%]" src={tech.src}/>
            <p className="px-[5vw] absolute top-[56%] text-[0] sm:text-[1.4vw] text-[#3e3e3e]">
                We always say that the right tools empower our employees to reach new heights. 
                From state-of-the-art software solutions to the latest hardware advancements, 
                we invest in technology to propel our workforce.

            </p>
        </FeatureCard>
    )
  }

  export const Path = ({id} : CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-[#ccd9d2] to-[#ccd9d2]">
            <img className="rounded-xl shadow-lg absolute w-[80%] top-[27%] left-[11%] sm:left-[18%] sm:top-[7%] sm:w-[63%]" src={path.src}/>
            <p className="px-[5vw] absolute top-[56%] text-[0] sm:text-[1.4vw] text-[#3e3e3e]">
                At Verdantia, we believe that every individual brings a unique set of skills, talents, 
                and aspirations to the table. That&apos;s why we&apos;re proud to foster an environment where you
                have a canvas to paint your career masterpiece!
            </p>
        </FeatureCard>
    )
  }

  export const Community = ({id} : CardProps) => {

    return(
        <FeatureCard id={id} gradient="from-[#d5f0e2] to-[#d5f0e2]">
            <img className="rounded-xl shadow-lg absolute w-[80%] top-[22%] left-[10%] sm:left-[20.4%] sm:top-[7%] sm:w-[57%]" src={community.src}/>
            <p className="px-[5vw] absolute top-[56%] text-[0] sm:text-[1.4vw] text-[#3e3e3e]">
            We take pride in cultivating an inclusive environment where collaboration is not just encouraged but celebrated. 
            Our diverse team members bring a rich tapestry of experiences, ideas, and perspectives.
            </p>

        </FeatureCard>
    )
  }

  export const Hours = ({id} : CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-[#bfdbcd] to-[#bfdbcd]">
            <img className="rounded-xl shadow-lg absolute w-[70%] top-[20%] left-[16%] sm:left-[24.8%] sm:top-[7%] sm:w-[47%]" src={hours.src}/>
            <p className="px-[5vw] absolute top-[56%] text-[0] sm:text-[1.4vw] text-[#3e3e3e]">
                Flexibility is a philosophy that empowers our team to manage their work in a way that suits their individual 
                lifestyles. We believe in giving you the freedom to choose when and where you work best.
            </p>        
        </FeatureCard>
    )
  }

  export const Health = ({id} : CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-[#c3e8d5] to-[#c3e8d5]">
            <img className="rounded-xl shadow-lg absolute w-[70%] top-[22%] left-[16%] sm:left-[25.8%] sm:top-[7%] sm:w-[47%]" src={health.src}/>
            <p className="px-[5vw] absolute top-[56%] text-[0] sm:text-[1.4vw] text-[#3e3e3e]">
                Our healthcare plan includes a range of benefits such as 
                preventative care, mental health services, and wellness programs, all aimed at empowering you to live your 
                best life both inside and outside of the workplace.         
            </p>              

        </FeatureCard>
    )
  }