interface myProps {
    title: string;
    subtitle?: string;
    salary?: string;
}

export const JobSubInfoBlock: React.FC<myProps> = ({ title, subtitle, salary }) => {
    return (
        <div className="flex flex-1 flex-col bg-white rounded-[1vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)]  px-[4.5vh] py-[1.3vh] items-center gap-[0.5vh]">
            <p className="font-montserrat text-[1.5vh] font-medium text-[#737373]">{title}</p>
            {subtitle && <p className="text-[1.5vh] font-medium" style={{ fontFamily: 'Montserrat' }}>{subtitle}</p>}
            {salary &&
                <div className="inline-flex flex-row items-center"> {/* Apply align-items: center */}
                    <p className="text-[1.5vh] font-medium" style={{ fontFamily: 'Montserrat' }}>${parseInt(salary)/1000},000</p>
                    <p className="text-[1.3vh] font-medium text-[#b2b2b2] mt-[0.3vh]" style={{ fontFamily: 'Montserrat' }}>/year</p>    
                </div>
            }
        </div>
    )
}
