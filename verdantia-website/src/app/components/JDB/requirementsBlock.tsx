interface myProps{
    desc : string,

}

 const ReqsBlock: React.FC<myProps> = ({ desc }) => {
    return (
        <div className="inline-flex flex-col gap-[0.9vh]">
            <p className="text-[1.1vw]" style={{ fontFamily: 'Bellota Text' }}>Job Requirements</p>
            <p className="text-[0.8vw] custom-text-wrap" style={{ fontFamily: 'Bellota Text' }}> {desc}</p>
        </div>
       
    )

}

export default ReqsBlock


