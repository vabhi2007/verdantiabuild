import React from "react";
import DetReqBlock from "./JDB/detReqBlock";
import InfoPanel from "./JDB/infoPanel";
import TitleBlock from "./JDB/titleBlock";

import CoordinatorBanner from "../../../public/images/CoordinatorBanner.jpg";
import ManagerBanner from "../../../public/images/ManagerBanner.jpg";
import EngineerBanner from "../../../public/images/EngineerBanner.jpg";
import ScientistBanner from "../../../public/images/ScientistBanner.png";
import AnalystBanner from "../../../public/images/AnalystBanner.jpg";

interface myProps {
    workExperience: string;
    workType: string;
    salary: string;
    job: string;
    date: string;
    applicants: string;
    location: string;
    detDesc: string;
    reqDesc: string;
    onClose: () => void;
    onAddToList: () => void; // Add a prop to handle adding job to list
    onApply: () => void;
    listButtonText: string;
    applyButtonText: string;
}

const JobDetailBlock: React.FC<myProps> = ({ workExperience, workType, salary, job, date, applicants, location, detDesc, reqDesc, onClose, onAddToList, onApply, listButtonText, applyButtonText }) => {
    // Map workType to the appropriate banner image source
    const getBannerByWorkType = (workType: string) => {
        switch (workType.toLowerCase()) {
            case "coordinator":
                return CoordinatorBanner;
            case "manager":
                return ManagerBanner;
            case "engineer":
                return EngineerBanner;
            case "scientist":
                return ScientistBanner;
            default:
                return AnalystBanner;
        }
    };

    // Get the appropriate banner image source
    const bannerSrc = getBannerByWorkType(workType);

    return (
        <div className="bg-white inline-flex flex-col rounded-[1vw] gap-[3vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[3vw] py-[3vh]">
            <div style={{ height: "10vw", overflow: "hidden" }}>
                <img src={bannerSrc.src} alt="Banner" className="w-[40vw]" />
            </div>
            <TitleBlock job={job} date={date} applicants={applicants} location={location} onAddToList={onAddToList} onApply={onApply} listButtonText={listButtonText} applyButtonText={applyButtonText}/>
            <InfoPanel workExperience={workExperience} workType={workType} salary={salary} />
            <DetReqBlock detDesc={detDesc} reqDesc={reqDesc} />
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default JobDetailBlock;
