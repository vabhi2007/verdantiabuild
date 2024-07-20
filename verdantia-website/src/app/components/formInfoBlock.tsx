import PropTypes from "prop-types";

interface Props {
    title: string;
}

export const FormInfoBlock = ({
                             title = "First Name"
                         }: Props): JSX.Element => {
    return (
        <main>
            <div className={"inline-flex flex-col items-start gap-[1vw] relative"}>
                <div className={"relative w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                    {title}
                </div>
                <div
                    className="flex flex-row items-start justify-center gap-[1vw] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-center gap-[1vw] w-full">
                        <input
                            type="email"
                            placeholder="Email"

                            className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />
                        <input
                            type="password"
                            placeholder="Password"

                            className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-[1vw] w-full">
                        <input
                            type="email"
                            placeholder="Email"

                            className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />
                        <input
                            type="password"
                            placeholder="Password"

                            className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />
                    </div>
                </div>

            </div>
        </main>
    )
}