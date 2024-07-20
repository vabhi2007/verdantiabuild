import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    marginTop?: string;
    marginBottom?: string;
    centerAligned?: boolean; // Add centerAligned prop
    size?: string
  }
  
const BodyHeading = ({ children, marginTop, marginBottom, centerAligned, size }: Props) => {
    const alignmentClass = centerAligned ? "text-center" : "text-left"; // Conditionally assign CSS class based on centerAligned prop
    const marginStyle = centerAligned ? { marginLeft: '0', marginRight: '0' } : { marginLeft: '8vw', marginRight: '8vw'}; // Conditionally set margins based on centerAligned prop
    return (
        <div
        className={`text-lg relative ${alignmentClass}`} // Add alignmentClass
        style={{ 
            fontFamily: 'Bellota Text', 
            color: '#3E3E3E', 
            fontSize: size || '2.5vw', 
            lineHeight: '3vw',
            marginTop: marginTop || '0', 
            marginBottom: marginBottom || '0',
            ...marginStyle // Spread marginStyle object to apply margins conditionally
        }}
        >
        {children}
        </div>
    );
};  

export default BodyHeading;
