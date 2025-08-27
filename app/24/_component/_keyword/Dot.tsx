import React from 'react';

interface DotProps {
  onHover: () => void;
  onLeave: () => void;
  smallCircle: string;
  bigCircleColor: string; //when hover event occurs, each hover color changes
}

const Dot: React.FC<DotProps> = ({ onHover, onLeave, smallCircle, bigCircleColor }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`w-[23px] h-[23px] rounded-full ${bigCircleColor} transition-colors duration-300`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      />
    <div
      className={`absolute w-[15px] h-[15px] ${smallCircle} rounded-full cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
    </div>
  );
}

export default Dot;
