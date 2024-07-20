import React from 'react';

interface SectionWithIconProps {
  title: string;
  subheading: string;
  iconSrc: string;
  showDivider?: boolean;
}

const SectionWithIcon: React.FC<SectionWithIconProps> = ({
  title,
  subheading,
  iconSrc,
  showDivider = true,
}) => {
  return (
    <div className="ml-[8vw] mr-[8vw]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col text-left">
          <div className="text-lg mb-8 font-extrabold" style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '1.7vw', lineHeight: '1vw' }}>
            {title}
          </div>
          <div className="text-sm font-light" style={{ fontFamily: 'Montserrat', color: 'black', fontSize: '1.5vw', lineHeight: '2vw', marginRight: '15vw' }}>
            {subheading}
          </div>
        </div>
        <img src={iconSrc} alt="Icon" className="w-[10vw] h-[10vw]" />
      </div>
      {showDivider && <hr className="w-full border-t-4 border-gray-400 mt-[3vw] mb-[3vw] opacity-65"/>}
    </div>
  );
};

export default SectionWithIcon;
