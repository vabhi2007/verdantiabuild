'use client';

import { collection, doc, getDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import BodyHeading from './components/bodyHeading';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ImageDivider from './components/imageDivider';
import JobApplicationPopUp from './components/jobApplicationPopUp';
import JobBlock from './components/jobBlock';
import JobDetailBlock from './components/jobDetailBlock';
import LandingContent from './components/landingContent';
import Slideshow from './components/slideshow';
import ValuesLeftTab from './components/valuesLeftTab';
import ValuesRightTab from './components/valuesRightTab';
import { db } from '@/app/firebase/config';
import { motion } from 'framer-motion';
import HandsPlanting from '../../public/images/handsPlanting.svg';
import PotDivider from '../../public/images/potDivider.png';
import ForestDivider from '../../public/images/forestDivider.png';
import Slide1 from '../../public/images/Slide1.svg';
import Slide2 from '../../public/images/Slide2.svg';
import Slide3 from '../../public/images/Slide3.svg';
import Slide4 from '../../public/images/Slide4.svg';
import Slide5 from '../../public/images/Slide5.svg';
import NewSlideshow from "./components/DesktopCarousel";
import CarouselDemo from './components/niglatron';

interface Job {
  id: string;
  name: string;
  location: string;
  place: string;
  applicants: string;
  date: string;
  role: string;
  duration: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string;
}

interface JobApplicationFormData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipCode: string;
}

const slides = [
  {
    imageUrl: Slide1.src,
    heading: 'Reforestation Initiatives',
    subheading:
      '"30 per cent of emissions from industry and fossil fuels are soaked up by forests and woodlands. Yet every year the world loses 10 million hectares of forest. Deforestation and forest degradation accounts for 11 per cent of carbon emissions." - UN Environment Programme',
    description:
      'Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of critical ecosystems and providing habitat for various wildlife species.',
  },
  {
    imageUrl: Slide2.src,
    heading: 'Carbon Neutrality Achieved',
    subheading:
      '"A recently published report identified that 100 energy companies have been responsible for 71% of all industrial emissions since human-driven climate change was officially recognized." - National Resources Defense Council',
    description:
      'Through innovative technologies and sustainable practices, Verdantia has achieved carbon neutrality across its operations, making significant strides in reducing its carbon footprint.',
  },
  {
    imageUrl: Slide3.src,
    heading: 'Eco-Education Outreach',
    subheading:
      '"Environmental education is a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment." - United States Environmental Protection Agency',
    description:
      'Verdantia\'s dedicated teams have conducted eco-education programs in local communities, reaching over 10,000 individuals and inspiring environmentally conscious practices.',
  },
  {
    imageUrl: Slide4.src,
    heading: 'Smart City Collaboration',
    subheading:
      '"Digitalisation and smart controls can reduce emissions from buildings by 350 Mt CO2 by 2050." - International Energy Agency',
    description:
      'Verdantia\'s smart city solutions with progressive municipalities have lowered energy usage, enhanced waste management efficiency, and elevated urban sustainability.',
  },
  {
    imageUrl: Slide5.src,
    heading: 'Biodiversity Conservation',
    subheading:
      '"The World Wide Fund for Nature’s Living Planet Report 2022 documents a 69% average loss in the abundance of mammal, bird, reptile, fish and amphibian species since 1970." - The London School of Economics and Political Science',
    description:
      'Verdantia actively supports biodiversity conservation efforts by protecting endangered species and preserving vital habitats.',
  },
];

export default function Home() {
  const [user] = useAuthState(auth);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [userJobList, setUserJobList] = useState<string[]>([]);
  const [userAppliedJobs, setUserAppliedJobs] = useState<string[]>([]);
  const [allJobs, setJobListings] = useState<Job[]>([]);
  const [showApplicationPopup, setShowApplicationPopup] = useState(false);
  const [jobApplicationSubmitted, setJobApplicationSubmitted] = useState(false);
  

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'allJobs'), (snapshot) => {
      const jobs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Job));
      setJobListings(jobs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserJobList = async () => {
      if (user) {
        try {
          const userRef = doc(db, `users/${user.uid}`);
          const userData = await getDoc(userRef);
          const userJobListData = userData.data()?.jobList || [];
          setUserJobList(userJobListData);
        } catch (error) {
          console.error('Error fetching user jobList:', error);
        }
      }
    };

    fetchUserJobList();
  }, [user]);

  useEffect(() => {
    const fetchUserAppliedJobs = async () => {
      if (user) {
        try {
          const userRef = doc(db, `users/${user.uid}`);
          const userData = await getDoc(userRef);
          const userAppliedJobsData = userData.data()?.appliedJobs || [];
          setUserAppliedJobs(userAppliedJobsData);
        } catch (error) {
          console.error('Error fetching user appliedJobs:', error);
        }
      }
    };

    fetchUserAppliedJobs();
  }, [user]);

  const addToUserJobList = async (jobId: string) => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userData = await getDoc(userRef);
        const userJobList = userData.data()?.jobList || [];

        let updatedJobList: string[] = [];

        if (userJobList.includes(jobId)) {
          await updateDoc(userRef, {
            jobList: arrayRemove(jobId),
          });
          updatedJobList = userJobList.filter((id: string) => id !== jobId);
        } else {
          await updateDoc(userRef, {
            jobList: arrayUnion(jobId),
          });
          updatedJobList = [...userJobList, jobId];
        }

        setUserJobList(updatedJobList);
      } catch (error) {
        console.error('Error updating user jobList:', error);
      }
    } else {
      router.push('/signIn');
    }
  };

  const addToUserAppliedJobs = async (jobId: string) => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userData = await getDoc(userRef);
        const userAppliedJobs = userData.data()?.appliedJobs || [];

        if (!userAppliedJobs.includes(jobId)) {
          await updateDoc(userRef, {
            appliedJobs: arrayUnion(jobId),
          });
          setUserAppliedJobs([...userAppliedJobs, jobId]);
        }
      } catch (error) {
        console.error('Error updating user appliedJobs:', error);
      }
    } else {
      router.push('/signIn');
    }
  };

  const handleApplyToJob = (jobId: string) => {
    if (!userAppliedJobs.includes(jobId)) {
      setSelectedJob(allJobs.find(job => job.id === jobId) || null); // Select the job
      setShowApplicationPopup(true); // Show the application popup when they click Apply within the popup
    }
  };

  const handleClosePopup = () => {
    setShowApplicationPopup(false);
  };

  const handleJobApplicationSubmit = async (formData: JobApplicationFormData) => {
    if (user && selectedJob) {
      try {
        formData.userId = user.uid;
        // Add job application document
        await setDoc(doc(db, 'jobApplications', selectedJob.id), formData);
  
        // Update user's appliedJobs locally
        const updatedAppliedJobs = [...userAppliedJobs, selectedJob.id];
        setUserAppliedJobs(updatedAppliedJobs);
  
        // Update user's appliedJobs in Firestore
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          appliedJobs: arrayUnion(selectedJob.id),
        });
  
        setJobApplicationSubmitted(true);
        setShowApplicationPopup(false); // Close popup after submission
  
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };
  

  const handleJobBlockClick = (job: Job) => {
    setSelectedJob(job);
  };

  return (
    <main>
      <LandingContent
        heading="Welcome to \nVerdantia"
        subheading="Where Sustainability meets Innovation"
        buttonText="Join the Team"
      />

      <div>
        <BodyHeading marginTop="6vw" marginBottom="2vw">
          Featured Jobs
        </BodyHeading>
        <Carousel
          blocks={allJobs.map((job) => ({
            data: job.date,
            applicantCount: job.applicants,
            workMethod: job.place,
            location: job.location,
            jobTitle: job.name,
            duration: job.duration,
            onClick: () => handleJobBlockClick(job),
          }))}
        />
      </div>

      <div>
        <BodyHeading marginTop="24vw">Our Mission</BodyHeading>
        <div
          className="flex items-center ml-[8vw] mr-[8vw]"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 300,
            color: '#3E3E3E',
            fontSize: '1.5vw',
            lineHeight: '2.25vw',
          }}
        >
          <div className="mr-[10vw]">
            At Verdantia, our mission is to revolutionize{' '}
            <strong>environmental sustainability</strong> by seamlessly integrating technology and
            human impact. We believe in a holistic approach, leveraging{' '}
            <strong>cutting-edge innovations</strong> alongside direct, hands-on efforts to create a
            more <strong>sustainable and resilient future</strong> for our planet.
          </div>
          <img src={HandsPlanting.src} alt="Hands Planting" className="w-[40vw] h-auto" />
        </div>
      </div>

      <ImageDivider src={PotDivider.src} marginTop="6vw"></ImageDivider>

      <div>
        <BodyHeading marginTop="4vw" marginBottom="3vw">
          Our Values
        </BodyHeading>

        <div>
          <ValuesLeftTab
            title="01 - Environmental Awareness"
            subheading="We inspire positive change through mindful environmental awareness and education."
            iconSrc="/images/Values1.svg"
          />

          <ValuesRightTab
            title="02 - Collaboration"
            subheading="We thrive using collaboration, leveraging its power for meaningful change in sustainability."
            iconSrc="/images/Values2.svg"
          />

          <ValuesLeftTab
            title="03 - Leadership"
            subheading="Guided by visionary leadership, we aim to inspire a sustainable future through innovation and determination."
            iconSrc="/images/Values3.svg"
          />

          <ValuesRightTab
            title="04 - Responsibility"
            subheading="Responsibility is central to Verdantia, guiding decisions with integrity as well as transparency for sustainable initiatives."
            iconSrc="/images/Values4.svg"
            showDivider={false}
          />
        </div>
      </div>

      <ImageDivider src={ForestDivider.src} marginTop="6vw"></ImageDivider>

      <div className=''>
        <BodyHeading marginTop="4vw" marginBottom="2vw" centerAligned={true}>
          Our Impacts
        </BodyHeading>
        <NewSlideshow/>
      </div>

      {/* Extra margin so footer doesn't look weird */}
      <div style={{ marginBottom: '20vw' }}></div>

      {selectedJob && (
        <div className="top-0 left-0 w-full h-full flex items-center justify-center fixed bg-black bg-opacity-50 z-20">
          <JobDetailBlock
            job={selectedJob.name}
            date={selectedJob.date}
            applicants={selectedJob.applicants}
            location={selectedJob.location}
            workExperience={selectedJob.experience}
            workType={selectedJob.role}
            salary={selectedJob.salary}
            detDesc={selectedJob.description}
            reqDesc={selectedJob.requirements}
            onClose={() => setSelectedJob(null)}
            listButtonText={userJobList.includes(selectedJob.id) ? 'Remove from List' : 'Add to List'}
            onAddToList={() => addToUserJobList(selectedJob.id)}
            onApply={() => handleApplyToJob(selectedJob.id)}
            applyButtonText={userAppliedJobs.includes(selectedJob.id) ? 'Applied' : 'Apply'}
          />
        </div>
      )}

      {showApplicationPopup && selectedJob && (
        <div className="top-0 left-0 w-full h-full flex items-center justify-center fixed bg-black bg-opacity-50 z-20">
          <JobApplicationPopUp onClose={handleClosePopup} onSubmit={handleJobApplicationSubmit} job={selectedJob?.name || ''} />
        </div>
      )}

      <Footer />
    </main>
  );
}
