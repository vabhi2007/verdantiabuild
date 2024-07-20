import TopInfo from "./topInfo"

interface myProps{
    job : string
    date : string
    applicants : string
    location : string
    listButtonText: string
    onAddToList: () => void; // Add a prop to handle adding job to list
    onApply: () => void;
    applyButtonText: string
}
const TitleBlock: React.FC<myProps> = ({ job, date, applicants, location, onAddToList, onApply, listButtonText, applyButtonText }) => {
    return (
        <div className="flex-col inline-flex"> {/* Adjusted gap here */}
            <TopInfo
                job={job}
                date={date}
                onAddToList={onAddToList}
                onApply={onApply}
                listButtonText={listButtonText}
                applyButtonText={applyButtonText}
            />
            <div className="flex-col inline-flex gap-[0.9vh]">
                {/*<p className="text-[0.9vw] text-opacity-70 text-[#53975D]" style={{ fontFamily: "Montserrat" }}>{applicants} applicants</p>*/}
                {/*<p className="text-[1.2vw] text-opacity-70" style={{ fontFamily: "Bellota Text" }}>Verdantia</p>*/}
                <p className="text-[0.9vw] text-[#A4A4A4]" style={{ fontFamily: "Montserrat" }}>{location}</p>
            </div>
        </div>
       
    )

}

export default TitleBlock
