import DetailsBlock from "./detailsBlock"
import ReqsBlock from "./requirementsBlock"

interface myProps{
    detDesc : string,
    reqDesc : string
}

 const DetReqBlock: React.FC<myProps> = ({ detDesc, reqDesc }) => {
    return (
        // <div className="inline-flex flex-row gap-[0.9vw]">
        <div className="inline-flex flex-row gap-[4.7vw]">
            <DetailsBlock
                desc = {detDesc}
            />
            <ReqsBlock
                desc = {reqDesc}
            />
        </div>
    )

}

export default DetReqBlock
