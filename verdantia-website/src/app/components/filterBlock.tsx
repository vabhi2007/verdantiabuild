import PropTypes from "prop-types";
import React from "react";

interface Props {
    title: string;
    className: any;
}

export const FilterBlock = ({title = "Coordinator", className}: Props): JSX.Element => {
    return (
        <div
            className={'flex w-[306px] h-[110px] items-center justify-around gap-[10px] p-[50px] relative bg-white rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] ${classname}'}
        >
            <div className="relative w-fit mt-[-13.50px] mb-[-11.50px] [font-family:'Bellota_Text-Regular', Helvetica] font-normal text-black text-[35px] tracking-[0] leading-[35px] whitespace-nowrap">
                {title}
            </div>
        </div>
    );
};

FilterBlock.propTypes = {
    title: PropTypes.string,
};