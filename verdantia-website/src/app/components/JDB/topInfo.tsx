import TopLeftInfo from "./topLeftInfo"
import TopRightInfo from "./topRightInfo"

interface myProps{
    job : string
    date : string
    onAddToList: () => void; // Add a prop to handle adding job to list
    onApply: () => void;
    listButtonText: string
    applyButtonText: string
}
const TopInfo: React.FC<myProps> = ({ job, date, onAddToList, onApply, listButtonText, applyButtonText }) => {
    return (
        <div className="inline-flex flex-row gap-[6vw] w-[39vw] flex items-baseline">
            <TopLeftInfo
                job={job}
                date={date}
            />
            <TopRightInfo onAddToList={onAddToList} onApply={onApply} listButtonText={listButtonText} applyButtonText={applyButtonText} />
        </div>
       
    )

}

export default TopInfo