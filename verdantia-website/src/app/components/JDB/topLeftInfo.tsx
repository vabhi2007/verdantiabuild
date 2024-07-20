interface myProps{
    job : string,
    date : string
}

 const TopLeftInfo: React.FC<myProps> = ({ job, date }) => {
    return (
        <div className="inline-flex flex-row  gap-[3.9vw] items-center ">
            <p className="text-[1.3vw]" style={{ fontFamily: 'Bellota Text' }}>{job}</p>
            {/*<p className="text-[0.9vw] custom-text-wrap text-[#b2b2b2]" style={{ fontFamily: 'Bellota Text' }}>Posted {date} days ago</p>*/}
        </div>
       
    )

}

export default TopLeftInfo
