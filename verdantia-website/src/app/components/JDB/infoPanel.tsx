import { JobSubInfoBlock } from "./jobSubInfoBlock"

interface myProps{
    workExperience : string,
    workType : string,
    salary : string 
}

 const InfoPanel: React.FC<myProps> = ({ workExperience, workType, salary }) => {
    return (
        <div className="w-full flex-row inline-flex gap-[0.5vh] w-[35vw] items-stretch">
            <JobSubInfoBlock
                title = "Work Experience"
                subtitle = {workExperience}
            />
            <JobSubInfoBlock
                title = "Work Type"
                subtitle = {workType}
            />        
            <JobSubInfoBlock
                title = "Salary"
                salary = {salary}
            />              
        </div>
    )

}

export default InfoPanel
