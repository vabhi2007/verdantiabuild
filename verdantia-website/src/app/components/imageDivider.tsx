import React from 'react';

interface DividerProps {
  src: string;
  marginTop?: string;
  marginBottom?: string;
}

const FullWidthImageDivider: React.FC<DividerProps> = ({ src, marginTop, marginBottom }) => {
  return (
    <div className={`w-full`} style={{marginTop: marginTop || '0', marginBottom: marginBottom || '0'}}>
      <img src={src} alt="Full Width Image Divider" className="w-0 sm:w-full" />
    </div>
  );
};
 
export default FullWidthImageDivider;
