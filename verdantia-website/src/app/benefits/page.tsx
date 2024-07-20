import DetReqBlock from "../components/JDB/detReqBlock"
import DetailsBlock from "../components/JDB/detailsBlock"
import  InfoPanel  from "../components/JDB/infoPanel"
import JobDetailBlock from "../components/jobDetailBlock"
import { JobSubInfoBlock } from "../components/JDB/jobSubInfoBlock"
import ReqsBlock from "../components/JDB/requirementsBlock"
import TitleBlock from "../components/JDB/titleBlock"
import TopInfo from "../components/JDB/topInfo"
import TopLeftInfo from "../components/JDB/topLeftInfo"
import TopRightInfo from "../components/JDB/topRightInfo"
import LandingContent from "../components/landingContent";
import JobBlock from "../components/jobBlock";
import BodyHeading from "../components/bodyHeading";
import HandsPlanting from "../../public/images/handsPlanting.svg";
import PotDivider from "../../public/images/potDivider.png";
import ImageDivider from "../components/imageDivider";
import ValuesLeftTab from "../components/valuesLeftTab";
import ValuesRightTab from "../components/valuesRightTab";
import Slideshow from "../components/slideshow";
import BenSlide1 from "../../../public/images/BenSlide1.svg";
import BenSlide2 from "../../../public/images/BenSlide2.svg";
import BenSlide3 from "../../../public/images/BenSlide3.svg";
import doctor from "../../../public/images/doctor.svg";
import walkthrough from "../../../public/images/walkthrough.svg";
import JobApplicationPopUp from "@/app/components/jobApplicationPopUp";
import { FeatureTitle } from "../components/features/title"
import { Community, Health, Hours, Path, Tech } from "../components/features/card"
import { TestCard } from "../components/TestimonialCard"
import Shawna from "../../../public/images/shawna.svg"
import Adam from "../../../public/images/adam.svg"
import Alisa from "../../../public/images/alisa.svg"
import Footer from "../components/Footer"
import EmailButton from "../components/emailButton"

const features = [
  {
    title: "Be able to use cutting-edge technologies",
    id : "tech",
    card : Tech
  },
  {
    title: "Define your own path",
    id : "path",
    card : Path
  },
  {
    title: "We create a community",
    id : "community",
    card : Community
  },
  {
    title: "Flexible work hours",
    id : "hours",
    card : Hours

  },
  {
    title: "Exceptional healthcare insurance plans",
    id : "health",
    card : Health
  },
]

export default function Jobs() {
    return (
      // <main>
        // <LandingContent
        //   heading="Career \nBenefits"
        //   subheading="Explore our opportunities"
        // />
        // <BodyHeading marginTop="18vh" marginBottom="7vh">Extensive Health Insurance Plans</BodyHeading>
        // <div className="flex flex-row ml-[8vw] mr-[10vw]">
        //   <div style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '1.5vw', lineHeight: '2vw', marginRight: '15vw' }}>
        //   Join our team and enjoy the peace of mind that comes with our comprehensive insurance plan. Our coverage includes health, dental, and vision, with accessible premiums and flexible options tailored to your needs. With access to a vast network of healthcare providers and support services, your well-being is our priority. Explore the benefits of joining a company that values your health and happiness.
        //   </div>
        //   <img src={doctor.src} className="object-contain h-[50vh] w-[50vw]"></img>
        // </div>

        // <ImageDivider src={walkthrough.src} marginTop="18vh" marginBottom="20vh"></ImageDivider>

        // <Slideshow slides = {slides}/>
        // <div style={{marginBottom : "20vh"}}></div>
        //   <JobApplicationPopUp/>
      // </main>
      <div>
        <LandingContent
          heading="Career \nBenefits"
          subheading="Explore our opportunities"
        />        
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center pt-[35vw] pb-[10vw] px-[4vw] text-[8vw] sm:pt-[12vw] sm:pb-[1vw] sm:text-[3vw]" style={{ fontFamily: 'Bellota Text' }}>Look at some of our benefits below: </p>  
          <div className="flex w-full gap-[2vw] items-start">
            <div className="w-full py-[50vh]">
              <ul>
                {features.map((feature) => (
                  <li key={feature.id}>
                    <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticky top-0 flex h-screen w-full items-center">
              <div className="relative aspect-square w-full bg-gray-100 rounded-2xl">
                {features.map(feature => (
                  <feature.card id ={feature.id} key ={feature.id}/>
                ))}
              </div>  
            </div>
          </div>
        </div>
        <ImageDivider src={walkthrough.src} marginTop="1vw" marginBottom="1vw"></ImageDivider>
        <p className="text-center pt-[5vw] pb-[20vw] px-[4vw] text-[8vw] sm:pt-[5vw] sm:pb-[1vw] sm:text-[3vw]" style={{ fontFamily: 'Bellota Text' }}>What do our employees have to say? </p>  
        <div className="grid grid-cols-1 sm:grid-cols-3 px-[8vw] gap-[11vw]">
          <TestCard 
            source = {Shawna.src}
            name ="Shawna D."
            position ="Senior Environmental Analyst"
            location= "Seattle, WA"
            quote= '&quot;At Verdantia, I have thrived in a culture fostering creativity and collaboration. With supportive leadership and innovative projects, my journey here has been transformative. Proud to work where employees are valued.&quot;'
            email= "ShawnaD@verdantia.com"
          />
          <TestCard 
            source = {Adam.src}
            name ="Adam W."
            position ="Head of Forestry Operations"
            location= "San Francisco, CA"
            quote= '&quot;Verdantia offers a dynamic environment where talent thrives. Through continuous learning, I have grown both professionally and personally. Flexible work and a forward-thinking team make every day fulfilling.&quot;'
            email= "AdamW@verdantia.com"
          />
          <TestCard 
            source = {Alisa.src}
            name ="Alisa C."
            position ="Sustainable Design Consultant"
            location= "London, UK"
            quote= '&quot;Verdantia feels like family, fostering camaraderie and support. Over five years, ensuring customer happiness has been fulfilling. Super grateful to work where employee well-being is valued and contributions recognized.&quot;'
            email= "AlisaC@verdantia.com"
          />
        </div>
        <Footer>
        </Footer>
      </div>
    )
  }